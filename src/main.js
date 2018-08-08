import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
    config: {
      pages: ['^pages/guangchang/main','pages/index/main','pages/xinxi/main','pages/xingqiu/main','pages/geren/main'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: '第一个小程序',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        color: "#8a8a8a",
        selectedColor: "#017cc0",
        backgroundColor: "#f8f8f8",
        "list": [
          {
            pagePath: "pages/xingqiu/main",
             text: "星球",
             iconPath: "/static/images/icon_publish_setting_selected.png",
             selectedIconPath: "/static/images/icon_publish_setting_selected.png"
           },
           {
             pagePath: "pages/guangchang/main",
             text: "广场",
             iconPath: "/static/images/icon_publish_setting_selected.png",
             selectedIconPath: "/static/images/icon_publish_setting_selected.png"
           },
           {
             pagePath: "pages/guangchang/main",
             iconPath: "/static/images/icon_tabbar_release.png",
             selectedIconPath: "/static/images/icon_tabbar_release.png"
           },
           {
              pagePath: "pages/xinxi/main",
             text: "信息",
             iconPath: "/static/images/icon_publish_setting_selected.png",
             selectedIconPath: "/static/images/icon_publish_setting_selected.png"
           },
           {
             pagePath: "pages/geren/main",
             text: "个人",
             iconPath: "/static/images/icon_publish_setting_selected.png",
             selectedIconPath: "/static/images/icon_publish_setting_selected.png"
           }
        ]
      }
    }
  }
