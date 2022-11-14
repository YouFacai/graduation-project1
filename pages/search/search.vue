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
	</view>
</template>
<script>
	export default {
		data() {
			return {
				params: null,
				content: "",
				focus : false,
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
			handleSearch() {
				console.log('查询页面');
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
