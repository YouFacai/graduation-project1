export default {
	data() {
		return {

		}
	},
	methods: {
		//页面跳转的方法
		navTo(url, options = {}) {
			if (!url) return
			// console.log('恭喜你跳转成功');
			//登录判断
			// if (options.login) {
			// 	uni.navigateTo({
			// 		url: "/page/auth/login"
			// 	})
			// }
			uni.navigateTo({
				url
			})
		},

		//页面后退的方法
		navBack(dalta = 1) {
			uni.navigateBack({
				dalta
			})
		},

		//设置搜索框默认值
		handelSearchValue(content) {
			this.$nextTick(() => {
				// #ifdef APP-PLUS
				//获取app端实例
				const currentWebview = this.$mp.page.$getAppWebview();
				currentWebview.setTitleNViewSearchInputText(content);
				// #endif 		

				// #ifdef H5
				const placeholder = document.querySelector('.uni-page-head-search-placeholder')
				placeholder.innerHTML = ''
				const inputSearch = document.querySelector('.uni-input-input[type=search]');
				inputSearch.value = content;
				// #endif 
			})
		},
	}
}
