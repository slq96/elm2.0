<template>
<div class="soudizhi">
	<ul>
		<li @click="quzhuye(value.latitude,value.longitude,value.address)" v-for="(value,index) in ssdz" :key="index">
			<p>{{value.name}}</p>
			<span>{{value.address}}</span>
		</li>
	</ul>
</div>
</template>

<script>
	export default {
		name:'soudizhi',
		data(){
			return{
				ssdz:"",				
			}
		},
		created() {
			this.ssdz = this.$route.query;
		},
		watch:{
			"$route":function(newV,oldV){
				this.ssdz = this.$route.query;
			}
		},
		methods: {
			quzhuye(a,b,c){
				this.$router.push({name: "waimai",params:{latitude:a,longitude:b,address:c}});
				this.$store.state.latitude=a;
				this.$store.state.longitude=b;
				this.$store.state.address=c;
			}
		}		
	}
</script>

<style scoped>
	.soudizhi{
		width:100%;
	}
	.soudizhi>ul{
		width: 100%;
	}
	.soudizhi>ul>li{
		list-style: none;
		width:100%;
		height: 0.7rem;
		background-color: white;
		font-size: 0.16rem;
		overflow: hidden;
		border-bottom:1px solid gainsboro;
	}
	.soudizhi>ul>li>p{
		margin-top: 0.15rem;
		line-height:0.3rem;
		padding-left:0.2rem;
	}
	.soudizhi>ul>li>span{
		font-size:0.12rem;
		line-height:0.25rem;
		color: darkgray;
		padding-left:0.2rem;
	}
</style>