<template>
  <div class="container">
    <div class="content">
      <div class="section">
        <span class='iconfont icon-icon-ammeter logo'></span>
        <input @focus="delPowerError"  confirm-type="done" focus type="digit" v-model="powerNum" placeholder="电表读数"/>
        <span class="error" v-if="myErrors.power">{{myErrors.power}}</span>
      </div>
      <div class="section" >
        <span   class='iconfont icon-shuiwei logo'></span>
        <input @focus="delWaterError"  confirm-type="done" focus type="digit" v-model="waterNum" placeholder="水表读数"/>
        <span class="error" v-if="myErrors.water">{{myErrors.water}}</span>
      </div>
        <div class="section detail">
          <span>用电 {{powerUse}}度</span>
          <span>电费 {{powerCharge}}元</span>
        </div>
        <div class="section detail">
          <span>用水 {{waterUse}}吨</span>
          <span>水费 {{waterCharge}}元</span>
        </div>
      <div class="section">
        <button type="default" @click="confirmData">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        powerNum: '',
        waterNum: '',
        lastPowerNum: 100,
        lastWaterNum: 100,
        powerPrice: 1.3,
        waterPrice: 7,
        myErrors: {
          power: '',
          water: ''
        }
      }
    },
    methods: {
      confirmData () {
        // 判断是否为空
        if (!this.powerNum) {
          this.myErrors.power = '电表读数不能为空'
        }
        if (!this.waterNum) {
          this.myErrors.water = '水表读数不能为空'
        }
        if (this.myErrors.power === '' && this.myErrors.water === '') {
          // 如果上个月有水电费 判断是否比上次的数据要小
          if (parseFloat(this.powerNum) < this.powerNum) {
            this.myErrors.power = ' 电表读数不能比上次读数要小'
          }
          if (parseFloat(this.waterNum) < this.waterNum) {
            this.myErrors.water = ' 水表读数不能比上次读数要小'
          }
        }
      },
      delPowerError () {
        if (this.myErrors.power) {
          this.myErrors.power = ''
        }
      },
      delWaterError () {
        if (this.myErrors.water) {
          this.myErrors.water = ''
        }
      }
    },
    computed: {
      powerUse () {
        if (this.lastPowerNum && (parseFloat(this.powerNum) > this.lastPowerNum)) {
          return (parseFloat(this.powerNum) - this.lastPowerNum).toFixed(2)
        }
        return 0
      },
      powerCharge () {
        if (this.lastPowerNum && parseFloat(this.powerNum) > this.lastPowerNum) {
          return ((parseFloat(this.powerNum) - this.lastPowerNum) * this.powerPrice).toFixed(2)
        }
        return 0
      },
      waterUse () {
        if (this.lastWaterNum && parseFloat(this.waterNum) > this.lastPowerNum) {
          return (parseFloat(this.waterNum) - this.lastWaterNum).toFixed(2)
        }
        return 0
      },
      waterCharge () {
        if (this.lastWaterNum && parseFloat(this.waterNum) > this.lastPowerNum) {
          return ((parseFloat(this.waterNum) - this.lastWaterNum) * this.waterPrice).toFixed(2)
        }
        return 0
      }

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
    padding: 20px 15px;
    .content
      background: #ffffff;
      border-radius: 5px;
      padding: 20px 20px;
      .section
        position: relative;
        margin-bottom: 30px;
        height: 25px;
        line-height: 25px;
        border-bottom: 1px solid #F7F7F7;
        input
          margin-left: 50px;
          font-size: 16px;
        .logo
          color: #1AAD16;
          font-size: 18px;
          margin-left: 5px;
          margin-right: 5px;
          position: absolute;
          left: -5px;
         .error
            color:#d9534f;
            position: absolute;
            right 0px;
            top: 0px
      .detail
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: silver;
</style>
