<template>
  <div class="container">
        <image class="weclome_view_img" src="../../../../static/welcome_image.jpg"></image>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },

  components: {
   
  },

  methods: {
  
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
    
    
  },
  mounted() {
    setTimeout(function () {
       wx.switchTab({
        url: '../guangchang/main'
      })
    }, 4000) 
  },
  onShow(){
    wx.hideTabBar()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
.weclome_view{
  width: 100%;
  height: 100%;
}
.weclome_view_img{
  width: 100%;
  height: 100%;
  animation:mymove 5s infinite;
}
@keyframes mymove
{
from {transform: scale(1.0);}
to {transform: scale(1.2);}
}
</style>
