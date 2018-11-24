<template>
    <div class="TuiJian">
     <div class="topmy">
      <img @click="back()" :src="jian" alt="">
      <h3>推荐有奖</h3>
      </div>
     <div class="Bigpic">
<img :src="bigpicA" alt="">
     </div>
    <div class="fenxiang">
     <p @click="bvh=!bvh">
         <img :src="WXin" alt="">
         <span>邀请微信好友</span>
     </p>
     <p @click="bvh=!bvh">
         <img :src="QQ" alt="">
           <span>邀请QQ好友</span>

     </p>
     <p @click="bvh=!bvh">
         <img :src="erweima" alt="">
         <span>面对面邀请</span>
     </p>
    </div>
    <div class="buttomA">
     <p>
        累计收益<span><h3>0</h3>元</span> 
     </p>
     <p>
        成功邀请<span><h3>0</h3>人</span> 
     </p>
     <p>-收益明细-</p>
    <img :src="backhongbao" alt="">
    </div>
       <div v-if="bvh" class="SJbdapp">
       <p>!</p>
       <h4>请在手机APP中打开</h4>
       <p v-if="bvh" @click="bvh=!bvh">确认</p>
       </div>
    </div>
</template>

<script>

import backhongbao from '../../../static/imgs/backhongbao.png'
import jian from '../../../static/imgs/jian.png'
import erweima from '../../../static/imgs/erweima.png'
import QQ from '../../../static/imgs/QQ.png'
import WXin from '../../../static/imgs/WXin.png'
import bigpicA from '../../../static/imgs/bigpicA.png'



export default {
  name: "five",
  data(){
     return{
         hvb:false,
              bvh:false,
              backhongbao,
              jain,
          QQ,
          bigpicA,
          WXIn,
          erweima




     }
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>

<style>
.TuiJian {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-color: #f2f2f2;
}
.topmy {
  width: 100%;
  height: 0.5rem;
  background-color: #3190e8;
  color: #ffffff;
  line-height: 0.5rem;
  text-align: center;
  overflow: hidden;
  position: relative;
}

.topmy img {
  width: 4%;
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
}
.Bigpic {
  width: 100%;
  height: 1.8rem;
}
.Bigpic img {
  width: 100%;
  height: 100%;
}
.fenxiang {
  width: 100%;
  height: 1.2rem;
  margin-top: 0.1rem;
  background-color: #ffffff;
}
.fenxiang img {
  width: 40%;
  margin-top: 0.1rem;
}
.fenxiang p {
  width: 33%;
  height: 100%;
  float: left;
  line-height: 0.8rem;
  text-align: center;
  position: relative;
}
.fenxiang p > span {
  position: absolute;
  top: 0.5rem;
  left: 0.2rem;
}
.buttomA {
  width: 100%;
  height: 50%;
}
.buttomA > p:nth-of-type(1) {
  margin-top: 0.2rem;
  width: 50%;
  height: 0.5rem;
  border-left: 0.01rem solid #ffffff;
  float: left;
  box-sizing: border-box;
  text-align: center;
  font-size: 0.13rem;
  position: relative;
  line-height: 0.4rem;
  margin-bottom: 0.4rem;
}
.buttomA > p:nth-of-type(1) > span > h3 {
  display: inline-block;
  font-size: 0.23rem;
  color: #ff5633;
}
.buttomA > p:nth-of-type(1) > span {
  position: absolute;
  top: 0.2rem;
  left: 0.82rem;
}

.buttomA > p:nth-of-type(2) {
  margin-top: 0.2rem;
  width: 50%;
  height: 0.5rem;
  border-right: 0.01rem solid #f2f2f2;
  float: left;
  box-sizing: border-box;
  text-align: center;
  font-size: 0.13rem;
  position: relative;
  line-height: 0.4rem;
  margin-bottom: 0.4rem;
}
.buttomA > p:nth-of-type(2) > span > h3 {
  display: inline-block;
  font-size: 0.23rem;
  color: #666;
}
.buttomA > p:nth-of-type(2) > span {
  position: absolute;
  top: 0.2rem;
  left: 0.82rem;
}

.buttomA > p:nth-of-type(3) {
  text-align: center;
  color: #666;
}

.buttomA img {
  width: 15%;
  margin: 0.2rem 1.5rem;
}

.SJbdapp {
  width: 80%;
  height: 24%;
  background-color: #ffffff;
  position: absolute;
  top: 1.5rem;
  left: 0.35rem;
  border-radius: 0.08rem;
}
.SJbdapp h4 {
  text-align: center;
}
.SJbdapp > p:nth-of-type(1) {
  color: rgb(248, 187, 134);
  border: 0.03rem solid rgb(248, 187, 134);
  font-size: 0.5rem;
  text-align: center;
  width: 24%;
  height: 37%;
  line-height: 0.6rem;
  border-radius: 50%;
  margin: 0.2rem auto;
}
.SJbdapp > p:nth-of-type(2) {
  text-align: center;
  width: 90%;
  padding: 0.1rem;
  background-color: #4cd964;
  border-bottom-left-radius: 0.08rem;
  border-bottom-right-radius: 0.08rem;
  margin-top: 0.18rem;
  color: #ffffff;
}
</style>
