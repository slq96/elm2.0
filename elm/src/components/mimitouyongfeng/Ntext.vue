<template>
    <div class="toptext">
     <div class="topmy">
      <img @click="back()" src="/static/imgs/jian.png" alt="">
      <h3>{{$store.state.futop}}</h3>
      </div>
      <div>
      {{ALtext[ALLkeys[$store.state.fuindex]]}}
       
      </div>
    </div>
</template>
<style scoped>
       .toptext{
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
import { Loading } from 'element-ui';
    export default{
        name:"Ntext",
        data(){
           
            return{ 
                con:"",
                one:"",
                   ALtext:[],
                   ALLkeys:["supervipContent","signContent","rankContent","pointtextContent","phototutorialContent","paymentContent","otherContent","ontimeContent","memberTimesContent","memberPartCutContent","memberFullCutContent","memberContent","hongbaoContent","freshmanContent","forgotContent","discountContent","disclaimerContent","couponContent","businessContent","balanceContent","awesomeRestaurantContent","anonymousBuyContent","activityContent"]
            }
        },
        methods:{
            back(){
                this.$router.back();
            }
        },
        created(){
            let loadingInstance1 = Loading.service({ fullscreen: true,text:'加载中...' });
		
             this.$http.get("https://elm.cangdu.org/v3/profile/explain").then(
         (response) => {	 loadingInstance1.close();
             //移除网络加载动画效果：
             console.log("请求成功!");
             //返回请求到的数据
    //  console.log(response.data);
      this.ALtext = response.data;//接收后台返回的数据   
});
    
    this.con=this.ALLkeys[this.$store.state.fuindex];
    console.log(this.con)

    //  one = ALtext.supervipContent;
    //  console.log(one)

    
        }
    }
</script>