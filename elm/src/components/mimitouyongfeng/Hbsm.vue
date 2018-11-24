<template>
    <div class="Smtext">
     <div class="topmy">
      <img @click="back()" :src="jian" alt="">
      <h3>红包说明</h3>
      </div>
      <div class="Q1text">
      <h3>{{ALtext.hongbaoCaption}}</h3>
      <div>
          {{ALtext.hongbaoContent}}
      </div>
      </div>
      



    </div>

</template>
<style scoped>
   .Smtext{
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
        name:"Hbsm",
        methods:{
            back(){
                this.$router.back();
            }
        },
        data(){
         return{
            ALtext:[],
            jian
         }
        },
        created(){
        this.$http.get("https://elm.cangdu.org/v3/profile/explain").then(
         (response) => {
             //移除网络加载动画效果：
             console.log("请求成功!");
             //返回请求到的数据
  console.log(response.data);
  this.ALtext = response.data;//接收后台返回的数据   
})
        }
       

    }
</script>