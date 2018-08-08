<template>
  <vue-tab-bar
  @fetch-index="clickIndexNav"
  :selectNavIndex=selectNavIndex
  :needButton="needButton"
  :handButton="handButton"
  :btnText="btnText">
</vue-tab-bar>
</template>
<script>
import vueTabBar from '../../components/newTabBar'
export default {
  data () {
    return {
    }
  },

  components: {
   vueTabBar
  },

  methods: {
  
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
  },
  onReady(){
   
  },
  onShow(){
    wx.hideTabBar()
  }
}
</script>