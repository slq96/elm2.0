<template>
<div id="wrap">
	<div class="top1">
					<img :src="imgback" alt="" />
					<h2>订单列表</h2>
</div>
<ul class="dd-ul">
			<li>
				<img :src="imga1" alt="" />
				<div class="dd">
				<div class="div1" @click="tiao()">
					<h3><span>卧龙 <img :src='imgjright'/>
					</span>等待支付</h3>
					<p>2018-11-22 20:02</p>
				</div>
				<div class="div2" @click="tiao()">
					<p><span>ss222</span>等<span>2</span>件商品<span>￥4565.00</span></p>
				</div>
				<div class="div3">
					<p>去支付<span>(还剩2分14秒)</span></p>
					<span id="dan">再来一单</span>
						
				</div>
				</div>
			</li>
			
		</ul>
</div>
</template>

<script>
let imgback = require('../../../static/img/back.png');
let imgjright = require('../../../static/img/jright.png');

	export default {
		name:'dingdan',
		data(){
return{
	imgback,
	imgjright,
	imga1:require("../../../static/img/zhun.png")
}
		}	,
		methods:{
			tiao(){
				
this.$router.push({name:'ddxq'})
			}
		}
		
	}
</script>

<style scoped>
#wrap {
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
}

.top1 {
  text-align: center;
  width: 100%;
  height: 0.6rem;
  color: white;
  line-height: 0.7rem;
  position: relative;
  background-color: #3190e8;
}

.top1 img {
  width: 6%;
  position: absolute;
  left: 0.1rem;
  top: 0.2rem;
}


.dd-ul,.dd-ul li{
	width: 100%;
background-color: #fff;
	display: flex;
	/*flex-wrap: wrap;*/
	justify-content: space-between;
	
}
.dd-ul>li>img{
	width: 0.8rem;
	height: 0.8rem;
	margin: 0.1rem;
	margin-bottom: 0.3rem;
}
.dd{
	width: 80%;
	
	margin-top: 0.1rem;
	padding-right: 0.1rem;
}
.dd div{
	width: 100%;
	white-space: nowrap;
	
	
}
.div1 h3 img{
	width: 0.1rem;
	height: 0.15rem;
}
.div1 h3{
	height: 0.3rem;
	display: flex;
	color: #3190E8;
	/*flex-wrap: wrap;*/
	justify-content: space-between;
}
.div1 h3 span{
	color: #666;
}
.div1 p{
	color: #999;
	font-size: 0.14rem;
}
.div2 p,.div3 p{
	border-top: solid 0.01rem #e4e4e4;
	margin-top: 0.1rem;
	height: 0.2rem;
	padding:0.1rem 0;
}
.div3 p{
	text-align: right;
}
.div2 p span:nth-of-type(1){
	margin-right: 0.1rem;
}
.div2 p span:nth-of-type(3){
	float: right;
	margin-right:0.1rem;
	    color: #f60;
    font-weight: 700;
}
#dan{
	
	float: right;
	
	padding: 0.05rem;
	font-size: 0.14rem;
	color: #3190e8;
	border: 0.01rem solid #3190e8 ;
}

</style>