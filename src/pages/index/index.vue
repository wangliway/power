<template>
  <div class="container">
      <div class="item" @click="navToDetail">
        <div class="item-content">
          <div>
            2018-05
          </div>
          <div>水费: 234元</div>
          <div>电费: 123元</div>
        </div>
      </div>
      <div class="item">
        <div class="item-content">
          <div>
            2018-05
          </div>
          <div>水费:234元</div>
          <div>电费:123元</div>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    data () {
      return {
        userInfo: {}
      }
    },
    methods: {
      navToDetail () {
        wx.navigateTo({
          url: '../detail/main'
        })
      },
      getUserInfo () {
        // 调用登录接口
        wx.login({
          success: () => {
            wx.getUserInfo({
              success: (res) => {
                this.userInfo = res.userInfo
                this.setUser(res.userInfo)
              }
            })
          }
        })
      },
      ...mapMutations({
        setUser: 'SET_USER'
      })
    },
    created () {
      this.getUserInfo()
    },
    mounted () {
      if (this.userInfo.nickName === undefined) {
        wx.navigateTo({
          url: '../auth/main'
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
    padding: 5px 10px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
    .item
      width: 100%;
      height: 60px;
      line-height: 60px;
      background: #ffffff;
      border-radius: 5px;
      margin-top: 15px;
      border-right: 4px solid #1AAD16;
      .item-content
        margin-top: 5px;
        display: flex;
        align-items: center;
        justify-content: space-around;

</style>
