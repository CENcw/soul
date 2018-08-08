  <template>
  <section class="tabBar-wrap">
    <article class="tabBar-box">
      <ul class="tabBar-nav" v-if="navList.length > 0">
        <li class="item" v-for="(item, index) in navList"
            @click="selectNavItem(index,item.pagePath)"
            :key="index">
          <p v-if="item.text!=undefined" class="item-images">
            <img :src="selectNavIndex === index ? item.selectedIconPath : item.iconPath" alt="iconPath">
          </p>
          <p v-else class="item-images2">
            <img :src="selectNavIndex === index ? item.selectedIconPath : item.iconPath" alt="iconPath">
          </p>
          <p :class="selectNavIndex === index ? 'item-text item-text-active' : 'item-text' ">
            {{item.text}}
          </p>
        </li>
      </ul>
    </article>
  </section>
</template>
<style>
  .tabBar-box {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #eee;
    background-color: #f8f8f8;
  }
  .tabBar-nav {
    width: 100%;
    display: flex;
  }
   .item {
      flex: 1;
      text-align: center;
    }
    .item-text {
      color: #666;
      font-size: 12px;
      transition: .24s linear;
    }
    .item-text-active {
      color: #27a79a;
    }
    .item-images {
      width: 26px;
      height: 26px;
      margin: 5px auto;
      text-align: center;
      transition: .24s linear;
    }
    .item-images2{
      width: 42px;
      height: 42px;
      margin: 5px auto;
      text-align: center;
      transition: .24s linear;
    }
    img {
        display: inline;
        width: 100%;
        height: 100%;
    }
  
</style>

<script>
export default {
  data () {
    return {
      navList: [
          {
           pagePath: "../../pages/xingqiu/main",
            text: "星球",
            iconPath: "/static/images/icon_publish_setting_selected.png",
            selectedIconPath: "/static/images/icon_publish_setting_selected.png"
          },
          {
            pagePath: "../../pages/guangchang/main",
            text: "广场",
            iconPath: "/static/images/icon_publish_setting_selected.png",
            selectedIconPath: "/static/images/icon_publish_setting_selected.png"
          },
          {
            pagePath: "../../pages/guangchang/main",
            iconPath: "/static/images/icon_tabbar_release.png",
            selectedIconPath: "/static/images/icon_tabbar_release.png"
          },
          {
             pagePath: "../../pages/xinxi/main",
            text: "信息",
            iconPath: "/static/images/icon_publish_setting_selected.png",
            selectedIconPath: "/static/images/icon_publish_setting_selected.png"
          },
          {
            pagePath: "../../pages/geren/main",
            text: "个人",
            iconPath: "/static/images/icon_publish_setting_selected.png",
            selectedIconPath: "/static/images/icon_publish_setting_selected.png"
          }
        ]
    }
  },

  methods: {
    selectNavItem(index, pagePath) {
        this.bindViewTap(pagePath);
      },
       bindViewTap(url) {
        wx.switchTab({
          url,
        })
      },
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
  }
}
</script>