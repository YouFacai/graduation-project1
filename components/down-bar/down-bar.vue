<template>
	<view class="down-bar row sticky-box">
		<view class="one" v-for="(item,index) in downBars" :key="item.id" @click="clickDownView(item)">
			<view class="center" :class="{active: item.active  || (item.id || item.id ==0) }">
				<text>
					{{item.name}}
				</text>
				<text class="iconfont icon-down1" v-show="!item.active"></text>
				<text class="iconfont icon-up" v-show="item.active"></text>
			</view>

			<view class="item-list" v-show="item.active">
				<category class="category" v-if="item.isCategory" @searchByLabel="searchByLabel" :value="item" />
				<view class="name" v-else @click="changeInfo(item, info)" v-for="(info,index) in item.list"
					:key="info.id" :class="{active: info.name === item.name}">
					{{info.name}}
				</view>
			</view>
			<!-- 蒙层 -->
			<view class="cover" v-show="item.active"></view>
		</view>
	</view>
</template>

<script>
	import category from "@/pages/category/category.vue"
	export default {

		props: {
			params: {
				type: Object,
				default: () => {}
			},
			downBars: { //下拉筛选相关内容
				type: Array,
				default: () => [{
						type: 'sort', // 标识什么类型
						name: '综合排序',
						active: false,
						list: [{
								id: null,
								name: '综合排序'
							},
							{
								id: 'new',
								name: '最新排序'
							},
							{
								id: 'hot',
								name: '热门排序'
							}
						]
					},
					{
						type: 'label',
						name: '全部分类',
						active: false,
						isCategory: true
					}
				]
			},
		},
		components: {
			category
		},
		data() {
			return {
				downBarList: null
			}
		},
		created() {
			this.downBarList = this.downBars
		},
		watch: {
			params: {
				handler(newVal) {
					if (newVal) {
						const obj = this.downBars[this.downBars.length - 1]
						obj.name = newVal.lableName
						obj.id = newVal.labelId
						obj.activeIndex = newVal.activeIndex
						return
					}
				},
				immediate: true,
				deep: true
			}
		},
		methods: {
			clickDownView(item) {
				// 显示或隐藏排序选项弹窗w
				this.downBarList.forEach((i) => {
					// 当前点击的显示或隐藏: 其他的全部隐藏状态
					i.active = (item === i) ? !item.active : false
				})
			},

			// 下拉选中时触发等
			changeInfo(item, info) {
				// 说明和之前一样，不用重新查询
				if (item.name === info.name) {
					return
				}
				// 更改选项上显示的名称
				item.name = info.name
				item.id = info.id //传递后，可以高亮显示
				this.$emit('search', {
					[item.type]: item.id
				})

			},
			searchByLabel(label) {
				this.$emit('search', {
					labelId: label.id,
					categoryId: label.categoryId
				})
			}
		}
	}
</script>

<style lang="scss">
	.down-bar {
		z-index: 100;
		background-color: #FFFFFF;
		font-size: 30rpx;
		line-height: 80rpx;
	}

	.item-list {
		z-index: 100;
		background-color: #FFFFFF;
		position: absolute;
		left: 0;
		right: 0;

		.name {
			padding-left: 80rpx;
		}

		.category {
			height: 580rpx;
		}
	}

	// 被点击之后的效果
	.active {
		color: $i-text-color-blue;
	}

	// 粘顶
	.sticky-box {
		position: -webkit-sticky;
		position: sticky;
		/* 其他浏览器 */
		top: var(--window-top);
	}

	/*蒙层*/
	.cover {
		z-index: 99;
		position: fixed;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background-color: black;
		opacity: 0.2 !important;
	}
</style>
