<template>
	<view class="content-item" :class="{column : isColumn}">
		<view class="imagr-course">
			<image :src="item.mainImage" mode=""></image>
			<view class="timer-index">
				{{item.totalTime}}
			</view>
		</view>
		<view class="right-box column">
			<view class="title">
				{{item.title}}
			</view>
			<view class="teacher">
				<text class="iconfont icon-laoshi2"></text>
				<text class="text">{{item.nickName}}</text>
			</view>
			<div class="price-mf">
				<view class="origin" v-if="item.isFree==1">
					<text>免费</text>
				</view>
				<view class="origin" v-else>
					<text class="iconfont icon-moneybag"></text>
					<text>{{item.priceDiscount || item.priceOriginal}} </text>
				</view>
				<view class="ren-box">
					<text class="iconfont icon-video"></text>
					<text click="content">{{item.studyTotal}}</text>
					<text>人在学</text>
				</view>
			</div>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			isColumn: {
				type: Boolean,
				default: false
			},
			item: {
				type: Object,
				default: () => ({
					id: 1,
					mainImage: 'http://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLAWb3qFGBhykjmcTvz9CWmwib2Qj7c3Vxjia4y5fgSoNdrMYIdH11Dl1OCraibA7u0mts/600',
					totalTime: '00:59:08',
					title: 'SpringBoot项目实战教程SpringCloud OAuth2 Vue分布式微服务架构',
					nickName: '梦老师1', // 课程老师
					isFree: 0, //是否免费：0收费，1免费
					priceOriginal: 999, // 原价
					priceDiscount: 699.9, // 优惠价
					studyTotal: 899
				})
			}

		},
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss">
	.content-item {
		border-bottom: $i-underline;
		display: flex;
		padding: 20rpx 0;

		.imagr-course {
			position: relative;
			width: 290rpx;
			height: 160rpx;

			image {
				width: 100%;
				height: 100%;
			}

			.timer-index {
				position: absolute;
				bottom: 10rpx;
				right: 10rpx;
				font-size: 12rpx;
				color: #fff;
				background-color: rgba(51, 51, 51, 0.4);
				border-radius: 20rpx;
				font-size: 22rpx;
				padding: 0 6px;
			}
		}

		.right-box {
			max-width: 365rpx;
			// background-color: red;
			margin-left: 20rpx;

			.title {
				height: 88rpx;

				// background-color: yellowgreen;
				font-weight: 800;
				font-size: 30rpx;
				font-weight: bold;
				// 显示两行，超出部分用...代替
				overflow: hidden; // 超出隐藏
				text-overflow: ellipsis; //超出部分显示省略号
				-webkit-line-clamp: 2; //设置显示的行数
				display: -webkit-box; // 将对象作为弹性伸缩盒子模型显示
				-webkit-box-orient: vertical; // 设置或检索伸缩盒对象的子元素的排列方式 纵向
				white-space: normal; // 空白会被浏览器忽略
			}

			.teacher {
				color: #666;

				.iconfont {
					font-size: 20rpx;
				}

				.text {
					font-size: 20rpx;
				}
			}
		}
	}

	.price-mf {
		display: flex;
		font-size: 26rpx;
		justify-content: space-between;
		align-items: center;

		.origin {
			color: #fb7542;
		}
	}

	.ren-box {

		.iconfont {
			font-size: 20rpx;
		}

		.content {
			margin: 0 20rpx;
		}
	}
</style>
