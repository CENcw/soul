<template>
<div>
   <div class="xx_topBar clearfloat">
     <div class="gz clearfloat"> <image src='../../static/images/ic_user_follow.png'></image></div>
     <div class="xx_topBar_left">
       <span class="sl">私聊</span>
      <span class="xx_total">暂无信息</span>
     </div>
     <div class="xx_topBar_right">
       <span class="xx_topBar_right_dian"></span>
       <span>允许匹配</span>
     </div>
   </div>
   <div>
     <div class="zhuti">
       <image class="zhutiImg" src="../../static/images/logo_soul_circle.png"></image>  
       <div class="gftitle">
         <span class="zhutuTitle">Soul官方</span>
         <span class="zhutiBq">萌萌哒"女友猫"</span>
       </div>
     </div>
     <div class="Sortno">
       <span class="SortnoText">点亮排序</span>
       <image class="ltSortno" src='../../static/images/conversation_sort.png'></image>
     </div>
     <ul class="xxList">
       <li class="xxListli">
         <image class="zhutiImg"  src="../../static/images/logo_soul_circle.png"></image>  
       <div class="xx_gftitle">
         <span class="soulerName">有脾气的电风扇</span>
         <div class="ss_soulimg">
           <image class="soulmate" src="../../static/images/soulma.gif"></image>
           <span class="xx_time">7月30日下午08:41</span>
         </div>
         <span class="zhutiBq">那里</span>
       </div>
       </li>
     </ul>
   </div>
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
  margin-left: 12px;
}
.xx_topBar{
  position: relative;
}
.xx_topBar_left .sl{
  display: block;
 font-size: 23px;
 margin-bottom: 10px;
}
.xx_topBar_right{
  position: absolute;
  bottom: 5px;
  right: 10px;
}
.xx_topBar .gz{
  width: 100%;
}
.xx_topBar_right_dian{
  display: inline-block;
  margin-right: 10px;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: #FFFE02;
}
.xx_topBar .gz image{
  float: right;
  width: 25px;
  height: 20px;
   margin-right: 10px;
}
.zhuti{
  height: 60px;
  display:flex;
}
.zhutiImg{
  width: 40px;
  height: 40px;
  vertical-align: top;
  margin:auto 10px auto 20px;
}
.gftitle{
  display: inline-block;
  margin: auto 0;
}
.xx_gftitle{
   display: inline-block;
  margin: auto 0;
}
.zhutuTitle{
  font-size: 16px;
  color: #2BC6AB;
}
.zhutiBq{
  display: block;
  font-size: 14px;
  color: #C6C6C6;
}
.ltSortno{
  width: 20px;
  height: 15px;
  margin: auto 0;
  margin-left: auto;
  margin-right: 10px;
}
.Sortno{
  height: 30px;
  line-height: 30px;
  display: flex;
  background-color: #FAFAFA;
}
.SortnoText{
  margin-left: 20px;
  font-size: 14px;
  color: #838383;
}
.soulmate{
  width: 55px;
  height: 15px;
  margin-right: 10px;
}
.xxListli{
  width: 100%;
  height: 60px;
  display:flex;
}
.soulerName{
  font-size: 14px;
}
.xx_time{
  color: #D0D0D0;
}
.ss_soulimg{
  display: inline-block;
  position: relative;
  left: 30px;
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