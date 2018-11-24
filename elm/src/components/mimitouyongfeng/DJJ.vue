<template>
    <div class="daijintop">
         <div class="topmy">
      <img @click="back()" :src="jian" alt="">
      <h3>我的优惠</h3>
      </div>
      <div class="Body">
            <p @click="Sm()">商家代金券说明</p> 
            <p>?</p>
      <img src="../../../static/imgs/zanwu.png" alt="">
        <p>无法使用代金券</p>
         <p>非客户端或客户端版本过低</p>
         <p @click="Donw()">下载或升级客户端</p>

      </div>




    </div>
</template>

<script>
import jian from '../../../static/imgs/jian.png'



export default {
            name:"Djj",
            data(){
                return{
                   jian
                }
            },
            methods:{
                Sm(){
                    this.$router.push({
                        name:"shangjiashuoming"
                    })
                },
                Donw(){
                    this.$router.push({
                        name:"elmeAPP"
                    })
                },
                back(){
                    this.$router.back()
                }
            }
            
             
}
</script>

<style>

.daijintop{
    width: 100%;
    height: 100%;
    background-color:#f2f2f2;
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
.Body{
    width: 100%;
    height: 100%;
    text-align: center;
}
.Body >p:nth-of-type(2){
    float: right;
    margin: 0.16rem 0.01rem 0;
    font-size: 0.16rem;
    width: 0.2rem;
    height: 0.2rem;
    background-color:#3190e8;
   text-align: center;
   line-height: 0.2rem;
   border-radius: 50%;
 }
.Body >p:nth-of-type(1){
    float: right;
    margin: 0.2rem 0.2rem 0 0.02rem;
    font-size: 0.13rem;
 }
  .Body >img{
      margin-top: 0.67rem;
      margin-left: 0.45rem;
      
  }
.Body >p:nth-of-type(3){
    margin: 0.2rem 0.2rem 0 0.02rem;
    font-size: 0.17rem;
 }
.Body >p:nth-of-type(4){
    margin: 0.2rem 0.2rem 0 0.02rem;
    font-size: 0.13rem;
    color: #666;
 }
.Body >p:nth-of-type(5){
    margin: 0.2rem 0.2rem 0 1rem;
    font-size: 0.13rem;
    background-color: #56d176;
    color: #ffffff;
    padding: 0.15rem;
    width: 1.4rem;
    border-radius: 0.05rem;
 }

</style>
