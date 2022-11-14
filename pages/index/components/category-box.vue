<template>

	<view class="category-box">
		<view v-for="(item,index) in categoryList.slice(0,7)" :key="item.id">
			{{item.name}}
		</view>
		<view class="classify">
			全部分类
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			categoryList: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss">
	.category-box {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 20rpx 30rpx 0 30rpx;

		>view {
			font-size: 26rpx;
			width: 160rpx;
			height: 70rpx;
			text-align: center;
			line-height: 70rpx;
			background-color: $i-color-grey;
			border-radius: 20rpx;
			margin-top: 15rpx;
			overflow: hidden;
		}
	}
</style>
