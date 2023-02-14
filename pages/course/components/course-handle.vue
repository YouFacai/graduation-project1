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
        <view style="position:absolute;right: 20px;top: 10px;width: 20px">
          {{course.CollectionNum}}<svg @click="tapLike(1)" v-if="1" t="1676080432127" class="icon"
                                      viewBox="0 0 1024 1024"
                          version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2741" width="20" height="20"><path d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z" p-id="2742" fill="#f4ea2a"></path></svg>
          <svg @click="tapLike(-1)" v-else t="1676080432127" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2741" width="20" height="20"><path d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z" p-id="2742" fill="#2c2c2c"></path></svg>
        </view>
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
import api from "../../../api/index"
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
      usemsg:{}
    }
  },
  methods:{
    tapLike(type){
      let id = this.course.id
      uni.getStorage({
        key: 'userMsg',
        success:  (res)=> {
          this.usemsg = JSON.parse(res.data) || {}
        },
        fail:()=>{
          this.usemsg = {}
        }
      })
      let myid = this.usemsg.id
      this.course.CollectionNum = this.course.CollectionNum+1
      api.likeCourse({type,Courseid:id,myid})
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
      position: relative;

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
