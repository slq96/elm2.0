<template>
	<div class="pingjia">
		<div class="pjtop">
			<li class="pjli1">
				<h2>{{fen.overall_score}}</h2>
				<p>综合评价</p>
				<span>高于周边商家{{fen.compare_rating}}%</span>
			</li>
			<li class="pjli2">
				<p>服务态度<span>★★★★★ &nbsp;&nbsp;{{fen.service_score}}</span></p>
				<p>菜品评价<span>★★★★★ &nbsp;&nbsp;{{fen.food_score}}</span></p>
				<p>送达时间<span>{{fen.deliver_time}}</span><span class="spansj">分钟</span></p>
			</li>
		</div>
		<div class="pjdiv">
			<ul class="pjul">
				<li @click="blue(index)" v-for="(value,index) in fenlei">{{value.name}}({{value.count}})</li>
			</ul>
		</div>
		<div class="yhpj">
			<li v-for="(value,index) in pj">
				<div class="toux">
					<img v-if='value.avatar!=""' :src="value.avatar"/>
					<img v-else src="//elm.cangdu.org/img/default.jpg"/>
				</div>
				<span class="time">{{value.rated_at}}</span>
				<span class="usernm">{{value.username}}</span>
				<p class="jixing">★★★★★{{value.time_spent_desc}}</p>
				<div class="swtu">
					<li v-if="value.item_ratings.length!=0" v-for="val in value.item_ratings">
						<img v-if="val.image_hash!=''" :src="val.image_hash"/>
					</li>
					<ul>
						<span v-if="value.item_ratings.length!=0" v-for="val in value.item_ratings">{{val.food_name}}</span>
					</ul>
					
				</div>
			</li>
		</div>
	</div>
</template>

<script>
import { Loading } from 'element-ui';
	export default {
		name: "pingjia",
		data() {
			return {
				pj: {},
				fen: {},
				fenlei:{},
				num:null,
				num1:null,
				arrfood:null
			}
		},
		created() {
			let loadingInstance1 = Loading.service({ fullscreen: true,text:'加载中...' });
			
			let apifen = "https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/scores";
			this.$http.get(apifen).then(
				(response) => {
					this.fen = response.data;
					this.fen.compare_rating = Math.round(this.fen.compare_rating * 1000) / 10;
					this.fen.service_score = Math.round(this.fen.service_score * 10) / 10;
					this.fen.food_score = Math.round(this.fen.food_score * 10) / 10;
					this.fen.overall_score = Math.round(this.fen.overall_score * 10) / 10;
				});
			let apipj = "https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10";
			this.$http.get(apipj).then(
				(response) => {
					this.pj = response.data;
//					console.log(this.pj);
					for(let i=0;i<this.pj.length;i++){
						if(this.pj[i].avatar!=""){
							this.num=this.pj[i].avatar.split("");
							this.num1=this.num.splice(0,3);
							this.pj[i].avatar = "https://fuss10.elemecdn.com/"+this.num1[0]+"/"+this.num1[1]+this.num1[2]+"/"+this.num.join("")+".jpeg";
						}
						for(let j=0;j<this.pj[i].item_ratings.length;j++){
							if(this.pj[i].item_ratings.length!=0){
								if (this.pj[i].item_ratings[j].image_hash!="") {
									this.arrfood1=this.pj[i].item_ratings[j].image_hash.split("");
									this.arrfood = this.arrfood1.splice(0,3);
									this.pj[i].item_ratings[j].image_hash = "https://fuss10.elemecdn.com/"+this.arrfood[0]+"/"+this.arrfood[1]+this.arrfood[2]+"/"+this.arrfood1.join("")+".jpeg";
//									console.log(this.pj[i].item_ratings[j].image_hash);
								}								
							}	
						}
					}
					
					
				});
			let apifl = "https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/tags";
			this.$http.get(apifl).then(
				(response) => { loadingInstance1.close();
					this.fenlei = response.data;
				});
		},
		methods: {
			blue(index){
				for (let i=0;i<this.fenlei.length;i++) {
					$(".pjul>li:eq("+i+")").css("background-color","#ebf5ff");
					$(".pjul>li:eq("+i+")").css("color","black");
					if (this.fenlei[i].unsatisfied) {
						$(".pjul>li:eq("+i+")").css("background-color","gainsboro");
						$(".pjul>li:eq("+i+")").css("color","darkgrey");
					}
				}
				$(".pjul>li:eq("+index+")").css("background-color","#3190E8");
				$(".pjul>li:eq("+index+")").css("color","white");				
			},
		},
		mounted() {
			this.blue(0);
		},
		watch:{
			
		},
	}
	
</script>

<style scoped="scoped">
	.pingjia {
		width: 100%;
		background-color: rgb(242, 242, 242);
	}
	
	.pjtop {
		width: 100%;
		overflow: hidden;
		background-color: white;
	}
	
	.pjtop>li {
		float: left;
	}
	
	.pjli1 {
		width: 40%;
		text-align: center;
	}
	
	.pjli1>h2 {
		color: orangered;
		margin-top: 0.25rem;
	}
	
	.pjli1>p {
		font-size: 0.16rem;
		line-height: 0.25rem;
	}
	
	.pjli1>span {
		display: block;
		font-size: 0.12rem;
		color: darkgray;
		padding-bottom: 0.2rem;
	}
	
	.pjli2 {
		font-size: 0.16rem;
		padding-top: 0.23rem;
	}
	
	.pjli2>p {
		line-height: 0.23rem;
	}
	
	.pjli2>p>span {
		color: orange;
		font-size: 0.12rem;
		padding-left: 0.15rem;
	}
	
	.spansj {
		color: darkgrey !important;
		padding-left: 0.05rem !important;
	}
	/*------*/
	.pjdiv{
		background-color: white;
	}
	.pjul{
		margin-top:0.15rem;
		margin-left:0.1rem;
		overflow: hidden;
		padding-top:0.12rem;
		padding-bottom:0.15rem;
		border-bottom:0.01rem solid gainsboro;
	}
	.pjul>li{
		float: left;
		font-size:0.13rem;
		padding:0.1rem;
		margin-right:0.1rem;
		border-radius:0.05rem ;
		margin-bottom: 0.05rem;
		background-color:#ebf5ff;
	}
	/*-------*/
	.yhpj{
		width: 100%;
	}
	.yhpj>li{
		height: 1.7rem;
		overflow: hidden;
		font-size:0.12rem;
		position: relative;
		background-color: white;
		border-bottom:0.01rem solid gainsboro;
	}
	.toux{
		width: 0.4rem;
		height:0.4rem;
		overflow: hidden;
		float: left;
		margin: 0.15rem auto auto 0.15rem;
		border-radius:0.4rem ;
	}
	.toux>img{
		width:100%;
	}
	.time{
		float: right;
		color: darkgrey;
		margin-top:0.15rem;
		margin-right:0.1rem;
	}
	.usernm{
		float: left;
		height:0.15rem;
		margin-top:0.15rem;
		margin-left: 0.1rem;
	}
	.jixing{
		position: absolute;
		top: 0.36rem;
		left: 0.65rem;
		color: orangered;
	}
	.swtu{
		width:100%;
		float: left;
		margin-top:0.1rem;
		padding-left:0.6rem;
		position: relative;
	}
	.swtu>li{
		width:22%;
		text-align: center;
		float: left;
	}
	.swtu>ul{
		position: absolute;
	   	left: 0.65rem;
	   	bottom: -0.25rem;
	}
	.swtu>ul>span{
		display: inline-block;
		width:0.5rem;;
		border: 0.01rem solid gainsboro;
		overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    margin-right: 0.1rem;
	}
	.swtu>li>img{
		width:0.7rem;
	}
</style>