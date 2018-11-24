<template>
	<div class="qiecity">
		<div class="qctop">
			<img :src="img" @click="back()"/>
			{{city}}
			<router-link to="/"><span class="qiehuan">切换城市</span></router-link>
		</div>
		<div class="bukong"></div>
		<div class="qhsou">
			<input type="text"id="srdz" placeholder="输入学校`商务楼`地址" />
			<input type="button" id="tijiao" @click="sou()" value="提交" />
		</div>
		<p class="lishi">搜索历史</p>
		<router-view></router-view>
	</div>
</template>

<script>
	let img03 = require('../../../../static/img/back.png')
	export default {
		name:'qiecity',
		data(){
			return{
				city:"",
				img:img03
			}
		},
		methods: {
			sou(){
				let apidz = "https://elm.cangdu.org/v1/pois?city_id="+this.$route.params.pid+"&keyword="+$("#srdz").val()+"&type=search";
				this.$http.get(apidz).then(
					(response) => {
//					console.log(response.data)
					this.$router.push({name:"soudizhi",query:response.data});
				});
			},
			back(){
				this.$router.push({name:"chooseCity"});
			}
		},
		created() {
			this.city = this.$route.params.pname;
		}
	}
</script>

<style scoped>
	.qiecity{
		width: 100%;
		height:100%;
		background-color:rgb(240,240,240);
	}
	.bukong {
		height: 0.45rem;
	}
	.qctop{
		width: 100%;
		height:0.45rem;
		min-height: 25px;
		background-color: #3190e8;
		color: white;
		font-weight: bold;
		font-size: 0.19rem;
		line-height: 0.52rem;
		text-align: center;
		position: fixed;
		top: 0;
	}
	.qiehuan{
		color: white;
		float: right;
		padding-right:0.1rem;
		font-size:0.12rem;
	}
	.qctop>img{
		float: left;
		margin-left: 0.03rem;
		margin-top:0.13rem;
	}
	/*-----*/
	.qhsou{
		width:100%;
		margin-top:0.1rem;
		background-color: white;
		border-top:1px solid gainsboro;
		border-bottom:2px solid gainsboro;
	}
	#srdz{
		width:90%;
		height:0.32rem;
		margin-top:0.15rem;
		border:1px solid gainsboro;
		margin-left:5%;
		outline: none;
	}
	#srdz::-webkit-input-placeholder{ 
		color:grey;
	}
	#tijiao{
		border:1px solid #3190E8;
		width:90%;
		height:0.32rem;
		margin-top:0.10rem;
		margin-bottom:0.10rem;
		margin-left:5%;
		background-color:#3190E8; 
		border-radius:3px ;
		font-size:0.16rem;
		color: white;
		outline: none;
	}
	.lishi{
		height:0.2rem;
		line-height: 0.2rem;
		padding-left:0.1rem;
		font-size:0.12rem;
		border-bottom:2px solid gainsboro;
	}
	/*-----*/
</style>