<template>
	<view class="tab-bar">
		<view class="bar-view">
			<view class="bar-item" @click="handelclickTab(index)" :class="{current:index==value}"
				v-for="(item,index) in tabs" :key="index">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			value: {
				type: Number,
				default: 0
			},
			tabs: {
				type: Array,
				default: () => [{
						id: "1",
						name: "课程",

					},
					{
						id: "2",
						name: "文章",

					},
					{
						id: "3",
						name: "问答",

					},
				]
			}
		},
		data() {
			return {

			}
		},
		methods: {
			handelclickTab(index) {
				// console.log(index,'index');
				this.$emit('input', index)

			}
		}
	}
</script>

<style lang="scss">
	.tab-bar {
		width: 100%;
		height: 80rpx;
		background-color: #fff;
		border-bottom: 1rpx solid #efeff4;

		.bar-view {
			width: 100%;
			display: flex;
			text-align: center;
			line-height: 80rpx;

			.bar-item {
				flex: 1;
				font-size: 30rpx;
				position: relative;

				&::after {
					position: absolute;
					 content: '';
					 width: 0;
					 height: 0;
					 border-bottom: 6rpx solid $i-text-color-blue;
					 border-radius: 20rpx;
					 left: 50%;
					 bottom: 6rpx;
					 transform: translateX(-50%);
					 transition: .3s;
				}
			}

			.current {
				color: $i-text-color-blue;

				&::after {
					width: 60rpx;
				}
			}
		}
	}
</style>
