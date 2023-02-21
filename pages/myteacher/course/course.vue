<template>
  <view>
    <u-search searchIconSize="50" inputAlign="center" height="30px" :showAction="false" :clearabled="true"
              placeholder="计科19101尤子龙45419038"
              v-model="keyword"></u-search>
    <!-- 课程列表 -->
    <view class="u-page">
      <u-list
      >
        <u-list-item
            v-for="(item, index) in renderList"
            :key="index"
        >
          <u-cell>
            <!--  左侧图片    -->
            <u-avatar
                slot="icon"
                shape="square"
                size="200"
                :src="item.mainImage"
                customStyle="margin: -3px 5px -3px 0"
            ></u-avatar>
            <!--  右侧内容          -->
            <view
                slot="title"
                class="u-slot-title"
                @click="setCourse(item.id)"
            >
              <view style="font-weight: bold;margin-bottom: 5px">课程名称:{{item.title}}</view>
              <view>课程号:{{item.id}}</view>
              <view>价格:{{item.priceDiscount}}</view>
              <view @click.stop="deleteItem(item)" style="position: absolute;bottom: 10px;color: red;right: 20px">删除
              </view>
              <u-modal :showConfirmButton="true" :showCancelButton="true" :show="show" :title="title"
                       :content='content' @confirm="ModalConfirm(item)" @cancel="ModalCancel"></u-modal>
            </view>
          </u-cell>
        </u-list-item>
      </u-list>
    </view>
    <view @click="setCourse('new')" style="position: absolute;bottom: 20px;right: 20px;z-index: 100">
      <svg t="1676550039816" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="6040" width="50" height="50"><path
          d="M514.972672 25.220096c-261.41696 0-473.339904 211.922944-473.339904 473.339904 0 261.424128 211.922944 473.344 473.339904 473.344 261.419008 0 473.34912-211.919872 473.34912-473.344C988.321792 237.14304 776.39168 25.220096 514.972672 25.220096zM810.990592 516.393984l-277.533696 0.64-0.584704 278.121472c-0.039936 10.202112-8.31488 18.477056-18.516992 18.477056l-0.039936 0c-10.202112-0.039936-18.477056-8.31488-18.477056-18.556928l0.582656-277.955584-277.376 0.64-0.039936 0c-10.202112 0-18.477056-8.274944-18.516992-18.477056 0-10.202112 8.233984-18.516992 18.477056-18.556928l277.533696-0.64 0.584704-278.121472c0.039936-10.202112 8.31488-18.477056 18.516992-18.477056l0.039936 0c10.202112 0.039936 18.477056 8.31488 18.477056 18.556928L533.53472 480l277.376-0.64 0.039936 0c10.202112 0 18.477056 8.274944 18.516992 18.477056C829.467648 508.039168 821.233664 516.353024 810.990592 516.393984z" fill="#FF9000" p-id="6041"></path></svg>
    </view>
    <view >

    </view>
  </view>
</template>

<script>
import api from "@/api/index"
export default {
  name: "course",
  data() {
    return {
      renderList :[],
      usemsg:{},
      keyword:"",
      show:false,
      title:'警告',
      content:'确认删除该课程？',
      confirmText:"确定",
      cancelText:"取消"
    }
  },
  onLoad() {
    uni.getStorage({
      key: 'userMsg',
      success:  (res)=> {
        this.usemsg = JSON.parse(res.data) || {}
        this.getRenderList()
      },
      fail:()=>{
        this.usemsg = {}
      }
    })
  },
  methods: {
    showModal() {
      this.show = true;
    },
    confirm() {
      setTimeout(() => {
        // 3秒后自动关闭
        this.show = false;
      }, 3000)
    },
    async getRenderList(){
      let data = await api.getTeacherCourse({id:this.usemsg.id});
      this.renderList = data
    },
    deleteItem(target){
      this.show = true

    },
    ModalConfirm(target){
      this.renderList = this.renderList.filter((item)=>{
        return item.id !== target.id
      })
      let data = api.deleteTeacherCourse({id:target.id});
      console.log(data)
      this.show = false
    },
    ModalCancel(){
      this.show = false
    },
    setCourse(type){
      uni.navigateTo({
        url:`/pages/myteacher/course/setCourse?id=${type}`
      })
    }
  },
}
</script>

<style scoped>
.u-slot-title {
  position: relative;
}
</style>