<template>
    <div class="topDH">
         <div class="topmy">
      <img @click="back()" src="/static/imgs/jian.png" alt="">
      <h3>兑换红包</h3>
      </div>
       <div class="Dhm">
         <input v-model="ALDH" type="text" placeholder="请输入兑换码">
         <input type="text" placeholder="兑换码">
         <p>
             <img @click="getCode()" :src="code&&code" alt="">
             <span>看不清</span>
             <span>换一张</span>
         </p>
         <input type="button" value="兑换" class="btn1">
       </div>


    </div>
</template>
<style scoped>
    .topDH{
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
  .Dhm{
      width: 100%;
      height: 100%;
    background-color:#f2f2f2;
  }
  .Dhm >input:nth-of-type(1){
      width: 86%;
      padding: 0.15rem;
      margin: 0.2rem 0.1rem 0 0.1rem;
      border-radius: 0.08rem;
      border: none;
      outline: none;
  }
  .Dhm >input:nth-of-type(2){
      width: 40%;
      padding: 0.15rem;
      margin: 0.2rem 0.1rem 0 0.1rem;
      border-radius: 0.08rem;
      border: none;
      outline: none;
  }
   .Dhm >p{
       float: right;
       height: 0.5rem;
       width: 46%;
       background-color:aqua;
       margin-top: 0.2rem;
       font-size: 0.13rem;
       border-radius: 0.06rem;
       position: relative;
   }
   .Dhm >p >span:nth-of-type(1){
        float: right;
        padding: 0.1rem;

   }
    .Dhm > img{
        float: left;
        
    }
    


   .Dhm >p >span:nth-of-type(2){
        position: absolute;
        top: 0.27rem;
        right: 0.1rem;
        color: #3190e8;
   }
   .btn1{
       width:91%;
      padding: 0.11rem;
      margin: 0.4rem 0.15rem 0 0.15rem;
      border-radius: 0.08rem;
      border: none;
      outline: none;
      color:#ffffff;
      font-size: 0.16rem;
   }
    </style>
<script>
    export default{
        name:"DHHB",
        methods:{
          back(){
              this.$router.back();
          }
        },
        data(){
                 return{
                  ALDH:[],
                 }
        },
        created(){
            
       this.$http.get("https://elm.cangdu.org/v1/users/:user_id/hongbao/exchange").then(
         (response) => {
             //移除网络加载动画效果：
             console.log("请求成功!");
             //返回请求到的数据
     console.log(response.data);
      this.ALDH = response.data;//接收后台返回的数据   
});
     this.getCode();
        },
         getCode(){
        this.$http({
          method: 'post',
          url: "https://elm.cangdu.org/v1/captchas",
        //用于表示用户代理是否应该在跨域请求的情况下从其他域发送cookies。不使用缓存数据
          withCredentials: true, // 默认false
        }).then((res) => {
          console.log('tap', res);
            if(res.data.status == 200){}
          this.code = res.data.code
          console.log(this.code)
        })
      }
    }
</script>