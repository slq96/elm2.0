<template>
    <div class="Mydd">
      <div class="topmy">
      <img @click="back()" :src="jian" alt="">
      <h3>我的订单</h3>
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

import jian from '../../../static/imgs/jian.png'
export default{
    name:"mydd",
    methods:{
        back(){
            this.$router.back();
        }
    },
    data(){
        return{
          jian
        }
    },
    created(){

    }
}    
</script>