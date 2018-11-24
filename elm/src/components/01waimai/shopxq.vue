<template>
	<div class="shopxq">
		<div class="xqtop">
			<img :src="img" @click="back()"/>
			<p>商家详情</p>	
		</div>
		<div class="bukong"></div>
		<div class="xqctn">
			<p>活动与属性</p>
			<li v-for="value in shopxq.supports">
				<span>{{value.icon_name}}</span>
				{{value.description}}(APP专享)
			</li>
		</div>
		<div class="ship">
			<div class="spjd">
				食品监督安全公示
				<span @click="qyxq()">企业认证详情></span>
			</div>
			<div class="sdctn">
				<span><li>☺</li></span>
				<!---->
				<p>监督检查结果:<span>良好</span></p>
				<li>检查日期:</li>
			</div>
		</div>
		<div class="sjxx">
			<p>商家信息</p>
			<span>{{shopxq.name}}</span>
			<li>地址:{{shopxq.address}}</li>
			<ul>营业时间:{{shopxq.opening_hours}}</ul>
			<div class="yy-cy">
				<p @click="mbtu()">
					营业执照
					<span>›</span>
				</p>
				<li @click="mbtu()">
					餐饮服务许可证
					<span>›</span>
				</li>
			</div>
		</div>
		<div @click="mbtus()" class="mb-tu"><img src="https://elm.cangdu.org/img/160e91e0a9f2163.png"/></div>
	</div>
</template>

<script>
import { Loading } from 'element-ui';
	let img03 = require('../../../static/img/back.png');
	export default {
		name: "shopxq",
		data() {
			return {
				shopxq:{},
				img:img03,
			}
		},
		created(){		
			let loadingInstance1 = Loading.service({ fullscreen: true,text:'加载中...' });
			
			let shopxqs = "https://elm.cangdu.org/shopping/restaurant/1";
			this.$http.get(shopxqs).then(
				(response) => { loadingInstance1.close();
					this.shopxq = response.data;
//					console.log(this.shopxq);
			});
		},
		methods:{
			back(){
				this.$router.push({name:"wm2shop"});
			},
			mbtu(){
				$(".mb-tu").css("display","block");
			},
			mbtus(){
				$(".mb-tu").css("display","none");
			},
			qyxq(){
				this.$router.push({name:"qyxq"});
			}
		}
	}
</script>

<style scoped="scoped">
	.shopxq{
		width:100%;
		background-color:rgb(242,242,242);
	}
	.xqtop{
		width: 100%;
		height: 0.45rem;
		background-color: #3190E8;
		position: fixed;
		top: 0;
	}
	.xqtop>p{
		width: 94%;
		line-height: 0.45rem;
		color: white;
		text-align: center;
		font-weight: bold;
	}
	.xqtop>img{
		float: left;
		margin-top:0.13rem;
	}
	.bukong{
		height: 0.45rem;
	}
	.xqctn{
		width:100%;
		margin-top: 0.12rem;
		background-color: white;
	}
	.xqctn>p{
		line-height:0.4rem;
		padding-left:0.1rem;
		border-bottom:0.01rem solid gainsboro;
	}
	.xqctn>li{
		line-height:0.3rem;
		font-size:0.16rem;
		padding-left:0.1rem;
		margin-top:0.1rem;
	}
	.xqctn>li>span{
		display: inline-block;
		width:0.22rem;
		height: 0.22rem;
		line-height:0.22rem;
		text-align: center;
		background-color: darkgrey;
		color: white;
		border-radius:0.05rem ;
		margin-right:0.1rem;
	}
	/*---*/
	.ship{
		width:100%;
		margin-top:0.1rem;
		background-color: white;
	}
	.spjd{
		padding-left: 0.1rem;
		line-height:0.45rem;
		border-bottom:0.01rem solid gainsboro;
	}
	.spjd>span{
		float: right;
		font-size:0.15rem;
		color: darkgrey;
		margin-right:0.15rem;
	}
	.sdctn{
		width:100%;
		overflow: hidden;
		/*border-bottom:0.01rem solid gainsboro;*/
	}
	.sdctn>span{
		display: inline-block;
		width: 0.5rem;
		height: 0.5rem;
		line-height:0.3rem;
		font-size:0.85rem;
		text-align: center;
		border-radius:0.5rem ;
		overflow: hidden;
		color: white;
		background-color:lawngreen;
		position: relative;
		float: left;
		margin-top:0.15rem ;
		margin-left:0.1rem ;
	}
	.sdctn>span>li{
		position: absolute;
		left: -0.18rem;
		top: -0.03rem;
	}
	.sdctn>p{
		padding-left:0.7rem;
		margin-top:0.2rem;
		font-size: 0.13rem;
		line-height: 0.35rem;
	}
	.sdctn>p>span{
		color: greenyellow;
		padding-left:0.1rem ;
	}
	.sdctn>li{
		padding-left:0.7rem;
		font-size: 0.13rem;
		line-height: 0.35rem;
		margin-bottom:0.2rem;
	}
	/*----*/
	.sjxx{
		width:100%;
		margin-top:0.1rem;
		background-color: white;
	}
	.sjxx>p{
		margin-left: 0.1rem;
		line-height:0.45rem;
		border-bottom:0.01rem solid gainsboro;
	}
	.sjxx>span{
		display: block;
	}
	.sjxx>ul,.sjxx>li,.sjxx>span{
		margin-left: 0.1rem;
		line-height:0.5rem;
		font-size:0.14rem;
		border-bottom:0.01rem solid gainsboro;
	}
	.yy-cy{
		width:100%;
	}
	.yy-cy>p,.yy-cy>li{
		margin-left: 0.1rem;
		line-height:0.5rem;
		font-size:0.14rem;
		border-bottom:0.01rem solid gainsboro;
	}
	.yy-cy>p>span,.yy-cy>li>span{
		float: right;
		font-size:0.4rem;
		margin-top:-0.05rem;
		margin-right:0.1rem;
		color: darkgrey;
	}
	.mb-tu{
		width:100%;
		height:100%;
		position: fixed;
		z-index: 5;
		top: 0;
		background-color: rgba(0,0,0,0.6);
		display: none;
	}
	.mb-tu>img{
		position: absolute;
		top: 50%;
		left:45%;
	}
</style>