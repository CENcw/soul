<template>
<div>
  <div class="topBar">
    <div class="musicPlay clearfloat">
      <image class="music" src="../../static/images/icon_music.png"></image>
      <div>
        <TabItems></TabItems>
      </div>
    </div>
  </div>
  <vue-tab-bar></vue-tab-bar>
</div>
</template>
<style>
.clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
.clearfloat{zoom:1}
.topBar{
    width: 100%;
    height: 60px;
}
.musicPlay{
    height: 60px;
}
.musicPlay .music{
    float: right;
    margin-right: 10px;
    height: 10px;
    width: 10px;
}
</style>

<script>
import vueTabBar from "../../components/newTabBar";
import TabItems from "../../components/newTab";
export default {
  data() {
    return {};
  },

  components: {
    vueTabBar,TabItems
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