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

// 获取课程详情数据
const getClassDetails = (data) => {
	return request({
		url: "/classDetails",
		method: "POST",
		data
	})
}

// 登录
const userslogin = (data) => {
	return request({
		url: "/users/login",
		method: "POST",
		data
	})
}

// 修改用户数据
const setMyMsg = (data) => {
	return request({
		url: "/users/setMsg",
		method: "POST",
		data
	})
}

/*为课程点赞收藏*/
const likeCourse = (data) => {
	return request({
		url: "/addLikeCourse",
		method: "POST",
		data
	})
}

/*获取我点赞过的课程*/
const getLikeCourse = (data) => {
	return request({
		url: "/getMylikeCourse",
		method: "POST",
		data
	})
}

/*获取指定老师的课程列表*/
const getTeacherCourse = (data) => {
	return request({
		url: "/getTeacherCourse",
		method: "get",
		data
	})
}

/*删除指定课程*/
const deleteTeacherCourse = (data) => {
	return request({
		url: "/deleteTeacherCourse",
		method: "get",
		data
	})
}

/*修改指定课程内容*/
const setCourse = (data) => {
	return request({
		url: "/setTeacherCourse",
		method: "post",
		data
	})
}

/*新建课程*/
const addCourse = (data) => {
	return request({
		url: "/addTeacherCourse",
		method: "post",
		data
	})
}

/*新建订单*/
const addpay = (data) => {
	return request({
		url: "/addpay",
		method: "post",
		data
	})
}

/*查询是否购买过该课程*/
const ispay = (data) => {
	return request({
		url: "/ispay",
		method: "post",
		data
	})
}

/*查询是否购买过该课程*/
const getcourseVedio = (data) => {
	return request({
		url: "/getcourseVedio",
		method: "post",
		data
	})
}

// 导出所有的api方法
export default {
	getBanner,
	getClassify,
	getOptinos,
	getClassDetails,
	userslogin,
	setMyMsg,
	likeCourse,
	getLikeCourse,
	getTeacherCourse,
	deleteTeacherCourse,
	setCourse,
	addCourse,
	addpay,
	ispay,
	getcourseVedio
}
