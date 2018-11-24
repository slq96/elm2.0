<template>
    <div id="wrap">
			<div class="top">
				<div class="top1">
					<img @click="back()" :src="imgback" alt="" />
					<h2>超市便利</h2>
				</div>
				<div class="top2">
					<p>
					<span @click="hit(0)">
             <router-link to="/config1"> {{$store.state.configname}}
              <img :src="imgjxia" alt="" /></router-link></span>
						<span @click="hit(1)" > <router-link to="/config2">排序<img :src="imgjxia" alt="" /></router-link></span>
						<span @click="hit(2)"><router-link to="/config3">筛选<img :src="imgjxia" alt="" /></router-link></span>
					</p>
				</div>
				<!--分类部分-->
        
         <el-collapse-transition>
        <div v-show="this.$store.state.conbool">
          <router-view></router-view>     
        </div>
      </el-collapse-transition>
                 
				

			</div>
			<ul class="xx-ul">
        <!-- 遍历数组 -->
				<li @click="jindian(value)" :key="index" v-for="(value,index) in this.$store.state.shopAll">
				 <img :src='["//elm.cangdu.org/img/"+value.image_path]'/>
					<div class="box1">
						<h4><span>品牌</span>{{value.name}}<p><span>保准票</span></p></h4>
						<h5 class="box_h5_1">
							<img :src="imgxing"/>
				<p>
<span>4.7</span>月售<span>106</span>单</p>
			   <p><span v-if="value.delivery_mode!=null &&value.delivery_mode.text!=''">{{value.delivery_mode.text}}</span><span>准时达</span></p></h5>
						<h5 class="box-h5-2">
							<p>
							<span>￥20</span>起送/{{value.piecewise_agent_fee.tips}}</p>
							<p>
                <span>{{value.distance}}/</span><span>{{value.order_lead_time}}</span>
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
let imgjxia = require('../../../static/img/jxia.png');
let imgxing = require('../../../static/img/xingxing.png');
import config1 from '../senlaoshi/zujian/config1'
export default {
  name: "xqone",
  data() {
    return {
      imgback,
	  imgjxia,
	  imgxing,
      olda:"",
      Opbol1:false,
        Opbol:[],
      config:[],
      leftid:"",
       leftdata0:[],
       leftdata:[],
       page:"",

      //  所有商铺信息 排序数据

       shopall:[],
      
    };
  },
  components:{
   config1
  },
  
  methods: {
     hit(a){
		if (this.Opbol.length==0) {
			for(let i=0;i<$(".top2>p>span").length;i++){
        this.Opbol.push(true);
       
		  }
    }		  
   
		 if(this.Opbol[a]==true){
       this.Opbol=[true,true,true];
       this.Opbol[a]=false
        this.$store.state.conbool=true;
		  }else{
    this.Opbol=[true,true,true];
          this.$store.state.conbool=false;

        //重置
      }
		
		  		  // this.$forceUpdate();
	  },
// https://elm.cangdu.org/shopping/restaurants?latitude=41.10431&longitude=123.06053&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=271&order_by=5&delivery_mode[]=null
  
    //返回上一页
    back(){
      this.$router.push({name:"waimai"}) ;
     
    },
    jindian(value){
    	value.image_url = "//elm.cangdu.org/img/"+value.image_path;
		this.$store.state.shop = value;
		this.$router.push({name: "wm2shop"});
	}

  },
  created(){
     
      // 获取商铺信息
      this.$http.get("https://elm.cangdu.org/shopping/restaurants?latitude="+this.$store.state.latitude+"&longitude="+this.$store.state.longitude+"&limit=10&&restaurant_category_ids[]="+this.$store.state.spid+"&order_by="+this.$store.state.orderby).then(
					(res) => {
           this.$store.state.shopAll=res.data;
          //  console.log(this.$store.state.shopAll)
				  
				});
  },
  watch:{
  
  }

};
</script>



<style scoped>
#wrap {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}

.top {
  width: 100%;
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

.top2 {
  width: 100%;
  border-bottom: 0.01rem solid #e4e4e4;
}

.top2 > p {
  width: 100%;
  /*margin-left: 5%;*/
  display: flex;
  justify-content: space-around;
}

.top2 > p > span {
  text-align: center;
  margin: 0.08rem 0;
  width: 33.3%;
  border-right: 1px solid #999;
}

.top2 > p > span:nth-last-of-type(1) {
  border: none;
}

.top2 > p > span img {
  width: 11%;
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
  width: 100%;
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
