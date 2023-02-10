<template>
  <view class="context">
    <view class="swipews">
      <image :src="course.mainImage" mode=""></image>
    </view>

    <view class="content-box">
      <view class="priceInfo">
        <!-- 原价 -->
        <text v-if="course.priceDiscount">￥{{course.priceDiscount}}</text>
        <!-- 优惠价 -->
        <text :class="{price: course.priceDiscount}">￥{{course.priceOriginal}}</text>

        <text class="preferential" v-if="course.priceDiscount">优惠价</text>
      </view>
      <view class="dome_item">
        {{course.title}}
      </view>
      <view class="good_item">
        <text class="iconfont icon-haoping2">{{course.goodRate}}好评</text>
        <text class="iconfont icon-touxiang2">{{course.studyTotal}}人在学</text>
      </view>

      <view class="cnotent-schedule">
        <view style="font-size: 12px; color: #aaaaaa">第{{course.current}}次开课</view>
        <view style="font-size: 14px;">{{course.time}}</view>
        <view style="font-size: 12px;margin-top: 3px;color: #ef9265">距离开课还有{{course.startClass}}天</view>
      </view>

<!--      课程介绍-->
      <view style="margin-top: 20px;padding: 10px;background-color: white">
        <view style="font-weight: bold;margin-bottom: 10px">课程介绍</view>
        <view >{{course.content}}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      default: () => ({
        "title": "Uniapp兼容多端在线教育项目实战",
        "studyTotal": 590, //在学人数
        "goodRate": '100%', //好评率
        "mainImage": "https://gd4.alicdn.com/imgextra/i4/3603079088/O1CN01dczOSM2H0LvTowhkl_!!3603079088.png",
        "isFree": 0, // 0 付费，1免费
        "priceOriginal": 614.51, //原价
        "priceDiscount": 281.91 // 优惠价
      })
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
.context {
  background-color: #f7f7f7;
  min-height: 100vh;

  .swipews {
    width: 100%;
    height: 420rpx;

    image {
      width: 100%;
      height: 100%;
    }
  }

  .content-box {
    padding: 0 20rpx;
    margin: 50rpx 0 20rpx 0;

    .priceInfo {
      text:nth-child(1) {
        font-size: 46rpx;
        font-weight: bold;
        color: $i-text-color-red;
      }

      .price {
        color: #B6BBBF;
        font-size: 30rpx;
        text-decoration: line-through;
        margin: 0 20rpx;
      }

      .preferential {
        color: $i-text-color-red;
        font-size: 20rpx;
        border: 1px solid $i-text-color-red;
        border-radius: 10rpx;
        padding: 0 3rpx;
      }
    }

    .dome_item {
      width: 100%;
      height: 60rpx;
      font-size: 35rpx;
      font-weight: bold;


    }

    .good_item {
      text {
        font-size: 20rpx;
        color: #7d828f;
        border-radius: 30rpx;
        background-color: $i-color-grey;
        margin-right: 15rpx;
        padding: 15rpx;
      }
    }

    .cnotent-schedule {
      margin-top: 5px;
      border: 1px solid #f7f7f7;
      background-color: white;
      padding: 10px;
    }
  }
}
</style>
