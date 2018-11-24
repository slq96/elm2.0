<template>
   <div class="ZHXX">
    <div class="topmy">
      <img @click="going()" src="../../../static/imgs/jian.png" alt="">
      <h3>账户信息</h3>
      </div>


    <div class="xxid">
         <div class="topPic">
        <p>头像</p>
        <img class="pic02" src="../../../static/imgs/jianyou.png" alt="">
       <p>
    <input type="file" id="file_3" onchange="settu('file_3','preview3')" style="display: none;" />
					<label for="file_3">
						<img id="preview3" style="width: 50px;height: 50px; border-radius: 25px;" src="../../../static/imgs/topPict.png"/>						
					</label >
</p>
        
         </div>
         <div @click="YHM()" class="YHM">
             <p>用户名</p>
             <img src="../../../static/imgs/jianyou.png" alt="">
             <span>1231231</span>
             
         </div>
         <!-- 收货地址 -->
         <div @click="SHDz()" class="SHDZ">
             <p>收货地址</p>
             <span></span>
             <img src="../../../static/imgs/jianyou.png" alt="">
         </div>
         <!-- 绑定手机 -->
        <p>绑定手机</p>
        <div @click="bvh=!bvh" class="BDSJ">
            <img src="../../../static/imgs/sj.png" alt="">
             <p>绑定手机</p>
             <img src="../../../static/imgs/jianyou.png" alt="">
         </div>
         <!-- 安全设置 -->
         <p>安全设置</p>
         <div @click="DLmm()" class="DLMM">
             <p>登录密码</p>
             <img src="../../../static/imgs/jianyou.png" alt="">
             <span>修改</span>
             
         </div>
    </div>
    <!-- 账号绑定 -->
    <button @click="hvb=!hvb">退出登录</button>
    <!-- 弹框 -->
    <div v-if="hvb" class="Mengban">
    <div class="biukuang">
    <p>!</p>
    <h1>是否登录</h1>
    <p v-if="hvb" @click="hvb=!hvb">再等等</p>
    <p @click="going()">退出登录</p>
    </div>
    </div>
     <!-- 弹框手机绑定 -->
     <div v-if="bvh" class="SJbdapp">
       <p>!</p>
       <h4>请在手机APP中设置</h4>
       <p v-if="bvh" @click="bvh=!bvh">确认</p>
     </div>
   </div>     
</template>
<style scoped>
      .APPvue{
    width: 100%;
    height: 100%;
}
 .topmy{
      width: 100%;
      height: 0.5rem;
      background-color:#3190e8;
      color: #ffffff;
      line-height: 0.5rem;
      text-align: center;
      overflow: hidden;
      position: relative;
  }
.Mengban{
    width: 100%;
    height: 100%;
    background-color:rgba(0,0,0,0.5);
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
}
  .topmy img{
      width: 4%;
      position: absolute;
      top: 0.1rem;
     left: 0.1rem;
  }
.xxid{
    width: 100%;
    margin-top: 0.1rem;
}
.topPic p{
    margin-left: 0.2rem;
}
.topPic{
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    position: relative;
    border-bottom:0.01rem solid #f2f2f2; 
}
.pic01{
width: 17%;
position: absolute;
top: 0.1rem;
right: 0.3rem;
}
.pic02{
    float: right;
    margin: -0.5rem 0.1rem;
}

.YHM,.SHDZ,.DLMM{
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    border-bottom:0.01rem solid #e4e4e4;
}
.YHM p,.SHDZ p,.DLMM p{
    margin-left: 0.2rem;
    float: left;
}
.BDSJ p{
    float: left;
}
.YHM span,.SHDZ span,.DLMM span{
    float: right;
}
.YHM img,.SHDZ img,.DLMM img{
    float: right;
    margin: 0.16rem 0.16rem;
}
.xxid >p{
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    border-bottom:0.01rem solid #e4e4e4; 
    font-size: 0.13rem;
    color: #666;
}
.BDSJ{
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    border-bottom:0.01rem solid #e4e4e4;
}
.BDSJ >img:nth-of-type(1){
    width: 8%;
    margin: 0.1rem 0.11rem;
    float: left;
}
.BDSJ >img:nth-of-type(2){
    float: right;
    margin: 0.16rem 0.16rem;
}
button{
   margin: 0.5rem 0.15rem; 
   width: 92%;
   height: 0.35rem;
   border-radius: 0.08rem; 
   background: #d8584a;
   color: white;
}
.biukuang{
    width: 94%;
    height: 50%;
    background-color:#ffffff;
    position: absolute;
    top: 1rem;
    left: 0.1rem;
}
.biukuang>p:nth-of-type(1){
    border: 0.05rem solid rgb(248, 187, 134);
    font-size: 1rem;
     color: rgb(248, 187, 134); 
    text-align: center;
    width: 43%;
    height: 45%;
    line-height:1.5rem;
    border-radius: 50%;
    margin: 0.2rem auto;
}
.biukuang h1{
    text-align: center;
}
.biukuang>p:nth-of-type(2),.biukuang>p:nth-of-type(3){
  float: left;
  padding: 0.1rem 0.2rem;
  background: #c1c1c1;
  border-radius: 0.08rem;
  margin: 0.2rem 0.3rem;
  width:20%;
  text-align: center;
}

.SJbdapp{
    width: 60%;
    height: 35%;
    background-color:#ffffff;
    position: absolute;
    top: 1.5rem;
    left: 0.8rem;
   
}
.SJbdapp h4{
    text-align: center;
}
.SJbdapp>p:nth-of-type(1){
     color: rgb(248, 187, 134); 
    border: 0.03rem solid rgb(248, 187, 134);
    font-size: 0.6rem;
    text-align: center;
    width: 35%;
    height: 32%;
    line-height:0.8rem;
    border-radius: 50%;
    margin: 0.2rem auto;
}
.SJbdapp >p:nth-of-type(2){
    text-align: center;
    width: 90%;
    padding: 0.1rem;
    background-color: #4cd964;
    border-bottom-left-radius: .08rem;
    border-bottom-right-radius: .08rem;
    margin-top: 0.1rem;
    color: #ffffff;
}

</style>
<script>
    export default{
        name:"ZHXX",
        data(){
            return{
              hvb:false,
              bvh:false
            }
        },
        methods:{
         going(){
         	console.log(33)
            this.$router.push({name:"my"});
         },
         back(){
             this.$router.back();
         },
         YHM(){
             this.$router.push({name:"XGYHM"})
         },
         SHDz(){
             this.$router.push({
            name:"Bjdz"
             })
         },
         DLmm(){
             this.$router.push({
                name:"findmima"
             })
         },
            settu(val1, val2){
                    //下面用于图片上传预览功能
// function setImagePreview(val1, val2) {
	//文件
	var docObj = document.getElementById(val1);
	//图片
	var imgObjPreview = document.getElementById(val2);
	if(docObj.files && docObj.files[0]) {
		//火狐下，直接设img属性
		//				imgObjPreview.style.display = 'block';
		//				imgObjPreview.style.width = '50px';
		//				imgObjPreview.style.height = '50px';
		//imgObjPreview.src = docObj.files[0].getAsDataURL();
		//火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
		imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
	} else {
		//IE下，使用滤镜
		docObj.select();
		var imgSrc = document.selection.createRange().text;
		var localImagId = document.getElementById("localImag");
		//必须设置初始大小
		//				localImagId.style.width = "50px";
		//				localImagId.style.height = "50px";
		//				//图片异常的捕捉，防止用户修改后缀来伪造图片
		//				try {
		//					localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
		//					localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
		//				} catch(e) {
		//					alert("您上传的图片格式不正确，请重新选择!");
		//					return false;
		//				}
		imgObjPreview.style.display = 'none';
		document.selection.empty();
	}
	//			alert($("#preview3").attr("src"))
    return true;
    //图片转化64位 

$("#file_3").change(function() {
	run(this, function(data) {
		$('#preview3').attr('src', data);
		//存储图片
		alert("妆花完成")
		console.log(data)
	});
});


}

            }
        // }
    }
    



</script>