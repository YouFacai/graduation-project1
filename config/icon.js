// home 我的订单 收获发货那些
export let orderIcons = [{
    id:1,
    iconPath:'/static/icon/waitpay.png',
    content:'待发货',
    path:`/pages/order/index?currentComponent=0`,
},{
    id:2,
    iconPath:'/static/icon/waitreap.png',
    content:'待收获',
    path:`/pages/order/index?currentComponent=1`,
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
    id:1,
    iconPath:'/static/icon/moreIcons_shopcart.png',
    content:'购物车',
    path:"/pages/shopcart/index",
},{
    id:2,
    iconPath:'/static/icon/moreIcons_gps.png',
    content:'收货地址',
    path:"/pages/address/index",
},{
    id:3,
    iconPath:'/static/icon/moreIcons_collect.png',
    content:'我的收藏',
    path:"/pages/collect/index",
},{
    id:4,
    iconPath:'/static/icon/moreIcons_discount.png',
    content:'优惠券',
    path:"/pages/Mydiscount/index",
},{
    id:5,
    iconPath:'/static/icon/moreIcons_seckill.png',
    content:'秒杀'
},{
    id:6,
    iconPath:'/static/icon/moreIcons_conversion.png',
    content:'我的兑换',
    path:"",
},{
    id:7,
    iconPath:'/static/icon/moreIcons_service.png',
    content:'在线客服'
}]