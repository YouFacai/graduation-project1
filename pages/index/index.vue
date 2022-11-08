<template>
	<view>
		<mxgBanner :bannerList='bannerList'></mxgBanner>
	</view>
</template>

<script>
	import mxgBanner from '@/components/common/mxg-banner.vue'
	export default {
		components: {
			mxgBanner
		},
		data() {
			return {
				bannerList: [{
						id: 1,
						imageUrl: "/static/images/banner1.jpg",
						background: "#45328c",
						advertUrl: '/pages/course/course-details'
					},
					{
						id: 2,
						imageUrl: "/static/images/banner2.jpg",
						background: "#006C00",
						advertUrl: '/pages/course/course-details'
					},
					{
						id: 3,
						imageUrl: "/static/images/banner3.jpg",
						background: "#0072B7",
						advertUrl: '/pages/course/course-details'
					}
				]
			}
		},
		onLoad() {
			// #ifdef APP-PLUS
			// 搜索框提示信息，只在APP中有
			this.placeholderData()
			// #endif
		},
		methods: {
			// 搜索框滚动数据
			placeholderData() {
				//获取当前页面实例, 仅 App 支持写在APP-PLUS条件编译下
				let webview = this.$scope.$getAppWebview();
				let arr = ['APP · 微信小程序', 'Java · SprinBoot', 'SpringCloud · SpringSecurity ', 'Vue· React '];
				// 执行马上调用，如果在定时器自调用会报错，所以第一次放外面
				let i = 0;
				webview.setStyle({
					'titleNView': {
						"searchInput": {
							"placeholder": arr[i]
						}
					}
				})
				setInterval(() => {
					// 定时循环显示每个元素，3最后一个元素，又从0第1个元素开始
					i = i < 3 ? ++i : 0;
					webview.setStyle({
						'titleNView': {
							"searchInput": {
								"placeholder": arr[i]
							}
						}
					})
				}, 3000) // () 自调用第一次立即执行，但是ios会报错，所以在定时器外面执行第一次
			},
		},
	}
</script>

<style>

</style>
