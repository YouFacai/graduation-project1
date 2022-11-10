<template>
	<view class="list-box">
		<view class="itme-box">
			<view class="left">
				<text class="name">{{name}}</text>
				<text class="word" w-if='word'>{{word}}</text>
			</view>
			<view class="rightAll">
				<text>全部</text>
				<text class="iconfont icon-right"></text>
			</view>
		</view>
		<!-- 课程列表区域 -->
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			name: {
				type: String,
				default: ''
			},
			word: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style lang="scss">
	.list-box {
		margin-top: 60rpx;

		.itme-box {
			position: relative;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 20rpx;

			.name {
				font-size: 38rpx;
				font-weight: 500;
				color: #303133;
				margin-right: 10rpx;
			}

			.word {
				position: absolute;
				top: 4rpx;
				background-image: linear-gradient(to right, $i-color-orange, $i-text-color-red);
				font-size: 20rpx;
				color: #fff;
				padding: 0 10rpx;
				border-radius: 30rpx 30rpx 30rpx 0;
			}
		}

		.rightAll {
			font-weight: normal;
			color: $i-text-color-grey;
			font-size: 28rpx;

			.iconfont {
				font-size: 25rpx;
			}
		}
	}
</style>
