<template>
  <div>
    <vue-tab-bar></vue-tab-bar>
    <div>
      <div class="bj_div">
        <image class="bj" src='../../static/images/fj1.jpg'></image>
        <div class="bj_sz">
          <div class="user_sz"><span>设置</span></div>
          <image class="bj_touxiang" src='../../static/images/touxiang.png'></image>
          <span class="userName">辣鸡先生</span>
          <span class="userTime">161天，28个瞬间</span>
        </div>
        <ul class="tabs">
          <li class="li-tab" :class="{activeFont:index==nowIndex}" v-for="(item,index) in tabsParam" :key='index' @click="toggleTabs(index,item)" >
            <image :src='item.icon'></image>
            {{item.name}}
            <span class="bottomLine" :class="{active:index==nowIndex}"></span>
          </li>
        </ul>
      </div>
      <div class="divTab" v-if="nowIndex===0">
        <ul class="ss_ul">
          <li class="ss_li" v-for="(item,indexLI) in userSS_List" :key='indexLI'>
            <span class="ss_li_text">{{item.text}}</span>
            <image class="ss_li_img" :src='item.img'></image>
          </li>
        </ul>
      </div>
      <div class="divTab" v-if="nowIndex===1">我是tab2</div>
    </div>
  </div>
</template>
<style>
  .bj_div{
    width: 100%;
    height: 350px;
    position: relative;
    /* background-image: '../../../static/images/fj1.jpg' */
  }
  .bj_div .bj{
    width: 100%;
    height: 100%;
  }
  .tabs .activeFont{
    font-size: 18px;
}
.bj_div .tabs {
  position: absolute;
  bottom: 10px;
  width: 220px;
  left: 50%;
  margin-left: -110px;
  font: 0;
  padding: 0;
}
.bj_div .tabs image{
  width: 16px;
  height: 16px;
  margin-right: 10px;
  vertical-align: middle;
}
.bj_div .li-tab {
  font-size: 16px;
  width: 50%;
  height: 100%;
  color: #FDFDFD;
  position: relative;
  display: inline-block;
  text-align: center;
}
.bj_div .divTab {
  background: #FDFDFD;
  width: 100%;
  /* height: 300px; */
} 
.bj_touxiang{
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
}
.bj_sz{
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
}
.user_sz{
  text-align: right;
  color:#FDFDFD;
  margin-bottom: 40px;
  margin-top: 30px;
}
.user_sz span{
  margin-right: 20px;
}
.userName{
  color:#FDFDFD;
  display: block;
  margin-bottom: 10px;
}
.userTime{
  color:#FDFDFD;
  display: block;
}
.bj_div .li-tab .bottomLine{
    margin-top: 3px;
    display: none;
    width: 30px;
    height: 3px;
    position: absolute;
    left: 50%;
    margin-left: 0px;
    background-color: #FDFDFC;
}
.bj_div .li-tab .active {
 display: block;
}
.ss_ul{
  width: 280px;
}
.ss_li{
  width: 100%;
}
.ss_li_img{
  width: 100%;
}
.ss_li_text{
  font-size: 14px;
}
</style>

<script>
import vueTabBar from '../../components/newTabBar'
export default {
  data () {
    return {
      tabsParam: [{name:"瞬间",icon:'../../static/images/icon_post.png'},{name:"收藏",icon:'../../static/images/icon_story.png'}],
      nowIndex: 0,
      userSS_List:[{text:'地方哪看得快拉上你看来你都是你的框架sad你考虑呢都快拉上你的快乐撒代课老师',img:'../../static/images/c1.jpg'}]
    }
  },

  components: {
   vueTabBar
  },

  methods: {
    toggleTabs: function(index,item) {
      this.nowIndex = index;
    },
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