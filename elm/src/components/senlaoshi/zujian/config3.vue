<template>
    <div id="wrap">
			<ul  class="ul1">
				<li><h5>配送方式</h5></li>
				<li>
					<p class="box" id="b1" @click=" changeSrc()">
						<img :src="img"/>
						<span>蜂鸟转送</span>
					</p>					
				</li>
				<li><h5 >商家属性(可以多选)</h5></li>
				<li class="xx">
					<p :key="index" class="box" v-for="(val,index) in arr" @click="b=index,hit(index)">
						<img :src="val.src"/>
						<span>{{val.name}}</span>
					</p>
				</li>
			</ul>
			<div class="xxl">
				<button @click="clear()">清空</button>
				<button @click="si()">确定<span v-show="show">({{count}})</span></button>
			</div>
		</div>
</template>

<script>
export default {
  name: "config3",
  data() {
    return {
		b:"",
      ind: "",
      arr: [
        {name: "品牌商家",
          src: require("../../../../static/img/pin.png")
        },
        {name: "外卖宝",
          src: require("../../../../static/img/bao.png")
        },
        { name: "准时达", src:require("../../../../static/img/zhun.png")  },
        { name: "新店", src: require("../../../../static/img/xin.png") },
        { name: "在线支付", src: require("../../../../static/img/fu.png") },
        { name: "开发票", src: require("../../../../static/img/piao.png") }
	  ],
	  count:0,
	//   图标记录点击次数
       clic:[],
     cli1:true,
     show:false,
     img:require("../../../../static/img/niao.png")
    };
  },
  computed:{
  },
  methods: {
     


      hit(a){
		if (this.clic.length==0) {
			for(let i=0;i<$(".box" ).length;i++){
			  this.clic.push(true);
		  }
		}		  
		  var b =a+1;		 
           if(this.clic[b]){
				$(".box:eq("+b+")>img" ).attr("src","../../../../static/img/dui.png");
				this.count++;				
		   }else{
			   $(".box:eq("+b+")>img" ).attr("src",this.arr[b-1].src);
				   this.count--;
			}
		this.clic[b]=!this.clic[b];
		  		  this.$forceUpdate();
	  },
    changeSrc() {		
        if (this.cli1==true) {
			$(".box:eq(0)>img" ).attr("src","../../../../static/img/dui.png");
			this.count++;	this.cli1=!this.cli1;
		}else{
			$(".box:eq(0)>img" ).attr("src","../../../../static/img/niao.png");
			this.count--;	this.cli1=!this.cli1;
		}
	},
	// 清除
	clear(){	
		this.clic=[];
			for(let i=0;i<$(".box" ).length;i++){
			  this.clic.push(true);
		  }
			
		this.count=0;
		this.cli1=true;
		$(".box:eq(0)>img" ).attr("src","../../../../static/img/niao.png");
         for(let i=1;i<$(".box" ).length;i++){
			//   this.clic.push(true);
			 
			   $(".box:eq("+i+")>img" ).attr("src",this.arr[i-1].src);
		 }
  },
  si(){
    this.$store.state.conbool=false;
    // 传值
  }

  },
  watch:{
    count:function(){
      if(this.count==0){
          this.show=false;
      }else{
        this.show=true;
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
.ul1 {
  background-color: #ffffff;
  width: 100%;
  padding-bottom: 0.6rem;
}
.ul1 li {
  font-size: 0.16rem;
  width: 96%;
  padding: 0 2%;
  
  height: 0.4rem;
  line-height: 0.4rem;
  color: #333;
}

.box {
  height: 96%;
  width: 32%;
  font-size: 0.14rem;
  margin-bottom: 0.06rem;
  border: 0.01rem solid #e4e4e4;
}
.box img {
  width: 0.2rem;
  height: 0.2rem;
  float: left;
  margin: 0.09rem 0.05rem;
}
.xx {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 0.05rem;
}
.xxl {
  width: 100%;
  
  display: flex;
  justify-content: space-around;
}

.xxl button {
  width: 46%;
  height: 0.4rem;
  line-height: 0.4rem;
  border-radius: 0.05rem;
  margin: 0.05rem 0;
  border: none;
  outline: none;
  font-size: 0.2rem;
  background-color: #fff;
}
.xxl button:nth-of-type(2) {
  background-color: #56d176;
}
</style>
