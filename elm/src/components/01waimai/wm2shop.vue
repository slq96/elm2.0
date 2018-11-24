<template>
	<div class="inshop">
		<div class="inshopTop">
			<ul class="ul2">
				<img :src="this.$store.state.shop.image_url" />
				<li>
					<img @click="backmain()" :src="imgjian" class="img-l"/>
					<img @click="shopxq()" :src="imgjian" class="img-r"/>
					<img class="img1" :src="this.$store.state.shop.image_url" />
					<p class="xg">{{this.$store.state.shop.name}}</p>
					<span class="qs">商家配送/分钟送达/配送费约￥{{this.$store.state.shop.float_delivery_fee}}</span>
					<p class="gg">公告: {{this.$store.state.shop.promotion_info}}</p>
				</li>
			</ul>
			<div class="sp-pj">
				<p @click="kanfood()">商品</p>
				<span @click="kanpj()">评价</span>
				<div class="xian"></div>
			</div>
		</div>
		<div class="bukong"></div>
		<router-view></router-view>
	</div>
</template>

<script>
	let img01 = require('../../../static/img/back.png')
	export default {
		name: 'wm2shop',
		data() {
			return {
				imgjian:img01,
			}
		},
		created() {
			
			
		},
		methods:{
			backmain(){
				this.$router.push({name:"waimai"});
			},
			kanfood(){
				$(".sp-pj>p").css("color","#3190E8");
				$(".sp-pj>span").css("color","black");
				$(".xian").css("left","0.77rem");
				this.$router.push({name:"menus"});
			},
			kanpj(){
				$(".sp-pj>p").css("color","black");
				$(".sp-pj>span").css("color","#3190E8");
				$(".xian").css("left","2.65rem");
				this.$router.push({name:"pingjia"});
			},
			shopxq(){
				this.$router.push({name:"shopxq"});				
			}
		}
	}
</script>

<style scoped="scoped">
	.inshop,.inshopTop,.ul2{
		width:100%;
	}
	.inshopTop{
		position: fixed;
		background-color: white;
		top: 0;
		z-index: 10;
	}
	.ul2{
		height: 1rem;
		overflow: hidden;
		position: relative;
	}
	.ul2>img{
		width: 100%;
		filter: blur(10px);
	}
	.ul2>li{
		width: 100%;
		height:1rem;
		color: white;
		position: relative;
		background-color:rgba(0,0,0,0.15);
		position: absolute;
		top: 0;
	}
	.ul2>li>.img1{
		width:0.7rem;
		position: absolute;
		top:0.1rem;
		left: 0.1rem;
	}
	.img-l{
		position: absolute;
		top: 0.05rem;
		left: 0.03rem;
		z-index: 2;
	}
	.img-r{
		position: absolute;
		top: 0.4rem;
		right: 0.03rem;
		transform:rotateZ(180deg);
		z-index: 2;
	}
	.xg{
		position: absolute;
		top:0.15rem;
		left: 0.9rem;
		font-weight: bold;
	}
	.qs{
		position: absolute;
		top:0.45rem;
		left: 0.9rem;
		font-size:0.13rem;
	}
	.gg{
		width:2.6rem;
		position: absolute;
		top:0.70rem;
		font-size:0.13rem;
		left: 0.9rem;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	/*----*/
	.sp-pj{
		width: 100%;
		height: 0.55rem;
		text-align: center;
		font-size:0.16rem;
		position: relative;
		background-color: white;
		border-bottom:1px solid gainsboro;
	}
	.sp-pj>p{
		width:50%;
		color: #3190E8;
		line-height: 0.55rem;
		float: left;
	}
	.sp-pj>span{
		width:50%;
		line-height: 0.55rem;
		float: left;
	}
	.xian{
		width: 0.32rem;
		height: 0;
		border:1px solid blue;
		position: absolute;
		top: 0.4rem;
		left: 0.77rem;
	}
	/*----*/
	.bukong{
		height:1.55rem ;
	}
</style>