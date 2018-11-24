<template>
    <div class="Myfuwu">
    <div class="topmy">
        <img @click="back()" :src="jian" alt="">
      <h3>服务中心</h3>
      </div>
      <div class="KF">
      <p>
        <img :src="zaixianKF" alt="">
       <span>在线客服</span>
      </p>
      <p>
        <img :src="dianhuaKF" alt="">
        <span>在线客服</span>
      </p>
      </div>
       <!-- 下列选项 -->

      <div class="liBox">
      <p>
          热门问题
      </p>
      <ul class="ulNumber">
          
          <li @click="btn(0,ALtext.supervipCaption)">
              <p>{{ALtext.supervipCaption}}<span><img :src="jianyou" alt=""></span></p>
          </li>
          <!-- 2 -->
          <li @click="btn(1,ALtext.signCaption)">
              <p>{{ALtext.signCaption}}<span><img :src="jianyou" alt=""></span></p>
          </li>
          <!-- 3 -->
            <li @click="btn(2,ALtext.rankCaption)">
              <p>{{ALtext.rankCaption}}<span><img :src="jianyou" alt=""></span></p>
          </li>
          <!-- 4 -->
          <li @click="btn(3,ALtext.pointtextCaption)">
              <p>{{ALtext.pointtextCaption}}<span><img :src="jianyou" alt=""></span></p>
          </li>
          <!-- 5 -->
          <li @click="btn(4,ALtext.signCaption)">
              <p>{{ALtext.signCaption}}<span><img :src="jianyou" alt=""></span></p>
          </li>
          <!-- 6 -->
          <li @click="btn(5,ALtext.phototutorialCaption)">
              <p>{{ALtext.phototutorialCaption}}<span><img :src="jianyou" alt=""></span></p>
          </li>
          <!-- 7 -->
          <li @click="btn(6,ALtext.paymentCaption)">
              <p>{{ALtext.paymentCaption}}<span><img :src="jianyou" alt=""></span></p>
          </li>
          <!-- 8 -->
          <li @click="btn(7,ALtext.otherCaption)">
              <p>{{ALtext.otherCaption}}<span><img :src="jianyou" alt=""></span></p>
          </li>
          <!-- 9 -->
          <li @click="btn(8,ALtext.ontimeCaption)">
              <p>{{ALtext.ontimeCaption}}<span><img :src="jianyou" alt=""></span></p>
          </li>
          <!-- 10 -->
          <li @click="btn(9,ALtext.memberTimesCaption)">
              <p>{{ALtext.memberTimesCaption}}<span><img :src="jianyou" alt=""></span></p>
          </li>
          <!-- 11 -->
          <li @click="btn(10,ALtext.memberPartCutCaption)">
              <p>{{ALtext.memberPartCutCaption}}<span><img :src="jianyou" alt=""></span></p>
          </li>
          <!--12  -->
          <li @click="btn(11,ALtext.memberFullCutCaption)">
              <p>{{ALtext.memberFullCutCaption}}<span><img :src="jianyou" alt=""></span></p>
          </li>
          <!-- 13 -->
          <li @click="btn(12,ALtext.memberCaption)">
              <p>{{ALtext.memberCaption}}<span><img :src="jianyou" alt=""></span></p>
          </li>
          <!-- 14 -->
          <li @click="btn(13,ALtext.hongbaoCaption)">
              <p>{{ALtext.hongbaoCaption}}<span><img :src="jianyou" alt=""></span></p>
          </li>
          <!-- 15 -->
          <li @click="btn(14,ALtext.freshmanCaption)">
              <p>{{ALtext.freshmanCaption}}<span><img :src="jianyou" alt=""></span></p>
          </li>
          <!-- 16 -->
          <li @click="btn(15,ALtext.forgotCaption)">
              <p>{{ALtext.forgotCaption}}<span><img :src="jianyou" alt=""></span></p>
          </li>
          <!--17  -->
          <li @click="btn(16,ALtext.discountCaption)">
              <p>{{ALtext.discountCaption}}<span><img :src="jianyou" alt=""></span></p>
          </li>
          <!-- 18 -->
          <li @click="btn(17,ALtext.disclaimerCaption)">
              <p>{{ALtext.disclaimerCaption}}<span><img :src="jianyou" alt=""></span></p>
          </li>
          <!-- 19 -->
          <li @click="btn(18,ALtext.couponCaption)">
              <p>{{ALtext.couponCaption}}<span><img :src="jianyou" alt=""></span></p>
          </li>
          <!-- 20 -->
          <li @click="btn(19,ALtext.businessCaption)">
              <p>{{ALtext.businessCaption}}<span><img :src="jianyou" alt=""></span></p>
          </li>
          <!--21  -->
          <li @click="btn(20,ALtext.balanceCaption)">
              <p>{{ALtext.balanceCaption}}<span><img :src="jianyou" alt=""></span></p>
          </li>
          <!-- 22 -->
          <li @click="btn(21,ALtext.awesomeRestaurantCaption)">
              <p>{{ALtext.awesomeRestaurantCaption}}<span><img :src="jianyou" alt=""></span></p>
          </li>
          <!-- 23 -->
          <li @click="btn(22,ALtext.anonymousBuyCaption)">
              <p>{{ALtext.anonymousBuyCaption}}<span><img :src="jianyou" alt=""></span></p>
          </li>
          <!-- 24 -->
          <li @click="btn(23,ALtext.activityCaption)">
              <p>{{ALtext.activityCaption}}<span><img :src="jianyou" alt=""></span></p>
          </li>
          


      </ul>
      </div>

    </div>
</template>
<style scoped>
.Myfuwu{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
}
 .topmy{
      width: 100%;
      height: 0.5rem;
      background-color:#3190e8;
      color: #ffffff;
      line-height: 0.5rem;
      text-align: center;
      overflow: hidden;
      position: relative;
  }

  .topmy img{
      width: 4%;
      position: absolute;
      top: 0.1rem;
     left: 0.1rem;
  }
.KF{
    width: 100%;
    height: 0.9rem;
    position: relative;
}
.KF p>img{
    width: 13%;
}
.KF p{
    width: 50%;
    height: 100%;
    float: left;
    line-height: 0.7rem;
    text-align: center;
     border-right: 1px solid #e4e4e4;
     border-bottom: 1px solid #e4e4e4;
     box-sizing: border-box;
}

.KF p:nth-of-type(1)>span{
    position: absolute;
    top: 0.19rem;
    left: 0.65rem;
}
.KF p:nth-of-type(2)>span{
    position: absolute;
    top: 0.19rem;
    left: 2.5rem;
}
.liBox{
    margin-top: 0.01rem;
    width: 100%;
}
.liBox > p:nth-of-type(1){
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    padding-left: 0.13rem;
    border-bottom: 1px solid #e4e4e4;
}
.ulNumber li{
width: 100%;
height: 0.5rem;
line-height: 0.5rem;
padding-left: 0.13rem;
border-bottom: 1px solid #e4e4e4;
}
.ulNumber span{
    float: right;
    margin-right: 0.3rem;
}

</style>
<script>

import jian from '../../../static/imgs/jian.png'
import dianhuaKF from '../../../static/imgs/dianhuaKF.png'
import jianyou from '../../../static/imgs/jianyou.png'
import zaixianKF from '../../../static/imgs/zaixianKF.png'

export default{
    name:"myfuwu",
    data(){
          return{
              jian,
               dianhuaKF,
               zaixianKF,
               jianyou,
               ALtext:[]
          }
    },
    methods:{
        back(){
            this.$router.back();
        },
        btn(a,b){
             this.$store.state.fuindex=a;
             this.$store.state.futop=b;           
             this.$router.push({
                 name:"NTExt"
             })
        }
    },
     
    created() { 
        this.$http.get("https://elm.cangdu.org/v3/profile/explain").then(
         (response) => {
      this.ALtext = response.data;//接收后台返回的数据   
});
        }
}
</script>

