<template>
	<div class="elmsy">
		<router-view></router-view>
		<div class="footer">
			<li><img :src="img1s" @click="qwm()"/><p>外卖</p></li>
			<li><img :src="img2s" @click="qss()"/><p>搜索</p></li>
			<li><img :src="img3s" @click="qdd()"/><p>订单</p></li>
			<li><img :src="img4s" @click="qwd()"/><p>我的</p></li>
		</div>
	</div>
</template>

<script>
	let imgs1 = require('../../../static/img/wm1.png')
	let imgs2 = require('../../../static/img/wm2.png')
	let imgs3 = require('../../../static/img/ss1.png')
	let imgs4 = require('../../../static/img/ss2.png')
	let imgs5 = require('../../../static/img/dd1.png')
	let imgs6 = require('../../../static/img/dd2.png')
	let imgs7 = require('../../../static/img/wd1.png')
	let imgs8 = require('../../../static/img/wd2.png')
	export default {
		name:'footers',	
		data(){
			return{
				img1s:imgs2,
				img2s:imgs3,
				img3s:imgs5,
				img4s:imgs7
			}
		},
		created(){
			
		},
		methods:{
			qwm(){
				this.$router.push({name:"waimai"});
				this.tu(1,0,0,0);
			},
			qss(){
				this.$router.push({name:"sousuo"});
				this.tu(0,1,0,0);
			},
			qdd(){
				this.$router.push({name:"dingdan"});
				this.tu(0,0,1,0);
			},
			qwd(){
				this.$router.push({name:"my"});
				this.tu(0,0,0,1);
			},
			tu(a,b,c,d){
				if(a==0){
					this.img1s=imgs1;
				}else{
					this.img1s=imgs2;
				}
				if(b==0){
					this.img2s=imgs3;
				}else{
					this.img2s=imgs4;
				}
				if(c==0){
					this.img3s=imgs5;
				}else{
					this.img3s=imgs6;
				}
				if(d==0){
					this.img4s=imgs7;
				}else{
					this.img4s=imgs8;
				}
			}
		}
	}
</script>

<style scoped>
	.elmsy{
		width:100%;
		height:100%;
	}
	.footer{
		width:100%;		
		position: fixed;
		bottom: 0;
		background-color: white;
		border-top:1px solid gainsboro;
	}
	.footer>li{
		width: 25%;
		height: 0.5rem;
		text-align: center;
		float: left;
		font-size:0.12rem;
	}
	.footer>li>img{
		width:23%;
		margin-top:0.08rem;
	}
	.footer>li>p{
		line-height:0.2rem;
	}
</style>