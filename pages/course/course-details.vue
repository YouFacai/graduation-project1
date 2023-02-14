<template>
  <view class="detils">
    <!-- 主图和简介 -->
    <brief :course="course"></brief>
  </view>
</template>

<script>
import brief from '@/pages/course/components/course-handle.vue'
import classApi from "@/api/index.js"

export default {
  components: {
    brief
  },
  onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
    this.id = option.id
    let id = this.id
    this.getClassDetail({id})
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
      console.log(this.course)
    }
  }
}
</script>

<style lang="scss">
</style>



