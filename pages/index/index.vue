<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->
		<!-- 在小程序端使用  input框-->
		<searchInput></searchInput>
		<!-- #endif -->
		<!-- 轮播图 -->
		<mxgBanner></mxgBanner>
		<!-- 分类模块导入 -->
		<categoryBox></categoryBox>
		<!-- 热门推荐、近期上新、免费精选 、付费精品、 -->
		<view class="list-container">
			<!-- 热门推荐 -->
			<swiperList name="热门推荐" word="HOT"></swiperList>
			<!-- 近期上新 -->
			<recommend name="近期上新" word="NEW"></recommend>
			<!-- 免费精选 -->
			<swiperList name="免费精选" word="FREE"></swiperList>
			<!-- 付费精品 -->
			<ListCourse name="付费精品" word="NICE"></ListCourse>
		</view>
	</view>
</template>

<script>
	//引入轮播图组件
	import mxgBanner from '@/components/common/mxg-banner.vue'
	//引入input框组件
	import searchInput from '@/components/common/search-input.vue'
	//引入分类组件
	import categoryBox from '@/pages/index/components/category-box.vue'
	//引入热门推荐组件 
	import swiperList from '@/pages/index/components/swiperList.vue'
	//引入近期上新组件
	import recommend from '@/pages/index/components/recommend .vue'
	// 引入付费精品组件
	import ListCourse from '@/pages/index/components/list-course.vue'
	// model/searchVal.js模块导入 实现app端input文字轮播
	import searchVal from '@/model/searchVal.js'
	//引入api接口
	import IndexApi from '@/api/index.js'
	//引入首页模型
	import IndexModel from "@/model/indexModel.js"

	import {
		log
	} from 'util'
	export default {
		components: {
			mxgBanner,
			searchInput,
			categoryBox,
			swiperList,
			recommend,
			ListCourse,
		},
		onNavigationBarButtonTap: function(e) {
			const index = e.index
			if (index === 0) {
				IndexModel.handleOpenScode()
			}
		},
		data() {
			return {

			}
		},
		onLoad() {
			// #ifdef APP-PLUS
			// // 搜索框提示信息，只在APP中有
			searchVal.handleUpdatePlaceholderText(this)
			// #endif


			this.getBannerList()
		},
		methods: {
			async getBannerList() {
				try {
					const response = await IndexApi.getBanner()
					console.log(response);
				} catch (e) {
					console.log("err", e)
				}
			}
		}
	}
</script>

<style lang="scss">
	.list-container {
		padding: 0 30rpx;
	}
</style>
