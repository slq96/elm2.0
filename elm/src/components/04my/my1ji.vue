<template>
<div class="MEbox1">
      <div class="topmy">
      <img :src="jian" alt="">
      <h3>我的</h3>
      </div>
     <div @click="hoing()" class="cd">
      <img :src="topPict" alt="">

      <div class="Number">
      <p>{{$store.state.userName}}</p>
      <p class="numberID">
      <img :src="shouji" alt="">
      <span>暂无绑定手机号</span>
      </p>
        <img class="youjiantou" :src="baiseyou" alt="">
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
           <img :src="dingdan" alt=""> 
       <p>
           我的订单 <span @click="dd()"><img :src="youjiantou" alt=""></span>
       </p>
       
       </div>
       <div class="Jfsc">
           <router-link to="/myjfsc">
        <img :src="jfsc" alt="">
        <p>积分商城<span><img :src="youjiantou" alt=""></span></p>
        </router-link>
        
       </div>
       <div class="Hyk">
           <router-link to="/myhyk">
       <img :src="huangguan" alt="">
       <p>饿了么会员卡<span><img :src="youjiantou" alt=""></span>
       </p>
       </router-link>
       
       </div>

     </div>
      <!-- 第二块 -->
      <div class="GRZX1">
     <div class="Fwzx">
         <router-link to="/myfuwu">
     <img :src="fuwuzhongxin" alt="">
     <p>
      服务中心<span><img :src="youjiantou" alt=""></span>
     </p>
     </router-link>
     
     </div>
     <div class="elmApp">
         <router-link to="/elmeAPP">
       <img :src="elme" alt="">
       <p>下载饿了么App<span><img :src="youjiantou" alt=""></span></p>
       </router-link>
       
     </div>
      </div>
    </div>
</template>

<script>
import jian from '../../../static/imgs/jian.png'
import youjiantou from '../../../static/imgs/youjiantou.png'
import topPict from '../../../static/imgs/topPict.png'
import shouji   from '../../../static/imgs/shouji.png'
import baiseyou   from '../../../static/imgs/baiseyou.png'
import dingdan   from '../../../static/imgs/dingdan.png'
import jfsc   from '../../../static/imgs/jfsc.png'
import huangguan  from '../../../static/imgs/huangguan.png'
import fuwuzhongxin  from '../../../static/imgs/fuwuzhongxin.png'
import elme from '../../../static/imgs/elme.png'
	export default {
		name:'my',
		data(){
			return{
             jian,
             youjiantou,
             topPict,
             shouji,
             baiseyou,
             dingdan,
             jfsc,
             huangguan,
             fuwuzhongxin,
             elme
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
         },
         dd(){
         	this.$router.push({
                 name:"dingdan"
             })
         }
     }
	}
</script>

<style scoped="scoped">
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