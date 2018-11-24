<template>
	<div class="chooseCity">
		<div class="cctop">
			<span>ele.me</span>
			<p @click="login()" v-if="bl">登录|注册</p>
			<img class="yhzx" @click="my()" :src="src2" v-else/>
		</div>
		<div class="bukong"></div>
		<div class="dingwei">
			<p>当前定位城市:<span>定位不准时,请在城市列表中选择</span></p>
			<div class="dwcy">
				<p @click="dian(guess.name,guess.id)">{{guess.name}}
					<img :src="src" />
				</p>
			</div>
		</div>
		<div class="recity">
			<p>热门城市</p>
			<li v-for="value in hotcity" :key='value.id'@click="dian(value.name,value.id)">{{value.name}}</li>
		</div>
		<div class="groupcity">
			<ul v-for="(value,key,index) in group" :key='index'>
				<p>
					{{key}}
					<span v-if='isA(key)'>(按字母排序)</span>
				</p>
				<ul class="group-ul">
          			<li :key="index" v-for="(val,index) in value" @click="dian(val.name,val.id)">{{val.name}}</li>
         		</ul>

			</ul>
		</div>
	</div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>
	let img01 = require('../../../../static/img/jianyou.png')
	let img02 = require('../../../../static/img/wd1.png')
	export default {
		name: 'chooseCity',
		data() {
			return {
				hotcity: [],
				guess:[],
				group:{},
				bl:true,
				src:img01,
				src2:img02
			}
		},
		computed: {
			
		},
		// 在组件创建完成时发送请求
		created() {
			//启动网络加载动画效果：例如：菊花加载效果
			// 请求接口
			let apidw = "https://elm.cangdu.org/v1/cities?type=guess";
			let api = "https://elm.cangdu.org/v1/cities?type=hot";
			let apigroup = "https://elm.cangdu.org/v1/cities?type=group";
			this.$http.get(api).then(
				(response) => {
				this.hotcity = response.data;
			});
			this.$http.get(apidw).then(
				(response) => {
				this.guess = response.data;
			});	
			this.$http.get(apigroup).then(
				(response) => {
//				console.log(response.data);
				let arr=[];
      			for (const key in response.data) {
       				arr.push(key);
				}
      			arr.sort();     			
				for (let i = 0; i < arr.length; i++) { 
					this.group[arr[i]] =response.data[arr[i]]; 
				};	
			});
			//获取用户信息
				if(this.$store.state.userxx.user_id==undefined){
					this.bl=true;
				}else{	
					this.bl=false;
				}
		},
		methods: {
			isA(key){
				if(key=="A"){
					return true;
				}else{
					return false;
				}
			},
			dian(name,id){
				let api = "https://elm.cangdu.org/v1/cities/"+id;
				this.$http.get(api).then(res => {
					this.$router.push({name:"qiecity",query:res.data,params:{pname:name,pid:id}});
		        });
			},
			login(){
				this.$router.push({name:"loginzhuce"});
			},
			my(){
				this.$router.push({name:"waimai"});
			}
		}
	}
</script>

<style scoped>
	.chooseCity {
		width: 100%;
	}
	
	.cctop {
		width: 100%;
		height: 0.45rem;
		min-height: 25px;
		background-color: #3190e8;
		color: white;
		font-size: 0.15rem;
		line-height: 0.52rem;
		position: fixed;
		top: 0;
	}
	
	.cctop>span {
		font-size: 0.16rem;
		float: left;
		margin-left: 0.1rem;
	}
	
	.cctop>p {
		float: right;
		margin-right: 0.1rem;
	}
	/*------*/
	
	.bukong {
		height: 0.45rem;
	}
	
	.dingwei {
		width: 100%;
		font-size: 0.15rem;
	}
	
	.dingwei>p {
		font-size: 0.1rem;
		line-height: 0.45rem;
		margin-left: 0.1rem;
	}
	
	.dingwei>p>span {
		color: gray;
		float: right;
		font-weight: bold;
		margin-right: 0.1rem;
	}
	
	.dwcy {
		width: 100%;
		height: 0.40rem;
		line-height: 0.40rem;
		border-top: 1px solid gainsboro;
		border-bottom: 2px solid gainsboro;
	}
	
	.dwcy>p {
		color: #3190E8;
		font-size: 0.18rem;
		margin-left: 0.1rem;
	}
	
	.dwcy>p>img {
		width: 0.09rem;
		float: right;
		margin-top: 0.12rem;
		margin-right: 0.1rem;
	}
	/*----*/
	.recity{
		width:100%;
		margin-top:0.1rem;
		border-top:2px solid gainsboro ;
		overflow: hidden;
	}
	.recity>p{
		padding-left:0.1rem;
		line-height: 0.3rem;
		font-size:0.12rem;
		border-bottom:1px solid gainsboro ;
	}
	.recity>li{
		list-style: none;
		width:25%;
		height:0.40rem;
		margin-left:-1px;
		line-height: 0.40rem;
		float: left;
		color: #3190E8;
		font-size:0.12rem;
		text-align: center;
		border-bottom:1px solid gainsboro ;
		border-left: 1px solid gainsboro;
	}
	/*-----*/
	.groupcity{
		width:100%;
		margin-top:0.1rem;
		border-top:2px solid gainsboro ;
	}
	.groupcity>ul{
		width: 100%;
	}
	.groupcity>ul>p{
		line-height:0.36rem;
		padding-left:0.1rem;
		font-size:0.12rem;
		border-bottom:1px solid gainsboro ;
	}
	.groupcity>ul>p>span{
		color: grey;
	}
	.group-ul{
		width:100%;
		overflow: hidden;
		border-bottom:1px solid gainsboro ;
	}
	.group-ul>li{
		width:25%;
		height:0.40rem;
		margin-left:-1px;
		line-height: 0.40rem;
		float: left;
		font-size:0.12rem;
		text-align: center;
		color:midnightblue;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		border-bottom:1px solid gainsboro ;
		border-right: 1px solid gainsboro;
	}
	/*----------*/
	.yhzx{
		width:0.2rem;
		float: right;
		margin-top:0.12rem;
		margin-right:0.1rem;
	}
</style>