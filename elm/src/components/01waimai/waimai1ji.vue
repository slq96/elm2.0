<template>
	<div class="waimai">
		<div class="wmtop">
			<span @click="qusousuo()">ele.me</span> 
			<p @click="login()" v-if="bl">登录|注册</p>
			<img class="yhzx" @click="my()" :src="src2" v-else/>
			<li v-if="this.$store.state.address" @click="huicity()">{{this.$store.state.address}}</li>
			<li @click="huicity()" v-else>选择地址</li>
		</div>
		<div class="bukong"></div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<ul @click="xqone()" class="ul1">
						<li v-for="(value,index) in spfl" v-if="index<8">
							<img :src="value.image_url" />
							<p>{{value.title}}</p>
						</li>
					</ul>
				</div>
				<div class="swiper-slide">
					<ul class="ul1">
						<li v-for="(value,index) in spfl" v-if="index>7">
							<img :src="value.image_url" />
							<p>{{value.title}}</p>
						</li>
					</ul>
				</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
			<div class="swiper-pagination"></div>
		</div>
		<div class="maishop">
			<p>附近商家</p>
			<ul class="ul2">
				<li @click="jindian(value)" v-for="(value,index) in shop">
					<img :src="value.image_url" />
					<span class="pp">品牌</span>
					<p class="xg">{{value.name}}</p>
					<span class="bz">保准票</span>
					<span class="fn">蜂鸟专送</span>
					<span class="zs">准时达</span>
					<span class="jl">{{value.distance}}
						<span class="sj">/{{value.order_lead_time}}</span>
					</span>					
					<span class="qs">￥{{value.float_minimum_order_amount}}起送/配送费约￥{{value.float_delivery_fee}}</span>
					<span class="ys">月售{{value.recent_order_num}}单</span>
					<span class="pf">★★★ {{value.rating}}</span>
				</li>
			</ul>
		</div>

	</div>

</template>

<script>
	import Swiper from 'swiper';
	let img02 = require('../../../static/img/wd1.png')
	export default {
		name: 'waimai',
		data() {
			return {
				spfl: [],
				bl: true,
				userid: "",
				src2: img02,
				dizhi: "",
				shop: "",
			}
		},
		created() {
			let apisp = "https://elm.cangdu.org/v2/index_entry";
			this.$http.get(apisp).then(
				(response) => {
					for(let i = 0; i < response.data.length; i++) {
						response.data[i].image_url = "https://fuss10.elemecdn.com" + response.data[i].image_url;
					}
					this.spfl = response.data;
			});
			//			https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762
			let apishop = "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762";
			this.$http.get(apishop).then(
				(response) => {
					for(let i = 0; i < response.data.length; i++) {
						response.data[i].image_url = "//elm.cangdu.org/img/" + response.data[i].image_path;
					}
					this.shop = response.data;
//					console.log(this.shop);
				});
			//------
			//获取用户信息
				if(this.$store.state.userxx.user_id==undefined){
					this.bl=true;
				}else{	
					this.bl=false;
				}
		},
		methods: {
			login() {
				this.$router.push({
					name: "loginzhuce"
				});
			},
			my() {
				this.$router.push({
					name: "my",
					params: {
						pID: this.$route.params.pID
					}
				});
			},
			jindian(value){
				this.$store.state.shop = value;
				this.$router.push({name: "wm2shop"});
			},
			xqone(){
				this.$router.push({name:"xqone"});
			},
			huicity(){
				this.$router.push({name:"chooseCity"});
			},
			qusousuo(){
				this.$router.push({name:"sousuo"});
			}
		},
		mounted() {
			new Swiper('.swiper-container', {
//				 loop: true,
				 pagination: ".swiper-pagination",
				 observer:true,
				 observeParents:true,
			})
		}
	}
</script>

<style scoped>
	.waimai {
		width: 100%;
		height: 100%;
		overflow-x: hidden;
	}
	
	.wmtop {
		width: 100%;
		height: 0.45rem;
		min-height: 25px;
		background-color: #3190e8;
		color: white;
		font-size: 0.15rem;
		line-height: 0.52rem;
		text-align: center;
		position: fixed;
		top: 0;
		z-index: 3;
	}
	.waimai::-webkit-scrollbar{
       	display: none;
	}
	.wmtop>span {
		font-size: 0.16rem;
		float: left;
		margin-left: 0.1rem;
	}
	.wmtop>li{
		width:40%;
		text-align: center;
		list-style: none;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		position: absolute;
		left:30%;
	}
	.wmtop>p {
		float: right;
		margin-right: 0.1rem;
	}
	
	.bukong {
		height: 0.45rem;
	}
	
	.yhzx {
		width: 0.2rem;
		float: right;
		margin-top: 0.12rem;
		margin-right: 0.1rem;
	}
	/*------*/
	
	.swiper-container {
		width: 100%;
		border-bottom: 1px solid gainsboro;
	}
	
	.swiper-wrapper>.swiper-slide>ul {
		width: 100%;
		height: 2.2rem;
		display: inline-block;
	}
	
	.swiper-wrapper>.swiper-slide>ul>li {
		width: 25%;
		height: 1rem;
		font-size: 0.12rem;
		text-align: center;
		color: rgb(10, 10, 10);
		float: left;
	}
	
	.swiper-wrapper>.swiper-slide>ul>li>img {
		width: 50%;
		margin-top: 0.13rem;
		margin-bottom: 0.1rem;
	}
	/*--------*/
	.maishop{
		width:100%;
		margin-top:0.1rem;
		border-top:0.01rem solid gainsboro ;
	}
	.maishop>p{
		width: 100%;
		font-size:0.12rem;
		color:grey;
		margin-left: 0.1rem;
		line-height:0.3rem;
	}
	.ul2{
		width: 100%;
	}
	.ul2>li{
		width: 100%;
		height: 1.4rem;
		position: relative;
		font-size:0.12rem;
		border-bottom: 1px solid gainsboro;		
	}
	.ul2>li>img{
		width: 0.7rem;
		margin-left: 0.1rem;
		margin-top: 0.15rem;
	}
	.pp{
		background-color: gold;
		position: absolute;
		top: 0.17rem;
		left: 0.9rem;
	}
	.xg{
		position: absolute;
		top: 0.17rem;
		left: 1.25rem;
	}
	.bz{
		position: absolute;
		top: 0.17rem;
		right: 0.1rem;
	}
	.pf{
		position: absolute;
		top: 0.5rem;
		left: 0.9rem;
		color: #FF0000;
	}
	.ys{
		position: absolute;
		top: 0.5rem;
		left: 1.6rem;
	}
	.fn{
		padding:0.03rem;
		position: absolute;
		top: 0.48rem;
		right: 0.62rem;
		color: white;
		background-color: #3190E8;
	}
	.zs{
		position: absolute;
		top: 0.48rem;
		right: 0.1rem;
		color: #0000FF;
		padding:0.02rem;
		border:0.01rem solid blue;
	}
	.qs{
		display: block;
		width:1rem;
		position: absolute;
		top: 0.85rem;
		left: 0.9rem;
	}
	.jl{
		display: block;
		width:1.6rem;
		position: absolute;
		top: 0.85rem;
		left: 2.0rem;
	}
	.sj{
		color: #3190E8;
	}
</style>