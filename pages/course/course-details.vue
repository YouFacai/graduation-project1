<template>
  <view class="detils">
    <!-- 主图和简介 -->
    <brief :course="course"></brief>
  </view>
</template>

<script>
import brief from '@/pages/course/components/course-handle.vue'
import classApi from "@/api/index.js"
import api from "../../api";

export default {
  components: {
    brief
  },
  onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
    this.id = option.id
    let id = this.id
    this.getClassDetail({id})
    this.myispay()
  },
  data() {
    return {
      id: "",
      course: {}
    }
  },
  methods: {
    async getClassDetail(param) {
      this.course = await classApi.getClassDetails(param)
    },
    /*判断是否购买过课程*/
    async myispay(){
      uni.getStorage({
        key: 'userMsg',
        success: async (res)=> {
          let data = await classApi.ispay({userid:JSON.parse(res.data).id,courseId:this.id})
          this.course = {
            ispay : data.ispay,
            ...this.course,
            vedio:data.ispay == 1 ? await this.getcourseUrl(this.course.id):[]
          }

        }
      });

    },
    async getcourseUrl(courseid) {
      let data  = await classApi.getcourseVedio({courseid});
      return data
    }
  }
}
</script>

<style lang="scss">
</style>



