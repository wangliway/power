<template>
  <div class="container">
    <div class="top-panel">
        <img class="avatar" :src="userInfo.avatarUrl">
        <div class="name">{{userInfo.nickName}}</div>
    </div>
    <div class="content">
      <div class="item">
        <span>房东电话</span>
        <span>13133845707</span>
      </div>
      <div class="item">
        <span>公寓地址</span>
        <span>深圳市龙华新区观澜街道</span>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
export default {
    data () {
      return {}
    },
    computed: {
      ...mapGetters([
        'userInfo'
      ])
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
    .top-panel
      height 180px
      line-height 180px
      background #1AAD16
      .avatar
        width 128rpx;
        height 128rpx;
        margin 20rpx;
        border-radius 50%;
      .name
        color #fff
    .content
      .item
        height 50px
        line-height 50px
        margin-top 20px
        background #fff
        padding 0px 30px
        display flex
        align-content center
        justify-content space-between
</style>
