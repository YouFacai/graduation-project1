<template>
	<view class="search-container">
		<!-- #ifdef MP-WEIXIN -->
		<uni-search-bar v-model="content" :focus="focus" placeholder="搜索您想要的内容" @confirm="handleSearch"
			@cancel="navBack()" radius="100" clearButton="auto" cancelButton="always">
			<template v-slot:searchIcon>
				<text class="iconfont icon-search"></text>
			</template>
			<template v-slot:clearIcon>
				<text class="iconfont icon-roundclosefill"></text>
			</template>
		</uni-search-bar>
		<!-- #endif -->
		<!-- 热门搜索与历史搜索 -->
		<keyword @handleSearch="handleSearch" v-if="!searched"></keyword>
		<!-- tabBar组件  导航栏切换-->
		<tabBar v-if="searched" v-model="tabIndex"></tabBar>
		<!-- downBar下拉菜单 -->
		<down-bar v-if="searched"></down-bar>
	</view>
</template>
<script>
	import {
		HISTORY_KEY
	} from '@/enum/keyword-key.js'
	import keyword from '@/pages/search/components/keyword.vue'
	import tabBar from '@/components/common/table-bar.vue'
	export default {
		components: {
			keyword,
			tabBar
		},
		data() {
			return {
				tabIndex: 0, //默认选中的TabIndex
				params: null,
				content: "",
				focus: false,

				//让搜索显示隐藏
				searched: false,
				// #ifdef APP-PLUS
				currentWebview: null,
				// #endif
			}
		},
		//小程序可以直接在onLoad里面options获取页面传递的参数
		onLoad(options) {
			this.witchParams(options)
		},
		//标题栏原生按钮监听事件
		onNavigationBarButtonTap(e) {
			//点击取消按钮进行返回
			if (e.index === 0) {
				this.navBack()
			}
		},
		//监听输入框实时变化
		onNavigationBarSearchInputChanged(e) {
			//把输入的内容赋值给 content
			this.content = e.text
		},
		//监听是否在手机上点击了搜索按钮
		onNavigationBarSearchInputConfirmed() {
			// #ifdef APP-PLUS
			this.currentWebview.setTitleNViewSearchInputFocus(false)
			// #endif

			this.handleSearch()
		},
		methods: {
			//监听跳转页面有没有参数
			witchParams(options) {
				// #ifdef APP-PLUS
				//app端获取页面实例
				this.currentWebview = this.$mp.page.$getAppWebview()
				// #endif

				//有参数进行查询
				if (JSON.stringify(options) !== '{}') {
					// console.log('我是有参数的');
					console.log(options);
					this.handelSearchValue(options.lableName)
					this.params = options

					//调用搜索事件
					this.handleSearch()

				} else {
					// #ifdef APP-PLUS
					//没有参数则让搜索框获得焦点
					this.currentWebview.setTitleNViewSearchInputFocus(true)
					// #endif
					// #ifdef MP-WEIXIN
					this.focus = true
					// #endif
				}
			},
			//搜索事件
			handleSearch(obj) {
				// 获取输入框输入的内容
				this.content = obj && obj.value ? obj.value : this.content
				console.log('查询页面');
				this.searched = true
				// 查询的时候, 调用存储搜索历史记录方法,将输入框输入的内容存储到本地
				this.handleSetLocalHistoryData()
			},
			// 存储搜索的历史记录
			handleSetLocalHistoryData() {
				uni.getStorage({
					key: HISTORY_KEY,
					// 本地已经储存的方法
					success: (res) => {
						this.content && res.data.indexOf(this.content) < 0 && res.data.unshift(this.content)
						uni.setStorageSync(HISTORY_KEY, res.data)
					},
					// 本地没有存储的方法
					fail: (err) => {
						this.content && uni.setStorageSync(HISTORY_KEY, [this.content])
						console.log("err=>", err)
					}
				})
			}
		},
	}
</script>
<style lang="scss">
	page {
		// background-color: $i-color-grey;
	}

	.search-container {
		width: 750rpx;
		/* 全屏，不然后面`下拉筛选粘组件`粘顶会失效 */
		margin: 0;
		padding: 0;
	}
</style>
