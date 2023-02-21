<template>
  <!-- 个人中心 -->
  <view id='homeBox' bindtap='iISLogin'>
    <view class='homeBox_topbar'>
      <!-- 第一层的第一区域 -->
      <view class='homeBox_topbar_one'>
        <!-- 用户信息 -->
        <view class='homeBox_topbar_usemsg'>
          <!-- 头像 -->
          <view id='homeBox_topbar_usemsg_head'>
            <image src="/static/images1/icons/defaultHead.png" mode="widthFix"/>
          </view>
          <!-- 点击登录的文字 和用户信息 切换 -->

<!--          #ifdef H5-->
          <view v-if="!this.usemsg.phone" @click="skip()">
            <view>
              点击登录
            </view>
          </view>
<!--          #endif-->

<!--          #ifdef MP-WEIXIN-->

          <view v-if="!usemsg.phone" @click="skip()">
            <view>
              点击登录
            </view>
          </view>
<!--          #endif-->
          <!-- 用户信息 -->
          <view v-else class='use_content'>
            <!-- 名称 -->
            <view class='useNickName'>
              {{ usemsg.nickName }}
            </view>
            <!-- 会员级别 -->
            <view class='useGrade'>
              <image class="" src="/static/images1/icons/SVIP.png" mode="widthFix"/>
            </view>
            <navigator url="/pages/mySet/mySet" open-type="navigate">
              <view  style="position: absolute;right: 20px;top: 60px">设置</view>
            </navigator>
          </view>
        </view>
      </view>

      <!-- 第一层的第二区域 -->
      <view class='homeBox_topbar_two'>
        <!-- 我的钱包 -->
        <view class='homeBox_topbar_two_wallet'>
          <image class="" src="/static/images1/icons/wallet1.png" mode="widthFix"/>
          <view>
            我的钱包
          </view>
        </view>
        <!-- 积分 -->
        <view class='homeBox_topbar_two_integral'>
          <view class='homeBox_topbar_two_integral_count'>
            0
          </view>
          积分
        </view>
        <!-- 余额 -->
        <view class='homeBox_topbar_two_balance'>
          <view class='homeBox_topbar_two_balance_count'>
            0
          </view>
          余额
        </view>
      </view>
    </view>

    <!-- 第二层 我的订单 -->
    <view class='homeBox_mainbar'>
      <!-- 标题我的订单 -->
      <view class='homeBox_mainbar_title'>
        我的订单
      </view>
      <!-- 收获/发货/ -->
      <view class='orderIcons'>
        <view v-for="(item,index) in orderIconsList" :key='index' class='orderIcons_item'>
          <view>
            <image style="margin: 0 auto" :src="item.iconPath" mode="widthFix"/>
            <view>
              {{ item.content }}
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class='homeBox_foot'>
      <view>
        <view class='moreIcons'>
          <view v-for="item in moreIconsList" :key='item.id' class='moreIcons_item'>
            <view @click="more(item)">
              <image style="margin: 0 auto" :src="item.iconPath" mode="widthFix"/>
              <view>
                {{ item.content }}
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!--   提示框   -->
    <u-toast ref="uToast"></u-toast>
  </view>


</template>

<script>
import {orderIcons, moreIcons} from '../../config/icon.js'

export default {
  onShow(){
    uni.getStorage({
      key: 'userMsg',
      success:  (res)=> {
        this.usemsg = JSON.parse(res.data)
      }
    });
  },

  data() {
    return {
      // 渲染 我的订单 收获发货那些
      orderIconsList: orderIcons,
      // 更多功能的icons
      moreIconsList: moreIcons,
      usemsg: {},
    }
  },
  methods: {

    //点击跳转
    skip() {
      uni.navigateTo({
        url: `/pages/login/index`
      });
    },
    more(item){
      /* 我是讲师*/
      if(item.id == 5){
        if( this.usemsg.type !==  2) {
          this.$refs.uToast.show({
            message: "您没有教师权限，请登录教师账号"
          })
          return ;
        }
      }
      /* 我是管理员*/
      if(item.id == 6){
        if( this.usemsg.type !==  3) {
          this.$refs.uToast.show({
            message: "您没有管理员权限，请登录教师账号"
          })
          return;
        }
      }
      uni.navigateTo({
        url: item.path
      });
    }
  }
}
</script>

<style>
#homeBox {
  width: 100vw;
  height: 100vh;
  color: #747474;
  /*background-color:#efeff4;*/
}

/* 第一层 */

.homeBox_topbar {
  width: 100%;
  height: calc(750rpx * 180 / 320);
  background-color: white;
}

/* 第一层 第一块区域 */

.homeBox_topbar_one {
  display: flex;
  align-items: center;
  color: black;
  width: 100%;
  height: calc(750rpx * 120 / 320);
  background: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F11748697155%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627021465&t=3ea3e6f1d2338743cbf9eb667c5d75a3');
  background-size: 200% 400%;
}

/* 用户信息/登录 */

.homeBox_topbar_usemsg {
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(750rpx * 70 / 320);
  align-items: center;
  padding-left: 7px;
}

/* 头像 */

#homeBox_topbar_usemsg_head {
  width: calc(750rpx * 60 / 320);
  height: calc(750rpx * 60 / 320);
  border-radius: 50%;
  margin-right: 10px;
}

#homeBox_topbar_usemsg_head image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.use_content {
  width: 40%;
}

.useNickName {
  display: flex;
  width: 100%;
  padding-left: 20 rpx;
}

.useGrade {
  display: flex;
  align-items: center;
}

.useGrade image {
  width: 40%;
}

/* 收获地址 */

.homeBox_topbar_usemsg_address {
  display: flex;
  position: absolute;
  right: 0px;
  width: calc(750rpx * 100 / 320);
  height: calc(750rpx * 35 / 320);
  text-align: center;
  background-color: #ff8e34;
  border-radius: 50px 0 0 50px;
  line-height: 89 rpx;
  font-size: 32 rpx;
}

.homeBox_topbar_usemsg_address image {
  width: 20%;
  margin-top: 22 rpx;
  margin-left: 25 rpx;
  margin-right: 20 rpx;
}

/* 第二层区域 */
.homeBox_topbar_two {
  display: flex;
  align-items: center;
  font-size: 30 rpx;
  text-align: center;
}

/* 我的钱包图片 */
.homeBox_topbar_two_wallet {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  flex: 1;
  /* background-color: #e7e6e6; */
  text-align: center;
}

.homeBox_topbar_two_wallet image {
  width: 40%;
  position: relative;
  left: 50%;
  margin-left: -20%;
  margin-bottom: 10 rpx;
  margin-top: 10 rpx;
}

/* 余额 */
.homeBox_topbar_two_integral {
  flex: 1.5;
  border-right: 2px solid #e6e6e6;
}

.homeBox_topbar_two_balance {
  flex: 1.5;
}

.homeBox_topbar_two_integral_count {
  color: #ff8e34;
  margin-bottom: 10 rpx;
}

.homeBox_topbar_two_balance_count {
  margin-bottom: 10 rpx;
  color: #ff8e34;
}

.homeBox_mainbar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5px;
  width: 100%;
  height: calc(750rpx * 100 / 420);
  background-color: white;
  border-top: 10px solid #efeff4;
}

/* 我的订单 */
.homeBox_mainbar_title {
  padding-top: 10px;
  padding: 20 rpx;
  margin-left: 20px;
  margin-bottom: 10px;
}

/* 收获发货 */
.orderIcons {
  border-top: 2px solid #efeff4;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

/* 每一个item */
.orderIcons_item {
  font-size: 30 rpx;
  flex: 1;
  text-align: center;
  margin-top: 4px 0;
}

/* js渲染 */
.orderIcons_item image {
  margin-top: 20 rpx;
  width: 28%;
}

.homeBox_foot {
  border-top: 20px solid #efeff4;
  width: 100%;
  background-color: white;
  padding-top: 10px;
  margin-top: 10px;
  padding-bottom: calc(750rpx * 10 / 320);
}

/* 跟多功能 */
.moreIcons {
  display: flex;
  flex-wrap: wrap;
  width: 100%
}

/* 每一个item */
.moreIcons_item {
  width: 25%;
  text-align: center;
}

/* js渲染 */
.moreIcons_item image {
  margin-top: 20 rpx;
  width: 35%;
}

/* 按钮下面的icon */
.contactService image {
  margin-top: calc(750rpx * 13 / 320);
  width: 45%;
}

.contactService {
  font-size: 30 rpx;
  width: 100%;
  height: 100%;
}

/* 按钮文字 */
.contactService_context {
  color: #747474;
  position: relative;
  top: calc(-750rpx * 14 / 320);
}
</style>
