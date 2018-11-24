<template>
	<div class="login">
		<div class="qctop">
			<img :src="img" @click="back()"/>
			重置密码
		</div>
		<div class="bukong"></div>
		<div class="dl">
			<li><input type="text" id="userzh" placeholder="账号" v-model="username"/></li>
			<li><input type="text" id="oldpw" placeholder="旧密码" v-model="oldpassword" /></li>
			<li><input type="text" id="newpw" placeholder="请输入新密码" v-model="newpassword" /></li>
			<li><input type="text" id="qrpw" placeholder="请确认密码" v-model="qrpassword" /></li>
			<div class="yz">
      			<input v-model="codeNumer" type="text" placeholder="验证码" class="yanz">
      			<div class="huanyige">
      				<p>看不清</p>
      				<span @click="getCode()">换一张</span>
      			</div>
      			<img  :src="code&&code" alt="">      			
    		</div>
    		<button @click="login()" id="login">确认修改</button>
		</div>
		<div class="yzcwts">
			<div class="yuan">!</div>
			<p>{{message}}</p>
			<span @click="queren()">确认</span>
		</div>
	</div>
</template>

<script>
import { Loading } from 'element-ui';
	let img04 = require('../../../../static/img/back.png')
	export default {
		name:'findmima',
		data(){
			return{
				ssdz:"",
				bool:false,
				code: "",
		        username: "",
		        oldpassword: "",
		        newpassword: "",
		        qrpassword: "",
		        codeNumer: "",
		        message:"",
		        img:img04
			}
		},
		created() {
      		this.getCode();
		},
		methods:{
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
	      	if ($("#userzh").val()=="") {
	      		$(".yzcwts").css("display","block").hide(0).slideDown(500);
	      		this.message="请输入正确的账号";
	      		return;
			  }
			  let loadingInstance1 = Loading.service({ fullscreen: true,text:'加载中...' });
			
	        const api = "https://elm.cangdu.org/v2/changepassword";
	        this.$http({
	          	method: 'post',
	          	url: api,
	          	withCredentials: true, // 默认的
	          	data: {
	            	captcha_code: this.codeNumer,
	            	oldpassWord: this.oldpassword,
	            	newpassword: this.newpassword,
		        	confirmpassword: this.qrpassword,
	            	username: this.username
	          	}
	        }).then(res => {   loadingInstance1.close();
	          	console.log('++++',res.data);
	          	if(res.data.status==0){
	          		this.message=res.data.message;
	          		$(".yzcwts").css("display","block").hide(0).slideDown(500);
	          		this.getCode();
	          	}else{
					this.message=res.data.success;
	          		$(".yzcwts").css("display","block").hide(0).slideDown(500);
	          		this.getCode();
	          	}				
	        });
	    },
	    back(){
	    	history.go(-1);
	    },
	    queren(){
	    	$(".yzcwts").css("display","none").slideUp(500);
	    }
	}	
}
</script>

<style scoped>
	
</style>