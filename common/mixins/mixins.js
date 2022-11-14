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
		}
	}
}
