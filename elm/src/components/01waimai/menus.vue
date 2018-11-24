<template>
	<!--
    	作者：1379129950@qq.com
    	时间：2018-11-21
    	描述：
    -->
	<div class="menus">
		<div class="menus-ml">
			<li class="lis" @click="maodian(index)" v-for="(value,index) in food">				
				{{value.name}}
				<div class="fennum">{{fennum[index]}}</div>
			</li>
			<div class="bukong"></div>
			<div class="shuxian"></div>
		</div>
		<div class="menus-nr">
			<ul v-for="(value,index) in food">
				<div class="tit">
					<p :id="['md'+index]">{{value.name}}</p>
					{{value.description}}
					<span @click="sd(index)">•••</span>
					<div class="h3d">
						<span>{{value.name}}</span>
						{{value.description}}
						<p></p>
					</div>
				</div>
				<li v-for="(val,ind) in value.foods">
					<img :src="['//elm.cangdu.org/img/'+val.image_path]" />
					<div class="you">
						<span class="nm">{{val.name}}</span>
						<p class="lx" v-if="val.description">{{val.description}}</p><br />
						<span class="ys">月售{{val.month_sales}}份</span>
						<span class="hp">好评率{{val.satisfy_rate}}%</span>
						<br v-if="val.activity!=null" />
						<span class="yh" v-if="val.activity!=null">{{val.activity.image_text}}</span><br /><br />
						<p class="qian">￥20
							<span v-if="val.specifications.length!=0">起</span>
						</p>
						<div class="jia-n">
							<p class="jian" @click="jian(index,ind)">-</p>
							<span>{{num[index][ind]}}</span>
							<p @click="showgg()" class="jia gg" v-if="val.specifications.length!=0">选{{val.specifications[0].name}}</p>
							<p v-else class="jia" @click="jia(index,ind)">+</p>
						</div>
						<p class="xin" v-if="val.attributes.length>0&&val.attributes[0]!=null&&val.attributes[0].icon_color=='5ec452'">{{val.attributes[0].icon_name}}品</p>
						<p class="xin" v-if="val.attributes.length==2&&val.attributes[0]!=null&&val.attributes[1].icon_color=='5ec452'">{{val.attributes[1].icon_name}}品</p>
						<p class="zhaopai" v-if="val.attributes.length>0&&val.attributes[0]!=null&&val.attributes[0].icon_color=='f07373'">{{val.attributes[0].icon_name}}</p>
						<p class="zhaopai" v-if="val.attributes.length==2&&val.attributes[0]!=null&&val.attributes[1].icon_color=='f07373'">{{val.attributes[1].icon_name}}</p>
					</div>
					<div class="jiadh">
						
					</div>
				</li>
				<div class="bukong"></div>
			</ul>
		</div>
		<div class="shopCart">
			<div class="yuancar">
				<div class="allnum">
					{{allnum}}
					<div class="lanyuan"></div>
				</div>
			</div>
			<p>￥{{qian}}.00</p>
			<span>配送费￥5</span>
			<div v-if="qian<20" class="qisong">还差￥20起送</div>
			<div v-else class="jiesuan" @click="fukuan()">去结算</div>
		</div>
		<div class="mb-gg">
			<div class="xgg">
				<h5>1</h5>
				<p>规格</p>
				<div class="xgg-gg">
					<li>adfdaf</li>
					<li>adfsafasdf</li>
				</div>
				<li>￥20
					<span>加入购物车</span>
				</li>
				<div @click="cha()" class="cha">
					×
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "menus",
		data() {
			return {
				food: {},
				num: [],
				allnum:0,
				qian:0,
				fennum:[],
				lis:null,
				sds007:[],
				x:0,
				y:0,
				aa:0,
				v:0,
				t:0,
				xv:0
			}
		},
		created() {
			let apifood = "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1";
			this.$http.get(apifood).then(
				(response) => {
					this.food = response.data;
					for(let i = 0; i < this.food.length; i++) {
						this.num.push([]);
						this.fennum.push(0);
						for(let j = 0; j < this.food[i].foods.length; j++) {
							this.num[i].push(0);
						}
					}
				});
		},
		methods: {
			maodian(index) {
				var lis = document.getElementsByClassName("lis");
				for(var i = 0; i < lis.length; i++) {
					lis[i].style.backgroundColor = "rgb(242,242,242)";
					lis[i].style.fontWeight = "100";
				}
				lis[index].style.backgroundColor = "white";
				lis[index].style.fontWeight = "bolder";
				$(".shuxian").css("top", index * 0.64 + "rem");
				let ida = "#md" + index;
				document.querySelector(ida).scrollIntoView(true);
			},
			jian(a, b) {
				if(this.num[a][b]>0){
					this.allnum--;
				}
				this.num[a][b]--;				
				if(this.allnum <= 0) {
					this.allnum = 0;										
				}
				this.sqian();
				if(this.num[a][b] <= 0) {
					this.num[a][b] = 0;
					$(".menus-nr>ul:eq("+a+")>li:eq("+b+")>.you>.jia-n>.jian").slideLeftHide(500);
					$(".menus-nr>ul:eq("+a+")>li:eq("+b+")>.you>.jia-n>span").hide(0);
				}
				if(this.allnum<=0){
					$(".allnum").css("display","none");
					$(".lanyuan").css("background-color","black");
				}
				this.fennum1(a);
				this.yincang();
			},
			jia(a, b) {
				this.num[a][b]++;
				this.allnum++;
				$(".jian").css("visibility","visible");
				$(".jia-n>span").css("visibility","visible");
				if(this.num[a][b] > 0) {
					$(".menus-nr>ul:eq("+a+")>li:eq("+b+")>.you>.jia-n>.jian").slideLeftShow(500);
					$(".menus-nr>ul:eq("+a+")>li:eq("+b+")>.you>.jia-n>span").show(500);
				}
				if(this.allnum>0){
					$(".allnum").css("display","block");
					$(".lanyuan").css("background-color","#3190E8");
				}
				this.sqian();
				this.fennum1(a);
				this.yincang();
//				this.jiadh(a,b);
			},
			yincang(){
				for(let i=0;i<$(".menus-nr>ul").length;i++){
					for(let j=0;j<$(".menus-nr>ul:eq("+i+")>li").length;j++){
						if(this.num[i][j]==0){
							$(".menus-nr>ul:eq("+i+")>li:eq("+j+")>.you>.jia-n>.jian").hide(0);
							$(".menus-nr>ul:eq("+i+")>li:eq("+j+")>.you>.jia-n>span").hide(0);
						}						
					}
				}
				this.$forceUpdate();
			},
			sqian(){
				if(this.allnum>0){
					this.qian=this.allnum*20;
				}else{
					this.qian=0;
				}
			},
			fennum1(a){
				this.fennum[a]=0;
				for(let j=0;j<$(".menus-nr>ul:eq("+a+")>li").length;j++){
					this.fennum[a]+=this.num[a][j];
				}
				this.lis = document.getElementsByClassName("fennum");
				if (this.fennum[a]>0) {
					this.lis[a].style.display = "block";
				}else{
					$(".fennum:eq("+a+")").css("display","none");
				}				
			},
			sd(a){
				if (this.sds007.length==0) {
					for (let i=0;i<$(".h3d").length;i++) {
						this.sds007.push(1);
					}
				}
				if (this.sds007[a]==1) {
					this.sds007[a]=0;
					$(".h3d:eq("+a+")").css("display","block");
				} else{
					this.sds007[a]=1;
					$(".h3d:eq("+a+")").css("display","none");
				}				
			},
			cha(){
				$(".mb-gg").css("display","none");
			},
			showgg(){
				$(".mb-gg").css("display","block");
			},
			fukuan(){
				this.$router.push({name:"ddxq"});
			},
			jiadh(a,b){
				$(".menus-nr>ul:eq("+a+")>li:eq("+b+")>.jiadh").css("display","block");
				this.y = $(".lanyuan").offset().top-$(".menus-nr>ul:eq("+a+")>li:eq("+b+")>.jiadh").offset().top;
				this.x = $(".menus-nr>ul:eq("+a+")>li:eq("+b+")>.jiadh").offset().left-$(".lanyuan").offset().left;
				this.a = this.y/100;
				
				console.log(this.x,this.y,this.a);
				this.$forceUpdate();
			}
		},
		mounted() {
			this.yincang();
		},
		watch:{
			
		}
	}
</script>

<style scoped="scoped">
	.menus {
		width: 100%;
	}
	
	.menus-ml::-webkit-scrollbar,
	.menus-nr::-webkit-scrollbar {
		display: none;
	}
	
	.menus-ml {
		width: 25%;
		height: 100%;
		position: relative;
		overflow-y: scroll;
		background-color: rgb(242, 242, 242);
		position: fixed;
		top: 1.55rem;
	}
	
	.menus-ml>li {
		width: 90%;
		height: 0.63rem;
		line-height: 0.63rem;
		font-size: 0.12rem;
		padding-left: 10%;
		overflow: hidden;
		position: relative;
		border-bottom: 0.01rem solid gainsboro;
	}
	.fennum{
		width: 0.15rem;
		height: 0.15rem;
		color: white;
		font-size:0.12rem;
		line-height: 0.15rem;
		text-align: center;
		border-radius: 0.15rem;
		background-color:red;
		position: absolute;
		top: 0;
		right: 0;
		display: none;
	}
	.menus-ml>li:nth-child(1) {
		background-color: white;
	}
	
	.shuxian {
		width: 0;
		height: 0.60rem;
		background-color: dodgerblue;
		border: 0.015rem solid dodgerblue;
		position: absolute;
		top: 0;
	}
	/*----*/
	
	.menus-nr {
		width: 75%;
		height: 100%;
		position: fixed;
		top: 1.55rem;
		left: 25%;
		overflow-y: scroll;
	}
	
	.menus-nr>ul {
		width: 100%;
	}
	
	.menus-nr>ul>div {
		width: 100%;
		height: 0.5rem;
		line-height: 0.5rem;
		background-color: rgb(242, 242, 242);
	}
	
	.menus-nr>ul>div>p {
		float: left;
	}
	
	.tit {
		font-size: 0.14rem;
		color: grey;
		position: relative;
	}
	
	.tit>p {
		font-size: 0.16rem;
		color: black;
		margin-left: 0.1rem;
		font-weight: bolder;
		margin-right: 0.1rem;
	}
	
	.tit>span {
		float: right;
		margin-right: 0.1rem;
	}
	
	.bukong {
		font-size: 0.12rem;
		height: 2.15rem;
	}
	/*---*/
	
	.menus-nr>ul>li {
		width: 100%;
		font-size: 0.16rem;
		overflow: hidden;
		position: relative;
		border-bottom: 0.01rem solid gainsboro;
	}
	
	.menus-nr>ul>li>img {
		width: 0.5rem;
		float: left;
		margin-top: 0.15rem;
		margin-left: 0.1rem;
	}
	
	.you {
		float: left;
		overflow: hidden;
		margin-left: 0.1rem;
	}
	
	.nm {
		display: block;
		font-weight: bold;
		margin-top: 0.2rem;
	}
	
	.lx {
		margin-top: 0.1rem;
		color: grey;
	}
	
	.ys {
		margin-top: 0.2rem;
	}
	
	.yh {
		display: inline-block;
		height: 0.12rem;
		line-height: 0.12rem;
		color: red;
		font-size: 0.12rem;
		border-radius: 0.1rem;
		border: 1px solid red;
	}
	
	.qian {
		color: red;
		margin-bottom: 0.15rem;
	}
	
	.jia-n {
		height: 0.2rem;
		position: absolute;
		bottom: 0.15rem;
		right: 0.1rem;
	}
	
	.jia-n>span {
		width: 0.2rem;
		height: 0.2rem;
		line-height: 0.25rem;
		text-align: center;
		position: absolute;
		display: inline-block;
		left: 0.2rem;
		bottom: 0;
		visibility: hidden;
	}
	
	.jia,
	.jian {
		display: inline-block;
		width: 0.2rem;
		height: 0.2rem;
		text-align: center;
		line-height: 0.18rem;
		/*overflow: hidden;*/
		color: white;
		font-size: 0.2rem;
		font-weight: bold;
		border-radius: 0.2rem;
		background-color: #3190E8;
	}
	
	.jian {
		width: 0.19rem;
		height: 0.19rem;
		margin-right: 0.15rem;
		background-color: white;
		border: 0.01rem solid #3190E8;
		color: #3190E8;
		visibility: hidden;
	}
	/*----*/
	
	.xin {
		width: 0.6rem;
		height: 0.6rem;
		color: white;
		line-height: 1rem;
		text-align: center;
		overflow: hidden;
		font-size: 0.12rem;
		background-color: #5ec452;
		transform: rotateZ(-45deg);
		position: absolute;
		top: -0.3rem;
		left: -0.3rem;
	}
	
	.zhaopai {
		width: 0.35rem;
		height: 0.16rem;
		color: red;
		line-height: 0.16rem;
		font-size: 0.12rem;
		text-align: center;
		overflow: hidden;
		border-radius: 0.16rem;
		border: 0.01rem solid red;
		position: absolute;
		top: 0.15rem;
		right: 0.1rem;
	}
	
	.gg {
		width: 0.55rem;
		height: 0.2rem;
		line-height: 0.2rem;
		background-color: #3190E8;
		font-size: 0.12rem !important;
		font-weight: 100;
		border-radius: 0.05rem;
	}
	/*---底部购物车---*/
	
	.shopCart {
		width: 100%;
		height: 0.5rem;
		position: fixed;
		background-color: black;
		bottom: 0;
		color: white;
	}
	
	.yuancar {
		width: 0.6rem;
		height: 0.6rem;
		border-radius: 0.6rem;
		background-color: black;
		position: absolute;
		bottom: 0.1rem;
		left: 0.15rem;
	}
	.allnum{
		width: 0.2rem;
		height: 0.2rem;
		color: white;
		line-height: 0.2rem;
		text-align: center;
		border-radius: 0.2rem;
		background-color:red;
		position: absolute;
		right: -0.05rem;
		top: -0.05rem;
		display: none;
		}
	.lanyuan{
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 0.5rem;
		background-color:black;
		position: absolute;
		top:0.1rem;
		left:-0.4rem;
	}
	.shopCart>p {
		font-weight: bold;
		margin-top: 0.04rem;
		margin-left: 0.85rem;
		margin-bottom: 0.06rem;
	}
	
	.shopCart>span {
		font-size: 0.12rem;
		margin-left: 0.85rem;
	}
	
	.qisong {
		width: 1.3rem;
		height: 0.5rem;
		line-height: 0.5rem;
		font-weight: bold;
		font-size: 0.16rem;
		text-align: center;
		position: absolute;
		top: 0;
		right: 0;
		background-color: rgb(55, 55, 55);
	}
	
	.qian>span {
		color: black;
	}
	.jiesuan{
		width: 1.3rem;
		height: 0.5rem;
		line-height: 0.5rem;
		font-weight: bold;
		color: white;
		font-size: 0.16rem;
		text-align: center;
		position: absolute;
		top: 0;
		right: 0;
		background-color:lawngreen;
	}
	/*----h3d---*/
	.h3d{
		width:60%;
		height: 0.3rem;
		line-height:0.3rem;
		border-radius:0.05rem ;
		padding-left: 0.1rem;
		font-size:0.12rem;
		color: white;
		position: absolute;
		right:0.05rem;
		bottom: -0.15rem;
		z-index: 1;
		background-color:rgb(70,70,70);
		display: none;
	}
	.h3d>span{
		font-size:0.14rem;
		padding-right:0.05rem;
	}
	.h3d>p{
		width: 0.2rem;
		height: 0.2rem;
		background-color:rgb(70,70,70);
		position: absolute;
		right: 0.06rem;
		top: -0.04rem;
		transform: rotateZ(45deg);
		z-index: -1;
	}
	/*-----mb-gg-----*/
	.mb-gg{
		width:100%;
		height:100%;
		position: fixed;
		top: 0;
		z-index:10;
		background-color:rgba(0,0,0,0.3);
		display: none;
	}
	.xgg{
		width:60%;
		height: 1.5rem;
		background-color: white;
		position:absolute;
		top: 3rem;
		border-radius:0.06rem ;
		text-align: center;
		left: 20%;
	}
	.xgg>h5{
		line-height:0.3rem;
	}
	.xgg>p{
		padding-left:0.1rem ;
		font-size:0.14rem;
		text-align: left;
	}
	.xgg-gg{
		width:100%;
		overflow: hidden;
	}
	.xgg-gg>li{
		font-size:0.12rem;
		line-height:0.3rem;
		float: left;
		border:0.01rem solid blue;
		border-radius:0.03rem ;
		margin-left: 0.1rem;
		margin-top:0.1rem;
	}
	.xgg>li{
		width:100%;
		line-height:0.4rem;
		position: absolute;
		bottom: 0;
		text-align: left;
		color: red;
		padding-top: 0.1rem;
		background-color: gainsboro;
	}
	.xgg>li>span{
		float: right;
		line-height:0.3rem;
		background-color: #3190E8;
		color: white;
		padding-left:0.15rem;
		padding-right:0.15rem;
		text-align: center;
		font-size:0.14rem;
		margin-right:0.1rem;
		border-radius:0.05rem ;
	}
	.cha{
		position: absolute;
		top:0rem;
		right: 0.05rem;
		font-size:0.3rem;
	}
	/*--＋动画---*/
	.jiadh{
		position: absolute;
		bottom:0.4rem;
		right:0.2rem;
		width:0.2rem;
		height:0.2rem;
		background-color:#3190E8;
		border-radius:0.2rem ;
		display: none;
	}
</style>