<template>
  <div class="container">
    <div class="top-panel">
      <img class="avatar" src="../../common/images/home_logo.png">
      <div class="name">租客</div>
      <div class="divide-line"></div>
      <div class="title">网页由该公众号开发，请确认授权以下信息</div>
      <div class="sub_title">获取你的公开信息（昵称、头像等）</div>
      <button  type="primary" open-type="getUserInfo" bindgetuserinfo="onGotUserInfo">确认登录</button>
    </div>
  </div>
</template>
<script>
  import {mapMutations} from 'vuex'
  // 登录获取用户信息
  export default {
    data () {
      return {
        userInfo: {}
      }
    },
    methods: {
      getUserInfo () {
        // 调用登录接口
        wx.login({
          success: () => {
            wx.getUserInfo({
              success: (res) => {
                this.setUser(res.userInfo)
              }
            })
          }
        })
      },
      onGotUserInfo (e) {
        console.log(e)
      },
      ...mapMutations({
        setUser: 'SET_USER'
      })
    },
    created () {
    },
    mounted () {
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
    background #fff
    padding 0px 30px
    .top-panel
      text-align center
      height 30%
      .avatar
        width 100px
        height 100px
        margin-top 20px
      .name
        font-size 24px
      .divide-line
        height 0px
        overflow hidden
        border-bottom: #f7f7f7 1px solid
        margin 30px 20px
      .title
        font-size 16px
      .sub_title
        margin-top 30px
        color: silver
        font-size 14px
      button
        margin-top 30px
</style>
