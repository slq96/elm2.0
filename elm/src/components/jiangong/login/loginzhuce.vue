<template>
	<div class="login">
		<div class="qctop">
			<img :src="img" @click="back()"/>
			密码登录
		</div>
		<div class="bukong"></div>
		<div class="dl">
			<li><input type="text" id="user" placeholder="账号" v-model="username"/></li>
			<li>
				<input type="text" id="pw" placeholder="密码" v-model="password" />
				<div class="ifjiami">
					<span class="gray" id="xuanze">abc···</span>
					<p @click="isjiami()" id="qiu"></p>
				</div>
			</li>
			<div class="yz">
      			<input v-model="codeNumer" type="text" placeholder="验证码" class="yanz">
      			<div class="huanyige">
      				<p>看不清</p>
      				<span @click="getCode()">换一张</span>
      			</div>
      			<img  :src="code&&code" alt="">      			
    		</div>
    		<div class="wxtishi">
    			温馨提示:未注册过的账号,登录时自动注册
    			<p>注册过的用户可凭账号密码登录</p>
    		</div>
    		<button @click="login()" id="login">登录</button>
    		<p class="chongzhi" @click="chongz()">重置密码?</p>
		</div>
		<div class="yzcwts">
			<div class="yuan">!</div>
			<p>{{message}}</p>
			<span @click="queren()">确认</span>
		</div>
	</div>
</template>

<script>
//	import { mapState,mapMutations } from "vuex";
import { Loading } from 'element-ui';
	let img05 = require('../../../../static/img/back.png')
	export default {
		name:'loginzhuce',
		data(){
			return{
				ssdz:"",
				bool:false,
				code: "",
		        username: "",
		        password: "",
		        codeNumer: "",
		        message:"",
		        img:img05
			}
		},
		created() {
      		this.getCode();
      		
		},
		methods:{
			isjiami(){
				this.bool=!this.bool;
				if (this.bool) {
					$("#pw").attr("type","password");
					$("#xuanze").attr("class","blue");
					$("#qiu").animate({
						"left":"0.26rem"
					},500);					
				}else{
					$("#pw").attr("type","text");
					$("#xuanze").attr("class","gray");
					$("#qiu").animate({
						"left":"0rem"
					},500);
				}
			},
			getCode(){
        		const url = "https://elm.cangdu.org/v1/captchas";
       			this.$http({
          			method: 'post',
          			url: url,
          			withCredentials: true,
       			}).then((res) => {
//        			console.log('tap', res);
           	 		if(res.data.status == 200){}
           	 		this.code = res.data.code;
        		});        
      		},
	      login() {
	      	if ($("#user").val()==""&&$("#pw").val()=="") {
	      		$(".yzcwts").css("display","block").hide(0).slideDown(500);
	      		this.message="请输入手机号/邮箱/用户名";
	      		return;
	      	}else if($(".yanz").val()==""){
	      		$(".yzcwts").css("display","block").hide(0).slideDown(500);
	      		this.message="请输入验证码";
	      		return;
			  }
			  let loadingInstance1 = Loading.service({ fullscreen: true,text:'加载中...' });
			
	        const api = "https://elm.cangdu.org/v2/login";
	        this.$http({
	          	method: 'post',
	          	url: api,
	          	withCredentials: true, // 默认的
	          	data: {
	            	captcha_code: this.codeNumer,
	            	password: this.password,
	            	username: this.username
	          	}
	        }).then(res => {   loadingInstance1.close();
//	          	console.log('++++',res.data);
	          	if(res.data.status==0){	          		
	          		this.message=res.data.message;
	          		$(".yzcwts").css("display","block").hide(0).slideDown(500);
	          		this.getCode();
	          	}else{
	          		this.$store.state.userxx = res.data;
					this.$router.push({name:"chooseCity",query:res.data,params:{pID:res.data.id}});
	          	}
				
	        });
	    },
	    back(){
	    	history.go(-1);
	    },
	    queren(){
	    	$(".yzcwts").css("display","none").slideUp(500);
	    },
	    chongz(){
	    	this.$router.push({name:"findmima"});
	    }
	}	
}
</script>

<style scoped>
	
</style>