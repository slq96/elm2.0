<template >
    <div id="wrap" >
			<ul class="ul1" v-if="sor">
				<li :key="index" @click="order1=order[index],hit(index)" v-for="(val,index) in arr">
				<img :key="index" :src="val.src"/>
					<p id="dui"><span>{{val.name}}</span><img v-if="pbool==index" :src="img" alt=""></p>
				</li>
				
			</ul>

		</div>
</template>

<script>
export default {
  name: "config2",
  data() {
    return {
        sor:true,
        order1:"",
        order:[4,5,6,1,2,3],
        img:require("../../../../static/img/dui.png"),
      arr: [
        {
          name: "智能排序",
          src:require("../../../../static/img/p1.png")
        },
        { name: "距离最近",
         src:require("../../../../static/img/p2.png") },
        { name: "销量最高", src:require("../../../../static/img/p3.png") },
        { name: "起送价最低", src:require("../../../../static/img/p4.png") },
        { name: "配送速度最快", src:require("../../../../static/img/p5.png") },
        { name: "评分最高", src:require("../../../../static/img/p6.png") }
      ],
      // 对号
      pbool:"",
    };
  },
  methods: {
    hit(a) {
      
      this.$store.state.orderby=this.order1;
      this.$store.state.conbool=false;
      // 出现对号
     this.pbool=a;
     



// 获取排序后
  // 获取商铺信息
      this.$http.get("https://elm.cangdu.org/shopping/restaurants?latitude="+this.$store.state.latitude+"&longitude="+this.$store.state.longitude+"&limit=10&&restaurant_category_ids[]="+this.$store.state.spid+"&order_by="+this.$store.state.orderby).then(
					(res) => {
           this.$store.state.shopAll=res.data;
          //  console.log(this.$store.state.shopAll)
				  
				});

    }
  },
  created() {



    
  }
};
</script>


<style scoped>
#wrap {
  width: 100%;
  height: 100%;
}

.ul1 {
  width: 100%;
}

.ul1 li {
  width: 100%;
  height: 0.5rem;
  color: #666;

  line-height: 0.5rem;
}

.ul1 li p {
  background-color: #ffffff;
  height: 0.49rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.01rem solid #e4e4e4;
}
.ul1 li img {
  width: 0.2rem;
  height: 0.2rem;
  float: left;
  margin: 0.15rem;
}

.ul1 li span {
  height: 0.4rem;
}

#dui{
  display: flex;
  justify-content:space-between ;
}
</style>




