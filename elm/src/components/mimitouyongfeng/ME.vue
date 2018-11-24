<template>
    <div class="MEbox1">
      <div class="topmy">
      <img :src="jian" alt="">
      <h3>我的</h3>
      </div>
     <div @click="hoing()" class="cd">
      <!-- <img src="/static/imgs/topPict.png" alt=""> -->






      <div class="Number">
      <p>username</p>
      <p class="numberID">
      <img src="/static/imgs/shouji.png" alt="">
      <span>暂无绑定手机号</span>
      </p>
        <img class="youjiantou" src="/static/imgs/baiseyou.png" alt="">
      </div>
     </div>
     <!-- 余额 -->
     <div class="loginID">
     <div @click="monny()" class="YE">
     <p>0.00</p><span>元</span>
     <p>我的余额</p>
     </div>
     <!-- 优惠 -->
     <div @click="Youhui()" class="YH">
     <p>0</p><span>个</span>
     <p>我的优惠</p>
     </div>
     <!-- 积分 -->
     <div @click="JF()" class="JF">
      <p>0</p><span>分</span>
     <p>我的积分</p>
     </div>
        </div>
     <!-- 我的订单 -->
     <div class="GRZX">
       <div class="Dd">
           <router-link to="/mydd">
           <img src="/static/imgs/dingdan.png" alt=""> 
       <p>
           我的订单 <span><img src="/static/imgs/youjiantou.png" alt=""></span>
       </p>
       </router-link>
       
       </div>
       <div class="Jfsc">
           <router-link to="/myjfsc">
        <img src="/static/imgs/jfsc.png" alt="">
        <p>积分商城<span><img src="/static/imgs/youjiantou.png" alt=""></span></p>
        </router-link>
        
       </div>
       <div class="Hyk">
           <router-link to="/myhyk">
       <img src="/static/imgs/huangguan.png" alt="">
       <p>饿了么会员卡<span><img src="/static/imgs/youjiantou.png" alt=""></span>
       </p>
       </router-link>
       
       </div>

     </div>
      <!-- 第二块 -->
      <div class="GRZX1">
     <div class="Fwzx">
         <router-link to="/myfuwu">
     <img src="/static/imgs/fuwuzhongxin.png" alt="">
     <p>
      服务中心<span><img src="/static/imgs/youjiantou.png" alt=""></span>
     </p>
     </router-link>
     
     </div>
     <div class="elmApp">
         <router-link to="/elmeAPP">
       <img src="/static/imgs/elme.png" alt="">
       <p>下载饿了么App<span><img src="/static/imgs/youjiantou.png" alt=""></span></p>
       </router-link>
       
     </div>
      </div>
    </div>
</template>
<style scoped>
  .MEbox1{
      width: 100%;
      height: 100%;
      background-color: #f2f2f2;
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
  .cd{
      width: 100%;
      height: 0.8rem;
      position: relative;
      background-color:#3190e8;
      
  }
  .cd>img{
      width:19%;
      height: 67%;
      float: left;
      margin: 0.1rem;
  }
  .Number p:nth-of-type(1){
    height: 0.2rem;  
    padding-top: 0.2rem;
  }
  .Number p:nth-of-type(2){
    height: 0.2rem;  
   font-size: 0.1rem;
  }
  .Number img:nth-child(1){
      width:4%;
  }
  .youjiantou{
      width:5%;
      position: absolute;
     right: 0.1rem;
     top: 40%
     
  }
.loginID{
    width: 100%;
    height: 0.8rem;
}
.YE,.JF,.YH{
    width: 33%;
    height: 100%;
    background-color:#ffffff;
    float: left;
    text-align: center;
    line-height:0.5rem;
    position: relative;
    border-right: 0.01rem solid #f2f2f2; 
}

.YE p:nth-of-type(1),.JF p:nth-of-type(1),.YH p:nth-of-type(1){
    font-size: 0.27rem;
    display: inline-block;
}

.YE span:nth-of-type(1),.JF span:nth-of-type(1),.YH span:nth-of-type(1){
    font-size: 0.13rem;
    display: inline-block;
}

.JF p:nth-of-type(1){
    color: orangered;
}
.YH p:nth-of-type(1){
    color: green;
}
.JF p:nth-of-type(2),.YH p:nth-of-type(2),.YE p:nth-of-type(2){
   position: absolute;
   top: 0.4rem;
   left: 0.3rem;
   font-size: 0.13rem;
}

.GRZX{
    width: 100%;
    height: 1.2rem;
    margin-top: 0.16rem;
    background-color: #ffffff;
}
.Hyk img,.Dd img,.Jfsc img,.elmApp img,.Fwzx img{
    width: 0.2rem;
    float: left;
    margin-top: 0.1rem;
    margin: 0.1rem 0.1rem;
}

.GRZX1{
    width: 100%;
    height: 0.8rem;
    margin-top: 0.16rem;
    background-color: #ffffff;
}
.Dd,.Jfsc,.Hyk{
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
}
.Fwzx,.elmApp{
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem; 
}

.Fwzx span,.elmApp span,.Hyk span,.Dd span,.Jfsc span{
   float: right;
}
.Fwzx p,.elmApp p,.Hyk p,.Dd p,.Jfsc p{
    color: black;
   width: 89%;
   float: left;
   border-bottom: 0.01rem solid #e4e4e4;
}
.Hyk p,.elmApp p{
    border: none;
}



</style>
<script>
import jian from '../../../static/imgs/jian.png'
    export default{
     name:"ME",
     data(){
         return{
             jian
         }
     },
     methods:{
         hoing(){
             this.$router.push({
                 name:"ZHXX"
             })
                 
         },
         monny(){
            this.$router.push({
                name:"YUe"
            })
         },
         Youhui(){
             this.$router.push({
                 name:"hongbao"
             })
         },
         JF(){
             this.$router.push({
                 name:"MYJF"
             })
         }
     }
    }





</script>
