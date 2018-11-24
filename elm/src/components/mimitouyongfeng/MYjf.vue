<template>
    <div class="MYJFTOp">
     <div class="topmy">
      <img @click="back()" :src="jian" alt="">
      <h3>历史红包</h3>
       </div>


<div class="topblue">
      <div class="Nowyue">
      <p>当前积分</p>
      <p>积分说明</p>
      <p>?</p>
      <h1>0.00<span>元</span></h1>
      <button>积分兑换商品</button>
      </div>
      
      </div>
       <p>最近30天积分记录</p>
       <p><img :src="zanwu" alt=""><span>
          暂无明细记录</span></p>





    </div>
</template>
<script>

import jian from '../../../static/imgs/jian.png'
import zanwu from '../../../static/imgs/zanwu.png'
    export default{
        name:"MYJF",
    data(){
        return{
            jian,
            zanwu
        }
    },
        methods:{
            back(){
                this.$router.back();
            }
        }
    }
</script>
<style scoped>
.MYJFTOp{
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
.topblue{
     width: 100%;
     height: 1.5rem;
     background-color:#3190e8;
   }
   .Nowyue{
       width: 94%;
       height: 1.35rem;
       margin:  0 auto;
       background-color: #ffffff;
       border-radius: 0.05rem;
       position: relative;
       overflow: hidden;

   }
   .Nowyue>p:nth-of-type(1){
       display: inline;
       margin: 0.1rem;
   }
.Nowyue>p:nth-of-type(2){
       float: right;
       margin: 0.1rem;
   }
   .Nowyue>p:nth-of-type(3){
       width: 0.2rem;
       height: 0.2rem;
       background-color:#3190e8;
       color: #ffffff;
       font-size: 0.16rem;
       position: absolute;
       top:0.08rem;
       right: 0.8rem;
       text-align: center;
       border-radius:50%;
       line-height: 0.2rem; 
   }
   h1{
       position:absolute;
       top: 0.3rem; 
       left: 0.1rem;
   }
   h1>span{
       margin-left: 0.03rem;
      font-size: 0.14rem;
   }
   button{
       width: 95%;
       height: 0.3rem;
       position: absolute;
       bottom: 0.1rem;
       left: 0.1rem;
       border-radius: 0.05rem;
       color: #ffffff;
       font-size: 0.16rem;
   }
   .MYJFTOp > p:nth-of-type(1){
       margin: 0.14rem;
       font-size: 0.13rem;
       color: #666;
   }
   .MYJFTOp > p:nth-of-type(2){
       margin: 0.14rem;
       text-align: center;
   }
   .MYJFTOp > p:nth-of-type(2)>span{
       display: block;
       margin-top: 0.2rem;
       color: #666;
   }



</style>
