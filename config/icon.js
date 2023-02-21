// home 我的订单 收获发货那些
export let orderIcons = [{
    id:1,
    iconPath:'/static/icon/waitpay.png',
    content:'学习中',
    path:`/pages/order/index?currentComponent=0`,
},{
    id:3,
    iconPath:'/static/icon/refund.png',
    content:'退款中',
    path:`/pages/order/index?currentComponent=2`,
},{
    id:4,
    iconPath:'/static/icon/fulfill.png',
    content:'已完成',
    path:`/pages/order/index?currentComponent=3`,
}]

// home 更多功能
export let moreIcons = [{
    id:2,
    iconPath:'/static/icon/moreIcons_gps.png',
    content:'我的课程',
    path:"/pages/myCourse/myCourse",
},{
    id:3,
    iconPath:'/static/icon/moreIcons_collect.png',
    content:'我赞过的',
    path:"/pages/myLike/myLike",
},{
    id:4,
    iconPath:'/static/icon/moreIcons_discount.png',
    content:'名师推荐',
    path:"/pages/teacherRecommend/teacherRecommend",
},{
    id:5,
    iconPath:'/static/icon/moreIcons_seckill.png',
    content:'我是讲师',
    path:"/pages/myteacher/myteacher",
},{
    id:6,
    iconPath:'/static/icon/moreIcons_conversion.png',
    content:'我是管理员',
    path:"/pages/myadmin/myadmin",
},{
    id:7,
    iconPath:'/static/icon/moreIcons_service.png',
    content:'在线客服',
    path:"/pages/service/service",
}]

/* 我是讲师 */
export let teacherIcons = [{
    id:1,
    iconPath:'/static/icon/course.png',
    content:'课程管理',
    path:`/pages/myteacher/course/course`,
},{
    id:2,
    iconPath:'/static/icon/class.png',
    content:'班级管理',
    path:`/pages/myteacher/class/class`,
},{
    id:3,
    iconPath:'/static/icon/select.png',
    content:'搜索教师',
    path:`/pages/myteacher/select/select`,
}]

/* 我是管理员 */
export let adminIcons = [{
    id:1,
    iconPath:'/static/icon/course.png',
    content:'开通讲师账号',
    path:`/pages/myteacher/class/class`,
},{
    id:2,
    iconPath:'/static/icon/class.png',
    content:'讲师管理',
    path:`/pages/myteacher/course/course`,
},{
    id:3,
    iconPath:'/static/icon/select.png',
    content:'收益可视化',
    path:`/pages/myteacher/select/select`,
}]