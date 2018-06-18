<template>
  <!--logs.wxml-->
  <div class="container">
    <div class="content">
      <div>
        <div class="title">
          <span>电费</span>
          <span class='iconfont icon-jiaodianfei logo'></span>
        </div>
        <div class="item">
          <span style="color: silver;">生成时间</span>
          <span>2018-06-1</span>
        </div>
        <div class="item">
          <span style="color: silver;">上次读数</span>
          <span>2342</span>
        </div>
        <div class="item">
          <span style="color: silver;">本次读数</span>
          <span>542345</span>
        </div>
        <div class="item">
          <span style="color: silver;">用电</span>
          <span>1234度</span>
        </div>
        <div class="item">
          <span style="color: silver;">单价</span>
          <span>1.3元/度</span>
        </div>
        <div class="item">
          <span style="color: silver;">产生电费</span>
          <span>345元</span>
        </div>
      </div>
      <div class="divide-line"></div>
      <div>
        <div class="title">
          <span>水费</span>
          <span class='iconfont icon-shui logo'></span>
        </div>
        <div class="item">
          <span style="color: silver;">生成时间</span>
          <span>2018-06-1</span>
        </div>
        <div class="item">
          <span style="color: silver;">上次读数</span>
          <span>2342</span>
        </div>
        <div class="item">
          <span style="color: silver;">本次读数</span>
          <span>542345</span>
        </div>
        <div class="item">
          <span style="color: silver;">用水</span>
          <span>1234吨</span>
        </div>
        <div class="item">
          <span style="color: silver;">单价</span>
          <span>1.3元/吨</span>
        </div>
        <div class="item">
          <span style="color: silver;">产生电费</span>
          <span>345元</span>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
    background: #1AAD16;
    padding: 30px 15px;
    .content
      background: #ffffff;
      border-radius: 5px;
      padding: 20px 20px;
      .title
        text-align: center;
        margin-bottom: 10px;
        font-size: 16px;
        height: 24px;
        line-height: 24px;
        .logo
          color:#1AAD16;
          font-size:16px;
          margin-left: 5px;
      .item
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 30px;
      .divide-line
        margin: 20px 0px;
        width:100%;
        height:0;
        border-bottom:#000000 1px dashed;


</style>
