<template>
    <div class="shuomingtop">
         <div class="topmy">
      <img @click="back()" :src="jian" alt="">
      <h3>代金券说明</h3>
      </div>
      <div>
          {{ALtext.couponContent}}
      </div>
      </div>
</template>
<style scoped>
.shuomingtop{
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


</style>
<script>
import { Loading } from 'element-ui';
import jian from '../../../static/imgs/jian.png'
    export default{
          name:"shangjiashuoming",
data(){
   return{
       ALtext:[],
       jian
   }
},


          created(){
              let loadingInstance1 = Loading.service({ fullscreen: true,text:'加载中...' });
			
        this.$http.get("https://elm.cangdu.org/v3/profile/explain").then(
         (response) => { loadingInstance1.close();
             //移除网络加载动画效果：
             console.log("请求成功!");
             //返回请求到的数据
    //  console.log(response.data);
      this.ALtext = response.data;//接收后台返回的数据   
});
        
          },
          methods:{
              back(){
                  this.$router.back();
              }
          }
    }
</script>