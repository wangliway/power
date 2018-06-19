import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store
const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main', 'pages/auth/main', 'pages/add/main', 'pages/me/main', 'pages/detail/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '租客',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      backgroundColor: '#fff',
      selectedColor: '#1AAD16',
      list: [
        {
          pagePath: 'pages/index/main',
          text: '首页',
          iconPath: 'static/images/record.png',
          selectedIconPath: 'static/images/record_selected.png'
        },
        {
          pagePath: 'pages/add/main',
          text: '添加',
          iconPath: 'static/images/add.png',
          selectedIconPath: 'static/images/add_selected.png'
        },
        {
          pagePath: 'pages/me/main',
          text: '我',
          iconPath: 'static/images/me.png',
          selectedIconPath: 'static/images/me_selected.png'
        }
      ]
    }
  }
}
