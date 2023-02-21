<template>
  <view>
    <view>购买成功</view>
    <view>将在{{ time }}秒后自动返回</view>
  </view>
</template>

<script>
import api from "../../api/index"
import Login from "../login";
export default {
  name: "pay",
  data() {
    return {
      time: 2
    }
  },
  methods: {
    mysettimeout(courseId) {
      let timer = setInterval(() => {
        this.time = this.time - 1
        if (this.time == 0) {
          clearTimeout(timer)
          uni.redirectTo({
            url:`/pages/course/course-details?id=${courseId}&ispay=1`
          })
        }
      }, 1000)
    },
  },
  onLoad(param){
    api.addpay(param)
    this.mysettimeout(param.courseId);
  }
}
</script>

<style scoped>

</style>