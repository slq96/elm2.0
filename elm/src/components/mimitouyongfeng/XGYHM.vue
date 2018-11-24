<template>
    <div class="topXG">
    <div class="topmy">
  <router-link to="/ZHXX"><img src="/static/imgs/jian.png" alt=""></router-link>
      <h3>修改用户名</h3>
      </div>
     <div class="XGcontent">
      <input v-model="lengths" type="text" placeholder="输入用户名">
      <p>用户名只能修改一次(5-24字符之间)</p>
      <button @click="len()">确认修改</button>
     </div>





    </div>

</template>
<style scoped>
.topXG {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
.topmy {
  width: 100%;
  height: 0.5rem;
  background-color: #3190e8;
  color: #ffffff;
  line-height: 0.5rem;
  text-align: center;
  overflow: hidden;
  position: relative;
}
.topmy img {
  width: 4%;
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
}
.XGcontent{
  width: 100%;
}
.XGcontent input{
   width: 86%;
   padding: 0.1rem;
   margin:0.13rem;
   font-size: 0.19rem;
   color: #666;
   border:0.01rem solid #666; 
}
.XGcontent p{
  font-size: 0.08rem;
  margin-left: 0.15rem;
}
.XGcontent button{
  color: #ffffff;
  width: 90%;
  margin: 0.2rem;
  padding: 0.1rem;
  border-radius: 0.05rem;
  font-size:0.16rem;
  background-color: #3190e8;
}



</style>
<script>
export default {
 name:"XGYHM",
 data(){
   return{
     lengths:[]
   } 
 },
 methods:{
      len(){
          console.log(lengg.length);
      }
  
   
 }
};
</script>