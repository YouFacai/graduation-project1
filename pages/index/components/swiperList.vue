<template>
	<listBox :name="name" :word="word">
		<swiper class="list-swiper" :style="{ height: `${210 * rows}rpx` }">
			<swiper-item v-for="(n, i) in column" :key="i" >
				<view @click="skip(item)" class="swiper-item" v-for="(item, index) in courseData.slice(i * rows, (i + 1) * rows)"
					:key="item.id">
					<CourseItem :item="item"></CourseItem>
				</view>
			</swiper-item>
		</swiper>
	</listBox>
</template>

<script>
	import CourseItem from '@/components/common/course-item.vue'
	import listBox from "@/pages/index/components/swiper-course.vue"
	import courseData from '@/mock/courseData.js'
	export default {
		props: {
			name: {
				type: String,
				default: ""
			},
			word: {
				type: String,
				default: ""
			},
			column: {
				type: Number,
				default: 2
			},
			rows: {
				type: Number,
				default: 5
			},
			courseData: {
				type: Array,
				default: () => courseData
			}
		},
		components: {
			CourseItem,
			listBox,
		},
		data() {
			return {

			}
		},
    methods:{
      //点击跳转
      skip(id){
        uni.navigateTo({
          url:`/pages/course/course-details?id=${id}`
        });
      }
    }
	}
</script>

<style lang="scss">

</style>
