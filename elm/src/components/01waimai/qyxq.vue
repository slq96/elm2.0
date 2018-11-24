<template>
	<div class="sjd">
		<div class="xqtop">
			<img :src="imgs" @click="back()"/>
			<p>食品监督安全公示</p>	
		</div>
		<div class="bukong"></div>
		<div class="ship">
			<div class="spjd">
				食品监督安全公示
			</div>
			<div class="sdctn">
				<span><li>☺</li></span>
				<!---->
				<p>监督检查结果:<span>良好</span></p>
				<li>检查日期:</li>
			</div>
		</div>
		<div class="gsdj">
			<p>工商登记信息</p>
			<li>企业名称</li>
			<li>工商执照注册号</li>
			<li>注册资本</li>
			<li>注册地址</li>
			<li>属地监管所</li>
			<li>法定代表人</li>
			<li>经营范围</li>
		</div>
		<div class="gsdj">
			<p>餐饮许可证</p>
			<li>营业范围</li>
			<li>许可证有效期</li>
			<li>许可证号</li>
			<li>发证时间</li>
			<li>发证机关</li>
		</div>
		<div class="xkzs">
			<p>许可证书</p>
		</div>
	</div>
</template>

<script>
	let img03 = require('../../../static/img/back.png');
	export default {
		name:'qyxq',
		data(){
			return{
				imgs:img03,
			}
		},
		methods:{
			back(){
				this.$router.push({name:"shopxq"});
			}
		}
	}
</script>

<style scoped="scoped">
	.sjd{
		width:100%;
		background-color:rgb(242,242,242);
	}
	.xqtop{
		width: 100%;
		height: 0.45rem;
		background-color: #3190E8;
		position: fixed;
		top: 0;
		z-index: 10;
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
	/*-----*/
	.gsdj{
		width:100%;
		margin-top:0.1rem ;
		background-color: white;
	}
	.gsdj>p{
		line-height:0.45rem;
		padding-left: 0.1rem;
		border-bottom:0.01rem solid gainsboro;
	}
	.gsdj>li{
		font-size: 0.12rem;
		padding-left: 0.1rem;
		line-height:0.35rem;
	}
	.xkzs{
		margin-top: 0.1rem;
		padding-left: 0.1rem;
		background-color: white;
		line-height: 0.35rem;
	}
</style>