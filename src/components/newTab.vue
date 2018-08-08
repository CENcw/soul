<template>
<div class="ceshi">
     <ul class="tabs">
        <li class="li-tab" :class="{activeFont:index==nowIndex}" v-for="(item,index) in tabsParam" :key='index' @click="toggleTabs(index,item)" >{{item.name}}
            <span class="bottomLine" :class="{active:index==nowIndex}"></span> 
        </li>
    </ul>
    <div><input type="text"></div>
    <div class="divTab" v-if="nowIndex===0">
      <ul> 
        <li class="ssLi" v-for="(itemLi,index) in TjList" :key="index">
            <div class="ss_top clearfloat">
              <div class="ss_div_left">
                <image class="ss_top_icon"  src="../../static/images/touxiang.png"></image>
              </div>
              <div class="ss_div_right">
                <span class="ss_from">#来自元气才子星球</span>
                <span class="ss_time">1小时前</span>
                <div class="ss_content">内容</div>
                <div class="pfBar">
                  
                </div>
              </div>
            </div>
        </li>
      </ul>
    </div>
    <div class="divTab" v-if="nowIndex===1">我是tab2</div>
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
.bottomLine{
    margin-top: 3px;
    display: none;
    width: 20px;
    height: 3px;
    position: absolute;
    left: 50%;
    margin-left: -10px;
    background-color: #0CBCA7;
}
.active {
 display: block;
}
.tabs .activeFont{
    font-size: 18px;
}
.tabs {
  width: 100px;
  font: 0;
  padding: 0;
}
.li-tab {
  font-size: 14px;
  width: 50%;
  height: 100%;
  position: relative;
  display: inline-block;
  text-align: center;
}
.divTab {
  background: #FFFFFF;
  width: 100%;
  height: 300px;
} 
.ss_top{
  height: 100%;
}
.divTab .ssLi{
  padding: 10px 15px;
  height: 310px;
}
.divTab .ss_from{
  display: block;
  color: #07BB9C;
}
.divTab .ss_time{
  display: block;
  color: #BBBBBB;
}
.ss_div_right{
  float: left;
  width: 88%;
}
.ss_div_left{
   float: left;
   height: 100%;
   margin-right: 10px;
}
.ss_top_icon{
  width: 30px;
  height: 30px;
}
.ss_content{
  background: #07BB9C;
  width: 100%;
  height: 200px;
}
</style>

<script>
export default {
  data() {
    return {
      tabsParam: [{name:"推荐"},{name:"关注"}],
      nowIndex: 0,
      TjList:[1]
    };
  },
  created() {},
  mounted() {},
  methods: {
    toggleTabs: function(index,item) {
       if(this.nowIndex==1&&index==1){
         if(item.name=='最新'){
            item.name="关注"
         }else{
            item.name="最新"
         }
      }
      this.nowIndex = index;
    }
  }
};
</script>