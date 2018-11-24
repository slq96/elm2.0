<template>
    <div class="topBjdz">
        <div class="topmy">
      <img @click="back()" :src="jian" alt="">
      <h3>编辑地址</h3>
      <p @click="txt()">编辑</p>
      </div>
      <div class="Libox1">
      <ul class="ulbox">
          <li :key="index" v-for="(val,index) in $store.state.adds">
            <p>
          {{val.name}}
            </p>
            <p>
           {{val.phone}}
            </p>
            <img v-if="non1" @click="SC(index)" :src="chahao" alt="">
          </li>
          <li>
            <p>
            2楼尚中尚
            </p>
            <p>
            1366666666
            </p>
            <img v-if="non1"  :src="chahao" alt="">
          </li>
      </ul>
      <p>新增地址<img @click="goingto()" 
      :src="jianyou" alt=""></p>
      </div>
      
        
    </div>
</template>
<style scoped>
.topBjdz{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
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
  .topmy > p{
      display: inline-block;
      color: #ffffff;
      position: absolute;
      top:0;
      right: 0.1rem;
  }
  .Libox1{
      width: 100%;
  }
  .ulbox li{
      width: 100%;
      height: 0.6rem;
      background-color:antiquewhite;
      position: relative;
  }
  .ulbox li > p:nth-of-type(1){
  padding: 0.1rem;
  }
  .ulbox li>p:nth-of-type(2){
      padding-left: 0.1rem;
  }
  .Libox1 >p{
      width: 100%;
      height: 0.4rem;
      background-color:aquamarine;
      line-height: 0.4rem;
      position: relative;
      padding-left:0.1rem; 
  }
  .Libox1 img{
      position: absolute;
      top: 0.1rem;
      right: 0.3rem;
  }
  .ulbox img{
       width: 0.15rem;
       position:absolute;
       top: 0.16rem;
       right: 0.13rem;
  }
</style>
<script>
import jian from '../../../static/imgs/jian.png'
import jianyou from '../../../static/imgs/jianyou.png'
import chahao from '../../../static/imgs/chahao.png'
    export default{
        data(){
            return {
                 non1:false,
                 jian,
                 jianyou,
                 chahao,


            }
           
        },
        methods:{
            back(){
                this.$router.back()
            },
             goingto(){
            this.$router.push({
                name:"Xzdz"
            })
             },
             SC(a){
                 this.$store.state.adds.splice(a,1)
             },
             txt(){
               
                 if(this.non1==false){
                    $(".topmy p").text("完成");
                 }else{
                      $(".topmy p").text("编辑");
                 }
                 this.non1=!this.non1

             }

            
        }
    }
</script>