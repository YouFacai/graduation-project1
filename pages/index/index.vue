<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->
		<!-- 在小程序端使用  input框-->
		<!-- native事件穿透 -->
		<searchInput @click.native="navTo('/pages/search/search')"></searchInput>
		<!-- #endif -->
		<!-- 轮播图 -->
		<mxgBanner :bannerList="bannerList"></mxgBanner>
		<!-- 分类模块导入 -->
		<categoryBox :categoryList="classifyList"></categoryBox>
		<!-- 热门推荐、近期上新、免费精选 、付费精品、 -->
		<view class="list-container">
<!--			&lt;!&ndash; 热门推荐 &ndash;&gt;-->
<!--			<swiperList name="热门推荐" word="HOT" :courseData="hotList"></swiperList>-->
			<!-- 近期上新 -->
			<recommend name="近期上新" word="NEW" :courseData="newList"></recommend>
			<!-- 免费精选 -->
			<swiperList name="免费精选" word="FREE" :courseData="freeList"></swiperList>
			<!-- 付费精品 -->
			<ListCourse name="付费精品" word="NICE" :courseData="payList"></ListCourse>
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
				//轮播图
				bannerList: [],
				//分类
				classifyList: [],
				// 热门
				hotList: [],
				//近期上新
				newList: [],
				// 免费精选
				freeList: [],
				//付费精选
				payList: []
			}
		},
		//点击搜索框触发的方法
		onNavigationBarSearchInputClicked() {
			 this.navTo("/pages/search/search")
		},
		
		onLoad() {
			// #ifdef APP-PLUS
			// // 搜索框提示信息，只在APP中有
			searchVal.handleUpdatePlaceholderText(this)
			// #endif

			//调用轮播图方法
			this.getBannerList()
			//调用分类数据的方法
			this.getClassifyList()
			//调用近期上新数据
			this.getNewList()
			//调用免费精选数据
			this.getFreeList()
			//调用付费精选数据
			this.getPayList()
		},
		methods: {
			//获取轮播图数据
			async getBannerList() {
				try {
					const response = await IndexApi.getBanner()
					this.bannerList = response
				} catch (e) {
					console.log("err", e)
				}
			},
			//获取分类接口数据
			async getClassifyList() {
				try {
					const response = await IndexApi.getClassify()
					this.classifyList = response
				} catch (e) {
					console.log(e);
				}
			},
			//获取近期上新接口数据
			async getNewList() {
				try {
					const response = await IndexApi.getOptinos({
						sort: "new"
					})
					this.newList = response
          console.log(this.newList);
				} catch (e) {
					console.log(e);
				}
			},


			//获取免费精选接口数据
			async getFreeList() {
				try {
					const response = await IndexApi.getOptinos({
						isFree: 0
					})
					this.freeList = response
          // console.log(response);
				} catch (e) {
					console.log(e);
				}
			},

			//获取付费精品数据
			async getPayList() {
				try {
					const response = await IndexApi.getOptinos({
						isFree: 1
					})
					this.payList = response
				} catch (e) {
					console.log(e);
				}
			},
		}
	}
</script>

<style lang="scss">
	.list-container {
		padding: 0 30rpx;
	}
</style>
