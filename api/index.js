// 引入http请求文件
import request from "@/utils/request.js"
// 轮播图接口
const getBanner = () => {
	return request({
		url: '/index/article/api/advert/show/1',
		method: 'GET'
	})
}
//获取分类列表接口
const getClassify = () => {
	return request({
		url: '/index/article/api/category/label/list',
		method: "GET"
	})
}
// 获取热门推荐、近期上新、免费精选 、付费精品 列表接口
const getOptinos = (data) => {
	return request({
		url: "/index/course/api/course/search",
		method: "POST",
		data
	})
}
// 导出所有的api方法
export default {
	getBanner,
	getClassify,
	getOptinos
}
