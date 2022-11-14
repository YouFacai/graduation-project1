<template>
	<view class="keyword">
		<view class="title">
			热门搜索
		</view>
		<view class="tag-list">
			<view @click="handleChangeTag(item)" v-for="(item,index) in hotList" :key="index">{{item}}</view>
		</view>


		<view class="title space-between">
			<text>历史搜索</text>
			<text @click="ClearHistory">清空</text>
		</view>
		<view class="tag-list">
			<view @click="handleChangeTag(item)" v-for="(item,index) in historyList" :key="index">{{item}}</view>
		</view>
	</view>
</template>

<script>
	import {
		HISTORY_KEY
	} from '@/enum/keyword-key.js'
	export default {
		data() {
			return {
				//热门搜索列表数据
				hotList: ['Java', 'SpringBoot', 'SpringCloud', 'Python', 'Vue', 'React'],
				//历史记录
				historyList: wx.getStorageSync(HISTORY_KEY)
			}
		},
		methods: {
			//设置搜索框子的值
			handleChangeTag(content) {
				
				this.handelSearchValue(content)
				//将当前的值传递
				this.$emit("handleSearch", {
					value: content
				})
			},
			//清空历史记录方法
			ClearHistory() {
				//清空historyList列表数据
				this.historyList = []
				//清空本地存储
				uni.removeStorageSync(HISTORY_KEY)
			}
		}
	}
</script>

<style lang="scss">
	.keyword {
		padding: 25rpx;

		.title {
			font-size: 30rpx;

			text:last-child {
				color: #999;
			}
		}

		.tag-list {
			display: flex;
			flex-wrap: wrap;
			margin-top: 20rpx;
			margin-bottom: 60rpx;

			>view {
				font-size: 28rpx;
				color: #999;
				border: 1rpx solid #999;
				border-radius: 8rpx;
				padding: 6rpx 15rpx;
				margin: 10rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
	}
</style>
