<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	
	@import "@/uni_modules/uview-ui/index.scss";
	/*每个页面公共css */
	/* common css 公共样式 */
	@import url('@/common/css/common.css');
	/* 字体图标 */
	@import url('~@/static/icon/iconfont.css');
	/*
		 微信小程序开发工具上，不支持网络链接，只支持本地方式
		 打包上线时，只支持在线方式
		 */
	/* @import url("https://at.alicdn.com/t/font_2116121_4hwc792r6yl.css");*/
</style>
