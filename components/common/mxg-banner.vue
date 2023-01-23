<template>
	<view class="banner-box">

		<!-- 渐变背景色区域，默认颜色 '#345dc2' -->
		<view class="banner-bg"
			:style="{'background-image': `linear-gradient(${bannerBackground || '#345dc2'} 50%, #F8F9FB)`}">
		</view>
		<!--
		<!--circular 循环滚动 autoplay 是否自动切换
		 interval 自动切换时间间隔（毫秒）
		 @change 切换时会触发该事件
		 indicator-dots 是否显示面板指示点
		 indicator-color 指示点颜色
		 indicator-active-color 当前选中的指示点颜色
		 -->
		<swiper class="banner-swiper" indicator-active-color="#fff" @change="swiperChange" :current="current"
			indicator-color="rgba(255, 255, 255, 0.5)" :indicator-dots="true" :autoplay="true" :interval="3000"
			:duration="1000">
			<swiper-item class="banner-item" v-for='(item,index) in bannerList' :key="index">
				<image @click="navTo(`${item.advertUrl}`)" :src="item.imageUrl" mode=""></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			bannerList: { // 轮播图数据
				type: Array,
				default: () => []
			}
		},
		mounted() {
			setTimeout((params) => {
        console.log(this.bannerList)
			},1000)
		},
		data() {
			return {
				current: 0, //切换图片的变量
				bannerBackground: "", //背景色
			}
		},
		watch: {
			bannerList: {
				handler(newVal) {
					//监听bannerList父组件有传递数据，则获取第一张图的背景色
					if (newVal && newVal.length > 0) {
						//切换回第一张图
						this.current = 0
						//设置第一张图的背景色
						this.bannerBackground = this.bannerList[0] && this.bannerList[0].background
					}
				},
				immediate: true
			}
		},
		methods: {
			swiperChange(e) {
				// 当前所在图的index
				this.current = e.detail.current;
				//轮播图切换修改背景色
				this.bannerBackground = this.bannerList[this.current].background;
			}
		}
	}
</script>

<style lang="scss">
	/* 轮播图 */
	.banner-box {
		position: relative;
		padding-top: 120rpx;
		/* #ifdef APP-PLUS */
		/* 增加app状态栏高度，这样app、h5、小程序距离就一样 (动态添加)*/
		padding-top: calc(var(--status-bar-height) + 120rpx);

		/* #endif */
		.banner-bg {
			position: absolute;
			top: 0;
			width: 100%;
			height: 470rpx;
			/* #ifdef APP-PLUS */
			height: calc(var(--status-bar-height) + 470rpx);
			/* #endif */
			/* 过渡效果 */
			transition: .5s;
		}

		.banner-swiper {
			width: 100%;
			height: 350rpx;

			.banner-item {
				width: 100%;
				height: 100%;
				padding: 0 30rpx;
				overflow: hidden;
			}

			image {
				width: 100%;
				height: 100%;
				border-radius: 15rpx;
			}
		}
	}
</style>
