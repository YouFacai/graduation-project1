<template>
  <view class='homeBox_foot'>
    <view>
      <view class='moreIcons'>
        <view v-for="item in teacherIcons" :key='item.id' class='moreIcons_item'>
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
import {teacherIcons} from '../../config/icon.js'
export default {
  name: "myteacher",
  data(){
    return {
      teacherIcons
    }
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