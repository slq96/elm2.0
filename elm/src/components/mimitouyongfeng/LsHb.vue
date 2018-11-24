<template>
    <div class="LShbtop">
       <div class="topmy">
      <img @click="back()" :src="jian" alt="">
      <h3>历史红包</h3>
       </div>
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
                    <p>已经过期<span></span></p>
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
                    <p>已经过期<span></span></p>
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
                    <p>已经过期<span></span></p>
                </div>                   
           </li>
           <li>
        <div class="monny">
           <p>¥<span>1</span>.0</p>
           <h6>满20元可用</h6>
        </div>
                <div class="text">
                    <h3>分享红包</h3>
                    <p>2017-05-23到期</p>
                    <p>限收货手机号为13681711254</p>
                    <p>已经过期<span></span></p>
                </div>                   
           </li>
           <!--  -->
           <li>
        <div class="monny">
           <p>¥<span>1</span>.0</p>
           <h6>满20元可用</h6>
        </div>
                <div class="text">
                    <h3>分享红包</h3>
                    <p>2017-05-23到期</p>
                    <p>限收货手机号为13681711254</p>
                    <p>已经过期<span></span></p>
                </div>                   
           </li>
           <!--  -->
           <li>
        <div class="monny">
           <p>¥<span>1</span>.0</p>
           <h6>满20元可用</h6>
        </div>
                <div class="text">
                    <h3>分享红包</h3>
                    <p>2017-05-23到期</p>
                    <p>限收货手机号为13681711254</p>
                    <p>已经过期<span></span></p>
                </div>                   
           </li>
           <!--  -->
           <li>
        <div class="monny">
           <p>¥<span>1</span>.0</p>
           <h6>满20元可用</h6>
        </div>
                <div class="text">
                    <h3>分享红包</h3>
                    <p>2017-05-23到期</p>
                    <p>限收货手机号为13681711254</p>
                    <p>已经过期<span></span></p>
                </div>                   
           </li>
           <!--  -->
           <li>
        <div class="monny">
           <p>¥<span>1</span>.0</p>
           <h6>满20元可用</h6>
        </div>
                <div class="text">
                    <h3>分享红包</h3>
                    <p>2017-05-23到期</p>
                    <p>限收货手机号为13681711254</p>
                    <p>已经过期<span></span></p>
                </div>                   
           </li>
           <!--  -->
           <li>
        <div class="monny">
           <p>¥<span>1</span>.0</p>
           <h6>满20元可用</h6>
        </div>
                <div class="text">
                    <h3>分享红包</h3>
                    <p>2017-05-23到期</p>
                    <p>限收货手机号为13681711254</p>
                    <p>已经过期<span></span></p>
                </div>                   
           </li>
           <!--  -->
           <li>
        <div class="monny">
           <p>¥<span>1</span>.0</p>
           <h6>满20元可用</h6>
        </div>
                <div class="text">
                    <h3>分享红包</h3>
                    <p>2017-05-23到期</p>
                    <p>限收货手机号为13681711254</p>
                    <p>已经过期<span></span></p>
                </div>                   
           </li>
       </ul>
       <p>商品类:快餐便当,特色菜列,小吃夜宵,甜品饮品,异国料理</p>
       <p>查看历史红包<img :src="jianyou" alt=""></p>
     </div>



    </div>
</template>
<style scoped>
.LShbtop{
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
.ul1{
     width: 100%;
     float: left;
     
 }



 .ulBox1 li{
      width: 95%;
      height: 0.7rem;
      margin: 0.1rem auto;
      border-top: 0.06rem dotted #f2f2f2;
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
     color: #f2f2f2;
}
.monny > p span{
     font-size: 0.31rem;
}
.monny h6{
    color:#f2f2f2; 
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
    color: #f2f2f2;
}
.text >p:nth-of-type(3){
    float: right;
    color: #f2f2f2;
    position: absolute;
   top: 0.02rem;
   right: 0.06rem;
}
.ul1 > p:nth-of-type(1){    
    font-size: 0.12rem;
    padding-left:0.13rem; 
    font:#f2f2f2;
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
import jian from '../../../static/imgs/jian.png'
import jianyou from '../../../static/imgs/jianyou.png'

     export default{
         name:"LSHB",
         data(){
             return{
                 jian,
                 jianyou
             }
         },
         methods:{
             back(){
                 this.$router.back();
             }
         }
     }
</script>