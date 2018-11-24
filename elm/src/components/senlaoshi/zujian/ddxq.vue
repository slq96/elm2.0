<template>
    <div class="wrap">
        <div class="hand">
            <img @click="back()" :src="imgback">
            <p>订单详情</p>
        </div>
        <div class="por">
            <img :src="'//elm.cangdu.org/img/'+orde._doc.restaurant_image_url">
             <p>{{orde._doc.status_bar.title}}</p>
             <span>再来一单</span>
        </div>
        <div class="Effect">
            <div class="one">
               <img :src="'//elm.cangdu.org/img/'+orde._doc.restaurant_image_url">
               <p>{{orde._doc.restaurant_name}}</p>
               <span @click="$router.push({name:'add'})"> > </span>
            </div>
            <div class="two">
                <div>{{orde._doc.basket.group[0][0].name}}</div>
                <span>￥{{orde._doc.basket.group[0][0].price}}</span>
                <p>x{{orde._doc.basket.group[0][0].quantity}}</p>
            </div>
            <div class="three">
                <p>{{orde._doc.basket.deliver_fee.name}}</p>
                <span>{{orde._doc.basket.deliver_fee.price}}</span>
            </div>
            <div class="four">
                <p>实付{{orde._doc.total_amount}}.00</p>
            </div>
        </div>
        <div class="dist">
            <p id="ps">配送信息</p>
            <p id="sj">送达时间 : {{orde.deliver_time}}</p>
            <p id="dz1">送货地址 : {{orde.addressDetail}}</p>
            <p id="dz2">{{orde.phone}}</p>
            <p id="fs">配送方式 : 蜂鸟专送</p>
        </div>
    </div>
</template>

<script>
import { Loading } from 'element-ui';
let imgback = require('../../../../static/img/back.png');
export default {
  name: "ddxq",
  data() {
    return {
      orde: "",
      imgback
    };
  },
  created() {
    let loadingInstance1 = Loading.service({ fullscreen: true,text:'加载中...' });
		
    this.$http
      .get(
        "https://elm.cangdu.org/bos/v1/users/" +
          this.$store.state.user_id +
          "/orders/" +
          this.$store.state.orders +
          "/snapshot"
      )
      .then(response => {	 loadingInstance1.close();
        this.orde = response.data;
      });
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.wrap {
  width: 100%;
  font-size: 0.15rem;
  box-sizing: border-box;
}
.hand {
  width: 100%;
  height: 0.5rem;
  background-color: rgb(49, 144, 232);
  color: cornsilk;
  overflow: hidden;
  line-height: 0.5rem;
  text-align: center;
}
.hand > img {
  float: left;
  width: 0.2rem;
  margin: 0.15rem 0 0 0.1rem;
}
.hand > p {
  margin-left: 1.2rem;
  float: left;
  font-size: 0.22rem;
  font-weight: 700;
}
/* 分割 */
.por {
  width: 100%;
  height: 1.7rem;
  background: white;
  text-align: center;
  margin-bottom: 0.1rem;
}
.por > img {
  border: 0.05rem solid #3190e8;
  border-radius: 50%;
  height: 0.6rem;
  width: 0.6rem;
  margin-top: 0.1rem;
}
.por > p {
  font-size: 0.2rem;
  margin-top: 0.1rem;
}
.por > span {
  border: 0.01rem solid #3190e8;
  display: inline-block;
  width: 0.8rem;
  height: 0.25rem;
  line-height: 0.25rem;
  border-radius: 0.04rem;
  margin-top: 0.2rem;
  font-size: 0.12rem;
  color: #3190e8;
}
/* 效果 */
.Effect {
  box-sizing: border-box;
  width: 100%;
  background-color: white;
  height: 2rem;
  margin-bottom: 0.1rem;
}
.one {
  box-sizing: border-box;
  padding: 0 0.1rem;
  overflow: hidden;
  border-bottom: 0.01rem solid rgb(225, 225, 225);
  height: 0.5rem;
  line-height: 0.5rem;
}
.one > img {
  width: 0.3rem;
  float: left;
  margin-top: 0.05rem;
}
.one > p {
  margin-left: 0.1rem;
  float: left;
}
.one > span {
  font-size: 0.25rem;
  float: right;
}

.two {
  box-sizing: border-box;
  padding: 0 0.1rem;
  overflow: hidden;
  border-bottom: 0.01rem solid rgb(225, 225, 225);
  height: 0.5rem;
  line-height: 0.5rem;
}
.two > div {
  float: left;
}
.two > span {
  float: right;
}
.two > p {
  float: right;
  margin-right: 0.3rem;
  color: rgb(160, 160, 160);
}

.three {
  box-sizing: border-box;
  padding: 0 0.1rem;
  overflow: hidden;
  border-bottom: 0.01rem solid rgb(225, 225, 225);
  height: 0.5rem;
  line-height: 0.5rem;
}
.three > p {
  float: left;
}
.three > span {
  float: right;
}

.four {
  box-sizing: border-box;
  padding: 0 0.1rem;
  overflow: hidden;
  height: 0.5rem;
  line-height: 0.5rem;
}
.four > p {
  color: #fb6b23;
  float: right;
}

.dist {
  box-sizing: border-box;
  padding: 0 0.1rem;
  width: 100%;
  background-color: white;
  height: 2.15rem;
  margin-bottom: 0.1rem;
  overflow: hidden;
}
#ps {
  margin: 0.15rem 0;
  font-size: 0.2rem;
}
#sj {
  margin: 0.25rem 0;
  color: #666;
}
#dz1 {
  margin: 0.25rem 0;
  color: #666;
}
#dz2 {
  margin-left: 0.7rem;
  color: #666;
}
#fs {
  margin: 0.3rem 0;
  color: #666;
}
</style>