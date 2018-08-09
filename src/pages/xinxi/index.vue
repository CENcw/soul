<template>
<div>
   <div class="xx_topBar clearfloat">
     <div class="gz clearfloat"> <image src='../../../static/images/ic_user_follow.png'></image></div>
     <div class="xx_topBar_left">
       <span class="sl">私聊</span>
      <span class="xx_total">暂无信息</span>
     </div>
     <div class="xx_topBar_right">
       <span></span>
       <span>允许匹配</span>
     </div>
   </div>
   <div></div>
  <vue-tab-bar></vue-tab-bar>
</div>
</template>
<style>
page{
   font-size: 12px;
  font-family:Microsoft YaHei; 
  font-weight: 500;
}
.clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
.clearfloat{zoom:1}
.xx_topBar_left{
  float: left;
}
.xx_topBar{
  position: relative;
}
.xx_topBar_left .sl{
  display: block;
 font-size: 26px;
 margin-bottom: 10px;
}
.xx_topBar_right{
  position: absolute;
  bottom: 0;
  right: 0;
}
.xx_topBar .gz{
  width: 100%;
}
.xx_topBar .gz image{
  float: right;
  width: 25px;
  height: 20px;
}
</style>

<script>
import vueTabBar from "../../components/newTabBar";
export default {
  data() {
    return {};
  },

  components: {
    vueTabBar
  },

  methods: {},

  created() {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
  },
  onReady() {},
  onShow() {
    wx.hideTabBar();
  }
};
</script>