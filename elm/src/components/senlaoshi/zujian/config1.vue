<template>
    <div id="wrap">

			<!--分类部分-->

            
				<div class="select" >
						<ul class="sel-left">
					
						<li :key="index" v-for="(val,index) in config" @click="leftid=val.id,leftdata0=val.sub_categories, btn1()">
              <img :src="['https://fuss10.elemecdn.com/'+val.image_url+'.png']"/>{{val.name}} <span >{{val.count}}</span>
							<img :src="imgjianyou"/>
						</li>											
					</ul>
               <ul class="sel-right">                
               	<li :key="index" v-for="(value,index) in leftdata" @click="$store.state.configname=value.name,hit2(value.id)">
               		{{value.name}}<span>{{value.count}}</span>
               	</li>
               
               </ul>
				</div>

		</div>
</template>

<script>
import { Loading } from 'element-ui';
import imgjianyou from '../../../../static/img/jianyou.png'
export default {
     name: "config1",
  data() {
    return {
      imgjianyou,
      Opbol: false,
      config: [],
      leftid: "",
      leftdata0: [],
      leftdata: [],
      page: ""
    };
  },
   methods: {

   paixu(){
    // https://elm.cangdu.org/shopping/restaurants?latitude=41.10431&longitude=123.06053&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=5
    let loadingInstance1 = Loading.service({ fullscreen: true,text:'加载中...' });
			
    this.$http({
                    method:'get',
                    url:" https://elm.cangdu.org/shopping/restaurants?latitude=41.10431&longitude=123.06053&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=5",
                    //  url:"https://elm.cangdu.org/shopping/restaurants?latitude="+this.$store.state.latitude+"&longitude="+this.$store.state.longitude+"&limit=5&order_by="+this.$store.state.orderby,
                   
                 }).then((res)=>{ loadingInstance1.close();
                     //获取后台数据
                     console.log(res.data);
                   this.$store.state.shopAll=res.data;
                   
                 });



   },
    // 控制分类
    
    btn1(){
          for(var i=0;i<this.leftdata0.length;i++){
 this.leftdata0.forEach((del,index) => {
           if(del.count==0){
             this.leftdata0.splice(index,1);                    
           }
          });
      } 
       this.leftdata= this.leftdata0;
    },
    //  右侧点击
   hit2(a){
     this.$store.state.conbool=false;
      this.$store.state.spid=a;
   },
    // Qing(){          
    //             this.$http({
    //                 method:'get',
    //                 url:"https://elm.cangdu.org/shopping/restaurants?latitude="+this.$store.state.latitude+"&longitude="+this.$store.state.longitude+"&limit=5&order_by="+this.$store.state.orderby,
                   
    //             }).then((res)=>{
    //                 //获取后台数据
    //                 // console.log(res.data);
    //               this.shopall=res.data;
    //             });
    // }
  },
  created(){
    let loadingInstance1 = Loading.service({ fullscreen: true,text:'加载中...' });
			
      //  请求分类"https://elm.cangdu.org/shopping/restaurants?latitude="+this.$store.state.latitude+"&longitude="+this.$store.state.longitude
      this.$http
      .get("https://elm.cangdu.org/shopping/v2/restaurant/category?latitude="+this.$store.state.latitude+"&longitude="+this.$store.state.longitude)
      .then(response => {  loadingInstance1.close();
        this.config = response.data;
         console.log(this.config)       
        this.config.forEach((del,index) => {
           if(del.count==0){
             this.config.splice(index,1);            
           }
         });
        // 右侧默认选择
          this.leftdata=this.config[0].sub_categories;
				 this.leftdata.forEach((del,index) => {
           if(del.count==0){
             this.leftdata.splice(index,1);                             }
          });
      });
      }
}
</script>

<style scoped>
#wrap {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
/*分类部分*/
.select {
  width: 100%;
  overflow: hidden;
 
}
.sel-left {
  width: 50%;
 
}
.sel-left,
.sel-right {
  float: left;

  box-sizing: border-box;
}
.sel-left > li,
.sel-right li {
  width: 86%;
  position: relative;
  font-size: 0.14rem;
  padding: 0 7%;
  height: 0.4rem;
  line-height: 0.4rem;
 
}
.sel-left > li > img:nth-of-type(1) {
  width: 13%;
  float: left;
  margin-right: 0.05rem;
  margin-top: 0.08rem;
}
.sel-left > li > span {
  float: right;
  line-height: normal;
  font-size: 0.1rem;
  background-color: #ccc;
  padding: 0.01rem 0.02rem;
  border-radius: 0.08rem;
  color: #fff;
  margin-top: 0.1rem;
  margin-right: 0.1rem;
}
.sel-left > li > img:nth-of-type(2) {
  width: 4%;
  margin-right: 0.05rem;
  margin-top: 0.08rem;
  position: absolute;
  right: 0.02rem;
  top: 0.05rem;
}
/*右边*/
.sel-right {
  width: 50%;
  /*float: right;*/
 
}
.sel-right li {
  
  display: flex;
  justify-content: space-between;
}
</style>
