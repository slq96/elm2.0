<template>
    <div class="Myjf">
    <div class="jfcont">
     <h2>请重新进入</h2>
     <p>请返回后重新进入积分商城</p>
     <img @click="back()" :src="findno" alt="">
    </div>
    </div>
</template>
<style scoped>
.Myjf{
    width: 100%;
    height: 100%;
}
.jfcont{
    width: 100%;
    height: 100%;
    background-color:blanchedalmond;
    position: relative;
}
.jfcont img{
    width:100%;
    position: absolute;
    top: 2rem;
    left: 0.05rem;
}
.jfcont h2{
text-align: center;
color: #3190e8;
font-weight: 700;
position: absolute;
    top: 1.8rem;
    left: 1.3rem;
}
.jfcont p{
    text-align: center;
    position: absolute;
    top: 2.3rem;
    left: 1rem;
}
</style>
<script>
import findno from '../../../static/imgs/findno.png'
    export default{
       name:"myjfsc",
       data(){
           return{
              findno  
           }
       },
       methods:{
           back(){
               this.$router.back();
           }
       }
    }
</script>

