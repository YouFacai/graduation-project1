<template>
  <listBox :name="name" :word="word">
    <div @click="skip(item)" v-for="(item,index) in courseData" :key="item.id">
      <CourseItem  :item="item"></CourseItem>
    </div>

  </listBox>
</template>

<script>
import CourseItem from '@/components/common/course-item.vue'
import listBox from "@/pages/index/components/swiper-course.vue"
import courseData from '@/mock/courseData.js'

export default {
  components: {
    CourseItem,
    listBox,
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    word: {
      type: String,
      default: ''
    },
    courseData: {
      type: Array,
      default: () => courseData
    }
  },
  data() {
    return {}
  },
  methods: {
    //点击跳转
    skip(id) {
      console.log(id)
      uni.navigateTo({
        url: `/pages/course/course-details?id=${id}`
      });
    }
  }
}
</script>

<style lang="scss">

</style>
