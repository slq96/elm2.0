<template>
    <div class="Mydd">
      <div class="topmy">
      <img @click="back()" src="/static/imgs/jian.png" alt="">
      <h3>会员中心</h3>
      </div>
      <div class="content1">
        <p>为账户<span>1235555111</span>购买会员</p>
        <div class="huiyuan">
         <p>
             会员特权
             <span>会员说明<img src="../../../static/imgs/jianyou.png" alt=""></span>
         </p>
           <p>
               <img src="" alt="">
           </p>
           <p>
               <img src="" alt="">
           </p>
           
        </div>
      </div>
    </div>
</template>
<style scoped>
 .Mydd{
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
</style>
<script>
export default{
    name:"myhyk",
    methods:{
        back(){
            this.$router.back();
        }
    }
}    
</script>