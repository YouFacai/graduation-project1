<template>
	<view class="catetory">
		<!-- 左侧分类 -->
		<scroll-view class="left noScorll" scroll-y="true">
			<view class="title column center">
				<view :class="{active : index == activeIndx}" @click.stop="handleCategoryIndex(index)"
					v-for="(item,index) in categoryList" :key="item.id">
					<view>{{item.name}}</view>
				</view>
			</view>
		</scroll-view>
		<!-- 右侧分类对应的标签信息-->
		<scroll-view scroll-y="true" class="right">
			<view class="tag">
				<view v-for="(ele,i) in lableList" :key="i" @click="handlePathSearch(ele)">
					<view class="view">{{ele.name}}</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	//引入api
	import indexApi from '@/api/index.js'
	export default {
		props: {
			value: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {
				categoryList: [],
				activeIndx: 0,
				lableList: [],
			}
		},
		//监听原生标题栏按钮点击事件
		onNavigationBarButtonTap(e) {
			// console.log(e);
			if (e.index === 0) {
				//跳转到搜索页面
				this.navTo('/pages/search/search')
			}
		},
		mounted() {
			// 调用分类方法
			this.getCategoryList()
		},
		methods: {
			//点击左侧分类触发的事件
			handleCategoryIndex(index) {
				this.activeIndx = index
				this.lableList = this.categoryList[index].labelList
			},
			//获取分类列表数据
			async getCategoryList() {
				try {
					const response = await indexApi.getClassify()
					// console.log(response);
					this.categoryList = response
					//页面刷新默认加载第一条数据
					this.lableList = this.categoryList[this.activeIndx].labelList

					if (this.value) {
						//每个标签添加不限
						// console.log('this.value', this.value)
						// 每个分类下的标签数组中添加`不限`标签(点击不限，就是查询这个分类下的信息)
						this.categoryList.forEach((item) => {
							// name是弹窗列表中显示；cname 分类名称，用于点击回显当前分类名；
							item.labelList.unshift({
								id: null,
								name: '不限',
								cname: item.name,
								categoryId: item.id
							})
						})

						// 将`全部分类`新增到分类数组中的第1个元素
						this.categoryList.unshift({
							id: null,
							name: '全部分类',
						})

						// 之前是否有选中分类
						this.activeIndx = this.value.activeIndex > -1 ? parseFloat(this.value.activeIndex) + 1 : this
							.activeIndx
					}



				} catch (e) {
					//TODO handle the exception
					console.log(e, "=>err");
				}
			},
			// 跳转搜索页
			handlePathSearch(item) {
				//用 params 进行传递参数
				// const params = {
				// 	lableId: item.id,
				// 	lablerName: item.name,
				// 	activeIndex: this.activeIndx,
				// }
				// this.navTo("/pages/search/search?params=" + JSON.stringify(params))
				// 第二种
				this.navTo(
					`/pages/search/search?lableId=${item.id}&lableName=${item.name}&activeIndex=${this.activeIndx}`
				)

			}
		}
	}
</script>
<style lang="scss">
	page {
		height: 100%;
	}

	.catetory {
		display: flex;
		height: 100%;

		.left {
			width: 200rpx;
			background-color: #F8F9FB;
			border-radius: 0 25rpx 25rpx 0;

			.title {
				>view {
					color: #000;
					text-align: center;
					font-size: 30rpx;
					color: #888888;
					width: 200rpx;
					line-height: 40rpx;
					padding: 55rpx 30rpx;
					position: relative;

					&:before {
						// 在.title 分类前加上内容 |
						position: absolute;
						content: '';
						width: 0rpx;
						height: 0rpx;
						border-right: 6rpx solid $i-color-primary;
						border-radius: 30rpx;
						left: 0;
						top: 50%;
						transform: translateY(-50%);
						transition: .3s;
					}
				}

				.active {
					color: $i-text-color-blue;
					font-size: 33rpx;
					font-weight: bold;

					&:before {
						height: 50rpx;
					}
				}
			}
		}

		.right {
			// 铺满
			margin: 0;
			background-color: #fff;
			padding-left: 15rpx;

			.tag {
				display: flex;
				flex-wrap: wrap;
				/* 排不下，换行 */
				padding-top: 35rpx;
				padding-left: 10rpx;

				.view {
					font-size: 25rpx;
					line-height: 60rpx;
					text-align: center;
					border: 1rpx solid #999;
					border-radius: 30rpx;
					min-width: 160rpx;
					padding: 0 5rpx;
					margin: 15rpx 5rpx;
				}
			}
		}
	}
</style>
