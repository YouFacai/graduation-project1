<template>
  <view class="from-login">
    <view class="from-item">
      <!--        左边-->
      <view class="from-item-one">手机</view>
      <view class="from-item-twe">
        <u--input
            v-model="phone"
            placeholder="请输入内容"
            border="bottom"
        ></u--input>
      </view>
    </view>
    <view class="from-item">
      <!--        左边-->
      <view class="from-item-one">登录密码</view>
      <view class="from-item-twe">
        <u--input
            v-model="passWord1"
            placeholder="请输入密码"
            :password="true"
            border="bottom"
        ></u--input>
      </view>
    </view>
    <view class="from-item">
      <!--        左边-->
      <view class="from-item-one">确认密码</view>
      <view class="from-item-twe">
        <u--input
            v-model="passWord2"
            placeholder="请确认密码"
            :password="true"
            border="bottom"
        ></u--input>
      </view>
    </view>

    <view class="from-item">
      <u-radio-group

          v-model="radiovalue1"
          placement="row"
          @change="groupChange"
      >
        <u-radio
            labelSize="15px"
            iconSize="15px"
            :customStyle="{marginBottom: '5px',marginLeft:'12px'}"
            v-for="(item, index) in radiolist1"
            :key="index"
            :label="item.name"
            :name="item.name"
            @change="radioChange"
        >
        </u-radio>
      </u-radio-group>
    </view>
    <u-button @click="login()" class="login" type="primary" text="登录"></u-button>
    <!--   提示框   -->
    <u-toast ref="uToast"></u-toast>
  </view>
</template>

<script>
import api from "../../api/index"

let {userslogin} = api
export default {

  data() {
    return {
      phone: "19884687267",
      passWord1: "123456",
      passWord2: "123456",
      type: 1,
      radiolist1: [{
        name: '学员',
        disabled: false
      },
        {
          name: '讲师',
          disabled: false
        },
        {
          name: '管理员',
          disabled: false
        }
      ],
      // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
      radiovalue1: '学员',
    }
  },
  watch(){

  },
  methods: {
    async login() {
      /* 如果两次密码不相同提示 */
      if (/^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/.test(this.phone) && this.passWord1 ==
          this.passWord2 && this.passWord1.length >= 6 && this.passWord1.length <= 10
      ) {
        let data = await userslogin({
          phone: this.phone,
          passWord: this.passWord1,
          type:this.radiovalue1=="学员"?1:this.radiovalue1=="讲师"?2:3
        })
        uni.setStorage({
          key: 'userMsg',
          data: JSON.stringify(data[0]),
        });

        if (data.code == 1 || data.code == 2) {
          /*新注册*/
          uni.switchTab({
            url: `/pages/my/my`
          });
        } else if(data.code == 4 && this.radiovalue1 == "讲师") {
          /*老用户*/
          uni.redirectTo({
            url: `/pages/myteacher/myteacher`
          });
        }else if(data.code == 4  && this.radiovalue1 == "管理员") {
          /*老用户*/
          uni.redirectTo({
            url: `/pages/myadmin/myadmin`
          });
        }else if(data.code == 3){
          this.$refs.uToast.show({
            message: data.message
          })
        } else {
          this.$refs.uToast.show({
            message: "请正确输入长度为6-10位的密码和手机号"
          })
        }
      }
    },

    groupChange(n) {
      console.log('groupChange', n);
    },
    radioChange(n) {
      console.log('radioChange', n);
    }
  }
}
</script>

<style lang="scss">
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