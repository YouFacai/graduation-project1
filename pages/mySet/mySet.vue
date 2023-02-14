<template>
  <view>
    <view class="from-login">
      <view class="from-item">
        <!--        左边-->
        <view class="from-item-one">手机</view>
        <view class="from-item-twe">
          <u--input
              v-model="usemsg.phone"
              placeholder="请输入手机"
              border="bottom"
          ></u--input>
        </view>
      </view>
      <view class="from-item">
        <!--        左边-->
        <view class="from-item-one">登录密码</view>
        <view class="from-item-twe">
          <u--input
              v-model="usemsg.passWord"
              placeholder="请输入密码"
              :password="true"
              border="bottom"
          ></u--input>
        </view>
      </view>
      <view class="from-item">
        <!--        左边-->
        <view class="from-item-one">名称</view>
        <view class="from-item-twe">
          <u--input
              v-model="usemsg.nickName"
              placeholder="请输入您的名称"
              border="bottom"
          ></u--input>
        </view>
      </view>
      <view class="from-item">
        <!--        左边-->
        <view class="from-item-one">性别</view>
        <view class="from-item-twe">
          <u--input
              v-model="usemsg.sex"
              placeholder="请输入您的性别"
              border="bottom"
          ></u--input>
        </view>

      </view>
      <view class="from-item">
        <!--        左边-->
        <view class="from-item-one">年龄</view>
        <view class="from-item-twe">
          <u--input
              v-model="usemsg.age"
              placeholder="请输入您的年龄"
              border="bottom"
          ></u--input>
        </view>
      </view>
      <view class="from-item">
        <!--        左边-->
        <view class="from-item-one">个性签名</view>
        <view class="from-item-twe">
          <u--input
              v-model="usemsg.signature"
              placeholder="请输入您的个性签名"
              border="bottom"
          ></u--input>
        </view>
      </view>

      <u-button @click="setMsg()" class="login" type="primary" text="保存设置"></u-button>
      <!--   提示框   -->
      <u-toast ref="uToast"></u-toast>
    </view>
  </view>
</template>

<script>
import IndexApi from '@/api/index.js'
export default {
  name: "mySet",
  created() {
    uni.getStorage({
      key: 'userMsg',
      success: (res) => {
        this.usemsg = JSON.parse(res.data) || {}
      },
      fail: () => {
        this.usemsg = {}
      }
    })
  },
  data() {
    return {
      usemsg : {}
    }
  },
  methods:{
    async setMsg(){
      let data = await IndexApi.setMyMsg(this.usemsg);
      uni.setStorage({
        key: 'userMsg',
        data: JSON.stringify(this.usemsg),
        success:  ()=> {
          this.$refs.uToast.show({
            message: "设置保存成功"
          })
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.from-item {
  display: flex;
  padding: 5px;
}

.from-item-one {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.from-item-twe {
  flex: 3 !important;
}

.login {
  margin-top: 20px;
}

.u-page {
  padding: 0;
}

.u-cell-icon {
  width: 36 rpx;
  height: 36 rpx;
  margin-right: 8 rpx;
}

.u-cell-group__title__text {
  font-weight: bold;
}
</style>