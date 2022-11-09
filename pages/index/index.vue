<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->
		<!-- 在小程序端使用  input框-->
		<searchInput></searchInput>
		<!-- #endif -->
		<!-- 轮播图 -->
		<mxgBanner></mxgBanner>
	</view>
</template>

<script>
	//引入轮播图组件
	import mxgBanner from '@/components/common/mxg-banner.vue'
	//引入input框组件
	import searchInput from '@/components/common/search-input.vue'
	//引入 model/searchVal.js、App组件 
	import searchVal from '@/model/searchVal.js'
	export default {
		components: {
			mxgBanner,
			searchInput
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
		},
		methods: {
			// 搜索框滚动数据

		},
	}
</script>

<style>

</style>
