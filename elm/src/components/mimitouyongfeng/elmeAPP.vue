<template>
    <div class="APPvue">
        <div class="topmy">
      <img @click="back()" src="/static/imgs/jian.png" alt="">
      <h3>下载</h3>
      </div>
      <div class="tent">
      <img src="/static/imgs/elmtubiao.png" alt="">
      <p>下载饿了么APP</p>
      <button>下载</button>
      </div>
    </div>
</template>
<style scoped>
.APPvue{
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
  .tent{
      width: 100%;
      height: 87%;
     font-weight:600; 
      text-align: center;
      color:#666;
      margin-top: 0.2rem;
  }
  .tent button{
      width: 80%;
      height: 0.39rem;
      background-color: #4cd964;
      border-radius:0.06rem;
      color: white; 
      margin-top: 0.21rem;
      font-size: 0.16rem;
  }
 .tent p{
     margin-top: 0.16rem;
     font-size: 0.19rem;

 }




</style>
<script>
export default{
      name:"elmeAPP",
      methods:{
          back(){
              this.$router.back();
          }
      }
}
</script>