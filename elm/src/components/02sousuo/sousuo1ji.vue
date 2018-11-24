<template>
    <div id="wrap">	
			<div class="top1">
					<img @click=" back()" :src="imgback" alt="" />
					<h2>搜索店铺</h2>
			</div>
		<div class="ss">
			<input id="inp" v-model="con" type="search"  placeholder="请输入商家或美食名称" v-on:input="inp"/>
			<span id="xx" @click="clear()" v-if="xx">x</span>
			<button @click="soso(),btn()">提交</button>
		</div>
		<ul class="ul1" v-if="bol1">
			<p>搜索历史</p>
			<li  v-for="(value,index) in hist" :key="index">
                {{ value }}
              <span @click="del(index)">X</span></li>
			
			<p @click=" clear1()">清空搜索历史</p>
		</ul>
		<p id="tishi" v-if="ti">未搜到你找查的店铺</p>
		  <ul class="xx-ul" v-if="ul">
        <!-- 遍历数组 -->
				<li :key="index" v-for="(value,index) in this.sosoData">				
          <img :src='["//elm.cangdu.org/img/"+value.image_path]'/>
					<div class="box1">
						<h4><span>品牌</span>{{value.name}}</h4>
						<h5 class="box_h5_1">
						
<img :src="imgxing"/>
				<p>
<span>4.7</span>月售<span>106</span>单</p>
			   <p><span>{{value.delivery_mode.text}}</span><span>准时达</span></p></h5>
						<h5 class="box-h5-2">	
							<p>
							<span>￥20</span>起送/{{value.piecewise_agent_fee.tips}}</p>
					<p><span>{{value.distance}}/</span><span>{{value.order_lead_time}}</span>
</p>
              </h5>
					</div>
				</li>			
			</ul>

		
		</div>
</template>

<script>
import { Loading } from 'element-ui';
let imgback = require('../../../static/img/back.png');
let imgxing = require('../../../static/img/xingxing.png');
export default {
  name: "sousuo",
  data() {
    return {
      imgback,
      imgxing,
      ul:false,
		ti:false,
          xx:false,
        con:"",
      hist: [],
      bol1:true,
    //   接收消息
    sosoData:[]
    };
  },
  methods:{
      del(a){       
        this.hist.splice(a,1)
		 },
// 清除搜素框
   clear(){
	  	this.con="";
        this.bol1=true;
   },

		//  清除搜索历史
      clear1(){
		  this.hist=[];		 
      },
      btn(){
        if(this.con==""){
          alert("请输入内容")
        }else
		  if (this.hist.length==0) {
			   this.hist.push(this.con) ;
        this.bol1=false;
       
		  }else
          if(this.hist.indexOf(this.con)==-1){			 
			  this.hist.push(this.con);
			  this.bol1=false;
			 
          }   
           this.ul=true;      
	  },
	   inp(){
          		this.ul=false;
		 		 if(this.con==""&&this.hist.length!=0){
					 this.ti=false;				
           this.bol1=true; 

          }		
	  },
	  soso(){
      
    //   搜索结果
    let loadingInstance1 = Loading.service({ fullscreen: true,text:'加载中...' });
		    this.$http.get("https://elm.cangdu.org/v4/restaurants?geohash="+this.$store.state.geohash+"&keyword="+this.con).then(
					(res) => {
             loadingInstance1.close();
					if(res.data.status==0){
						alert(res.data.message);
					}else{
						 this.sosoData=res.data;
						 console.log(this.sosoData);
					}
					
				});
          this.$forceUpdate();
    },
    back(){
      this.$router.back();
    }
  },
  created(){
      if(this.hist.length==0){
          this.bol1=false;
		}

  },
  watch:{
    hist:function(){
		if(this.hist.length==0){
          this.bol1=false;
		}
	},
	sosoData:function(){
		if(this.sosoData.length==0){
          this.ti=true;
		}else{
			 this.ti=false;
		}
	}

	 
  }
};
</script>

<style scoped>
#wrap {
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
}

.top1 {
  text-align: center;
  width: 100%;
  height: 0.6rem;
  color: white;
  line-height: 0.7rem;
  position: relative;
  background-color: #3190e8;
}

.top1 img {
  width: 6%;
  position: absolute;
  left: 0.1rem;
  top: 0.2rem;
}
#xx{
	background-color: red;
	position: absolute;
	top:0.2rem;
	right: 0.93rem;
}
#tishi{
	color: gray;
	text-align: center;
	margin-top: 0.05rem;
}
.ss {
	position: relative;
  height: 0.5rem;
  width: 96%;
  padding: 0 2%;
  padding-top: 2%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}
.ss input {
  height: 0.4rem;
  width: 78%;
  background-color: #f2f2f2;
  padding: 0 1%;
  outline: none;
}
.ss button {
  background-color: #3190e8;
  height: 0.4rem;
  width: 20%;
  font-size: 0.15rem;
  border-radius: 0.08rem;
  color: white;
  outline: none;
}
.ul1 {
  width: 100%;
  background-color: #fff;
}
.ul1 li {
  width: 94%;
  padding: 0 2%;
  padding-right: 4%;
  border-bottom: 0.01rem #999 solid;
  height: 0.4rem;
  line-height: 0.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
}
.ul1 p {
  width: 96%;
  padding: 0 2%;
}
.ul1 p:nth-of-type(1) {
  background-color: #f2f2f2;
  height: 0.4rem;
  line-height: 0.4rem;
  font-weight: 600;
  color: #666;
}
.ul1 p:nth-of-type(2) {
  background-color: #fff;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  font-weight: 600;
  color: #3190e8;
}


.xx-ul {
  width: 100%;
}

.xx-ul li {
  /*box-sizing: border-box;
	height: 0.9rem;*/
  position: relative;
  width: 100%;
  border-bottom: 0.01rem solid #e4e4e4;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
}

.xx-ul li > img {
  width: 0.7rem;
  height: 0.7rem;
  float: left;
  margin: 0.15rem 0.1rem;
}

.box1 {
  width:100%;
  display: inline-block;
  height: 0.7rem;
  margin: 0.15rem 0;
  margin-right: 0.1rem;
}

.box1 p {
  font-size: 0.08rem;
  display: inline-block;
}

.box1 h4 {
  width: 100%;
  font: 0.15rem PingFangSC-Regular;
  font-weight: 700;
}

.box1 h4 > span:nth-child(1) {
  background-color: #ffd930;
  font-size: 0.1rem;
  border-radius: 0.03rem;
  padding: 0 0.01rem;
  margin-right: 0.05rem;
}

.box1 h4 > p {
  display: block;
  float: right;
  font-size: 0.1rem;
  color: #4e4e4e;
}

.box1 h5 img {
  width: 0.5rem;
}

.box1 h5 p {
  font-size: 0.08rem;
}

.box1 h5 p span {
  font-size: 0.1rem;
}

.box_h5_1 {
  margin: 0.1rem 0;
  font-size: 0.08rem;
}

.box_h5_1 > p:nth-of-type(1) > span:nth-of-type(1) {
  color: #ff6000;
  margin: 0 0.05rem;
}

.box_h5_1 > p:nth-of-type(2) {
  float: right;
}

.box_h5_1 > p:nth-of-type(2) > span:nth-of-type(1) {
  color: #fff;
  background-color: #3190e8;
  border: 0.01rem solid #3190e8;
}

.box_h5_1 > p:nth-of-type(2) > span:nth-of-type(2) {
  color: #3190e8;
  border: 0.01rem solid #3190e8;
}
.box-h5-2 > p:nth-of-type(2){
  float: right;
}
.box-h5-2 > p:nth-of-type(2) > span:nth-child(1) {
  color: #999;
}

.box-h5-2 > p:nth-of-type(2) > span:nth-child(2) {
  color: #3190e8;
}

</style>
