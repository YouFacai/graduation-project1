<template>
  <view class='homeBox_foot'>
    <view>
      <view class='moreIcons'>
        <view v-for="item in adminIcons" :key='item.id' class='moreIcons_item'>
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
</template>

<script>
import {adminIcons} from '../../config/icon'
export default {
  name: "myadmin3123",
  data(){
    return {
      adminIcons:adminIcons
    }
  },
  mounted(){
    console.log(adminIcons)
  },
  methods:{
    more(item){
      uni.navigateTo({
        url: item.path
      });
    }
  }
}
</script>

<style scoped>
.homeBox_foot {
  width: 100%;
  background-color: white;
  padding-top: 10px;
  margin-top: 10px;
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