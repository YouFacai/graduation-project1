<template>
  <view>
    <view class="from-login">
      <view class="from-item">
        <!--        左边-->
        <view class="from-item-one">唯一标识ID</view>
        <view class="from-item-twe">
          <u--input
              v-model="formData.id"
              border="bottom"
              :disabled="true"
          ></u--input>
        </view>
      </view>
      <view class="from-item">
        <!--        左边-->
        <view class="from-item-one">标题</view>
        <view class="from-item-twe">
          <u--input
              v-model="formData.title"
              placeholder="请输入标题"
              border="bottom"
          ></u--input>
        </view>
      </view>
      <view class="from-item">
        <!--        左边-->
        <view class="from-item-one">学习人数</view>
        <view class="from-item-twe">
          <u--input
              v-model="formData.studyTotal"
              disabled="disabled"
              border="bottom"
          ></u--input>
        </view>
      </view>
      <view class="from-item">
        <!--        左边-->
        <view class="from-item-one">点赞数</view>
        <view class="from-item-twe">
          <u--input
              v-model="formData.goodRate"
              disabled="disabled"
              border="bottom"
          ></u--input>
        </view>

      </view>
      <view class="from-item">
        <!--        左边-->
        <view class="from-item-one">图片</view>
        <view class="from-item-twe">
          <u--input
              v-model="formData.mainImage"
              placeholder="请输入您的年龄"
              border="bottom"
          ></u--input>
        </view>
      </view>
      <view class="from-item">
        <!--        左边-->
        <view class="from-item-one">原价</view>
        <view class="from-item-twe">
          <u--input
              v-model="formData.priceOriginal"
              placeholder="请输入现价"
              border="bottom"
          ></u--input>
        </view>
      </view>
      <view class="from-item">
        <!--        左边-->
        <view class="from-item-one">现价</view>
        <view class="from-item-twe">
          <u--input
              v-model="formData.priceDiscount"
              placeholder="请输入现价"
              border="bottom"
          ></u--input>
          
        </view>
      </view>
      <view class="from-item">
        <!--        左边-->
        <view class="from-item-one">当前课程</view>
        <view class="from-item-twe">
          <u--input
              v-model="formData.current"
              placeholder="请输入当前课程"
              border="bottom"
          ></u--input>
        </view>
      </view>
      <view class="from-item">
        <!--        左边-->
        <view class="from-item-one">总课程</view>
        <view class="from-item-twe">
          <u--input
              v-model="formData.total"
              placeholder="请输入总课程"
              border="bottom"
          ></u--input>
        </view>
      </view>
      <view class="from-item">
        <!--        左边-->
        <view class="from-item-one">课程持续时间</view>
        <view class="from-item-twe">
          <u--input
              v-model="formData.time"
              placeholder="请输入课程持续时间"
              border="bottom"
          ></u--input>
        </view>
      </view>
      <view class="from-item">
        <!--        左边-->
        <view class="from-item-one">课程类型</view>
        <view class="from-item-twe">
          <u--input
              v-model="formData.type"
              placeholder="请输入课程类型"
              border="bottom"
          ></u--input>
        </view>
      </view>
      <view class="from-item">
        <!--        左边-->
        <view class="from-item-one">课程所属总类</view>
        <view class="from-item-twe">
          <u--input
              v-model="formData.coursekey"
              placeholder="请输入课程类型"
              border="bottom"
          ></u--input>
        </view>
      </view>
      <view class="from-item">
        <!--        左边-->
        <view class="from-item-one">课程介绍</view>
        <view class="from-item-twe">
          <u--textarea v-model="formData.content" placeholder="请输入内容" ></u--textarea>
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
  name: "setCourse",
  onLoad(id) {
    uni.getStorage({
      key: 'userMsg',
      success:  (res)=> {
        this.usemsg = JSON.parse(res.data) || {}
      },
      fail:(e)=>{
        this.usemsg = {}
      }
    })
    this.id = id
    if(id.id == 'new') this.temp = "new"
    this.getCourse(id.id)
  },
  data() {
    return {
      temp :"",
      formData:{
        title:'1',
        studyTotal:'1',
        mainImage:'1',
        priceOriginal:'1',
        priceDiscount:'1',
        content:'1',
        current:'1',
        total:"1",
        time:'1',
        type:'1',
        teacherId:'1',
        key:"前端"
      },
      usemsg:{}
    }
  },
  methods:{
    async getCourse(id){
      if(id == "new") return
     this.formData = await IndexApi.getClassDetails({id})

    },
    async setMsg(){
      if(this.temp == 'new'){
        let obj = {
          ...this.formData,
          id:Math.round(Math.random() * 77777777),
          studyTotal:0,
          goodRate:0,
          teacherId:this.usemsg.id,
        }
        let data = await IndexApi.addCourse(obj)
        this.$refs.uToast.show({
          message:'设置保存成功'
        })
        setTimeout((params) => {
          uni.navigateTo({
            url: "/pages/myteacher/course/course"
          });
        },1000)
      }else{
        let data = await IndexApi.setCourse(this.formData)
        this.$refs.uToast.show({
          message:'设置保存成功'
        })
        setTimeout((params) => {
          uni.navigateTo({
            url: "/pages/myteacher/course/course"
          });
        },1000)
      }
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