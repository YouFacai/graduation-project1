<template>
  <view>
    <view @click="skip(item)" class="swiper-item" v-for="(item, index) in renderList"
          :key="item">
      <CourseItem :item="item"></CourseItem>
    </view>
  </view>
</template>

<script>
import api from "../../api/index"
import CourseItem from '@/components/common/course-item.vue'
export default {
  name: "myLike",
  components: {
    CourseItem
  },
  data() {
    return {
      renderList: [],
      usemsg: {}
    }
  },
  onLoad() {
    uni.getStorage({
      key: 'userMsg',
      success: (res) => {
        this.usemsg = JSON.parse(res.data) || {}
        this.getLikeList()
      },
      fail: () => {
        this.usemsg = {}
      }
    })
  },
  methods: {
    async getLikeList() {
      let data = await api.getLikeCourse({id: this.usemsg.id});
      this.renderList = data
    },
    skip(item){
      console.log(item)
      uni.navigateTo({
        url:`/pages/course/course-details?id=${item.courseid}`
      });
    }
  }
}
</script>

<style scoped>

</style>