<template>
    <div class="topYouhui">
    <div class="topmy">
      <img @click="back()" src="/static/imgs/jian.png" alt="">
      <h3>我的优惠</h3>
      </div>
      <!-- 红包 -->
      <div class="typetwo">
          <p>红包</p>
        <span></span>
          <p @click="djj()">商家代金券</p>
          <span></span>
      </div>
      <!-- box -->
     <div class="cb1">
       <p>有<span>3</span>个红包即将到期</p>
      <p @click="Sm()">红包说明</p> 
      <p>?</p>
     </div>
     <!-- ul -->
     <div class="ul1">
          <ul class="ulBox1">
           <li>
        <div class="monny">
           <p>¥<span>1</span>.0</p>
           <h6>满20元可用</h6>
        </div>
                <div class="text">
                    <h3>分享红包</h3>
                    <p>2017-05-23到期</p>
                    <p>限收货手机号为13681711254</p>
                    <p>剩<span>3</span>日</p>
                </div>                   
           </li>
           <!-- 2 -->
           <li>
        <div class="monny">
           <p>¥<span>2</span>.0</p>
           <h6>满40元可用</h6>
        </div>
                <div class="text">
                    <h3>分享红包</h3>
                    <p>2017-05-23到期</p>
                    <p>限收货手机号为13681711254</p>
                    <p>剩<span>3</span>日</p>
                </div>                   
           </li>
           <!-- 3 -->
           <li>
        <div class="monny">
           <p>¥<span>4</span>.5</p>
           <h6>满30元可用</h6>
        </div>
                <div class="text">
                    <h3>分享红包</h3>
                    <p>2017-05-23到期</p>
                    <p>限收货手机号为13681711254</p>
                    <p>剩<span>3</span>日</p>
                </div>                   
           </li>
       </ul>
       <p>商品类:快餐便当,特色菜列,小吃夜宵,甜品饮品,异国料理</p>
       <p @click="LSHB()">查看历史红包<img src="../../../static/imgs/jianyou.png" alt=""></p>
     </div>
      <!-- 查看历史红包 -->
          
         <div class="twoBtn">
             <p @click="DH()">
                 兑换红包
             </p>
             <p @click="Tuijian()">
                 推荐有奖
             </p>
         </div>

    </div>
</template>
<style scoped>
.topYouhui{
    width: 100%;
    height: 113%;
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
  .typetwo{
    width: 100%;
    height: 0.5rem;
     background-color: #ffffff;
  }
  .typetwo>p:nth-of-type(1){
      float: left;
      margin: 0.1rem 0.6rem;
      padding-bottom: 0.05rem;
      border-bottom: 0.04rem solid  #3190e8;
  }

  
.typetwo>p:nth-of-type(2){
      float: right;
      margin: 0.1rem 0.6rem;
      padding-bottom: 0.05rem;
      border-bottom: 0.04rem solid  #3190e8;
  }
 .cb1 >p:nth-of-type(1){
    float: left;
    margin: 0.2rem;
    font-size: 0.13rem;
 }
.cb1 >p:nth-of-type(1) >span{
    color: #ff5340;
 }
  .cb1 >p:nth-of-type(1)>span{
    color: #ff5340;
 }
 .cb1 >p:nth-of-type(3){
    float: right;
    margin: 0.16rem 0.05rem 0;
    font-size: 0.16rem;
    width: 0.2rem;
    height: 0.2rem;
    background-color:#3190e8;
   text-align: center;
   line-height: 0.2rem;
   border-radius: 50%;
 }
.cb1 >p:nth-of-type(2){
    float: right;
    margin: 0.2rem 0.2rem 0 0.05rem;
    font-size: 0.13rem;
 }
 .ul1{
     width: 100%;
     float: left;
     
 }



 .ulBox1 li{
      width: 95%;
      height: 0.7rem;
      margin: 0.1rem auto;
      border-top: 0.06rem dotted #ff5340;
      background-color: #ffffff;
      border-radius: 0.07rem;
            }


.monny{
    width: 1rem;
    height: 69%;
     text-align: center;
     border-right: 0.02rem dotted #666;
     float: left;
     margin-top: 0.06rem;
}
.monny > p{
     font-size: 0.16rem;
     margin: 0.03rem;
     color: #ff5340;
}
.monny > p span{
     font-size: 0.31rem;
}
.monny h6{
    color:#666; 
}
.text{
    width: 50%;
    height: 0.6rem;
    float:left;
    margin-left: 0.3rem;
    font-size: 0.12rem;
    margin-top:0.07rem; 
    position: relative;
}
.text p{
    display: inline-block;
}
.text> p:nth-of-type(1),.text >p:nth-of-type(2){
    color: #666;
}
.text >p:nth-of-type(3){
    float: right;
    color: #ff5340;
    position: absolute;
   top: 0.02rem;
   right: 0.06rem;
}
.ul1 > p:nth-of-type(1){    
    font-size: 0.12rem;
    padding-left:0.13rem; 
    font: #666;
} 
.ul1 > p:nth-of-type(2){
    font-size: 0.14rem;
    padding: 0.7rem 0;
    text-align: center;
}
.ul1 > p:nth-of-type(2) >img{
    width: 0.06rem;
    margin-left: 0.06rem;
}
.twoBtn{
    clear: both;
    width: 100%;
    height: 0.5rem;
    background-color: #ffffff;
    position: fixed;
    top: 78%;
}
.twoBtn > p{
     width: 50%;
     border-right: 0.01rem solid #f2f2f2;
     height: 100%;
     line-height:0.5rem;
     text-align: center;
     float: left;
     box-sizing: border-box;
     border-radius:0.05rem; 
}
.twoBtn >p:nth-of-type(2){
      border-left: 0.01rem solid #f2f2f2;
}
</style>
<script>
  export default{
      name:"hongbao",
       methods:{   
          DH(){
             this.$router.push({
                 name:"DHhB"
             })
                 
         },
         Sm(){
             this.$router.push({
                 name:"Hbsm"
             })
         },
         back(){
             this.$router.back();
         },
         Tuijian(){
             this.$router.push({
                 name:"fivemonny"
             });
         },
         djj(){
             this.$router.push({
                 name:"djj"
             })
         },
         LSHB(){
             this.$router.push({
                 name:"LSHB"
             })
         }
      }
  }  
</script>