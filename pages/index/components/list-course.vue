<template>
	<listBox :name="name" :word="word">
		<CourseItem v-for="(item,index) in courseData" :key="item.id" :item="item"></CourseItem>
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
			return {

			}
		}
	}
</script>

<style lang="scss">

</style>
