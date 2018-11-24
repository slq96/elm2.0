<template>
     <!-- 新增地址 -->
     <div class="topXZDZ">
      <div class="topmy">
      <img @click="back()" :src="jian" alt="">
      <h3>新增地址</h3>
      </div>
     <div class="inpbox">
         <input type="text" name="" id="" placeholder="请填写你的姓名"> 
         <input type="text" name="" id="" placeholder="小区/写字楼/学校">
         <input type="text" name="" id="" placeholder="请填写详细送餐地址">
         <input type="text" name="" id="" placeholder="请填写能够联系到您的手机号">
         <input type="text" name="" id="" placeholder="备用联系电话(选填)">
         <button @click="nowXX()">新增地址</button>
              
     </div>

     </div>
</template>
<style scoped>
 .topXZDZ{
     width: 100%;
     height: 100%;
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
  .inpbox{
      width: 100%;
  }
  .inpbox input{
      width: 86%;
      padding: 0.09rem 0.1rem;
      margin: 0.1rem 0.16rem;
      border-radius: 0.07rem;
      background-color: #f2f2f2;
      border: none;
      outline: none;
  }
  button{
            width: 90%;
      padding: 0.09rem 0.1rem;
      margin: 0.1rem 0.16rem;
      border-radius: 0.07rem;
      background-color: #61e640;
      border: none;
      outline: none;
  }
</style>
<script>
import jian from '../../../static/imgs/jian.png'
    export default{
        name:"XZDZ",
        data(){
            return{
             xixi:[],
             jian
            }
        },
        methods:{
            back(){
                this.$router.back();
            },
            nowXX(){
                for(let i=0;i<5;i++){
                     if($(".inpbox input:eq("+i+")").val()==''){
                  alert("请写完整");
                  break;
              }else{
                                  
              }                   
                }
                this.xixi={
                      name:$(".inpbox input:eq(0)").val(),
                       abb:$(".inpbox input:eq(1)").val(),
                        xqdz:$(".inpbox input:eq(2)").val(),
                         phone:$(".inpbox input:eq(3)").val(),
                          phone2:$(".inpbox input:eq(4)").val(),

                  }
               this.$store.state.adds.push(this.xixi);
               console.log( this.$store.state.adds)
            }
        }
    }
</script>