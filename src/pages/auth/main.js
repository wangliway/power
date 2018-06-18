import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarBackgroundColor: '#26AA39',
    navigationBarTitleText: '授权',
    navigationBarTextStyle: '#fff',
    backgroundColor: '#26AA39'
  }
}
