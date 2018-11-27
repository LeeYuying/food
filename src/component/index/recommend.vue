<template>
	<div class="recommend">
		<div class="top">
			<router-link to="/search"><img src="../../assets/images/topsearchicon@3x.png" width=14px height=14px/> 搜索你感兴趣的</router-link>
			<img src="../../assets/images/index_icon_photo@3x.png" @click="toggle()"/>
			<router-link to="/my"><img src="../../assets/images/ms_mail2@3x.png" width=52px height=44px/></router-link>
		</div>
		<div class="add" v-show="show">
			<span></span>
			<ul>
				<li><router-link to="/my"><img src="../../assets/images/sys_pic@3x.png"/>晒作品</router-link></li>
				<li><router-link to="/my"><img src="../../assets/images/sys_sc@3x.png"/>传菜谱</router-link></li>
			</ul>
		</div>
		<!-- 轮播图 -->
		<div class="swipe">
			<mt-swipe :auto="5000">
				<mt-swipe-item v-for='(v,i) in list'>
					<ul>
						<li v-for='(a,i) in list[i].details'>
							<router-link to="" :style="'background:url('+a.src+') center no-repeat;background-size:100% auto;'"></router-link>
							<p>{{a.name}}</p>
							<p>{{a.txt}}</p>
						</li>
					</ul>
					<p>{{v.title}}</p>
					<p>{{v.msg}}</p>
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<!-- 四个图标 -->
		<div class="four">
			<ul>
				<li v-for='(v,i) in four'>
					<router-link :to="v.url"><img :src="v.src"/></router-link>{{v.msg}}
				</li>
			</ul>
		</div>
		<!-- 今日推荐 -->
		<div class="today">
			<p>今日推荐</p>
			<ul>
				<li v-for='(v,i) in today'>
					<router-link :to="v.path"><img :src="v.src" width=100%/></router-link>
				</li>
			</ul>
		</div>
		<!-- 猜你喜欢 -->
		<div class="guess">
			<div>
				<img src="../../assets/images/home_title_love@3x.png" width="30px"/>
				<p>猜你喜欢</p>
				<p>{{time}}为您更新</p>
			</div>
			<ul>
				<li v-for="(v,i) in guess">
					<router-link to=""><img :src="v.src"/></router-link>
					<p>{{v.msg}}</p>
				</li>
			</ul>
		</div>
		<!-- 底部导航 -->
		<div class="nav">
			<ul>
				<li class="current">
					<router-link to="/">
						<img src="../../assets/images/tabbar_01ed@3x.png" width="30px"/>
						<p>推荐</p>
					</router-link>
				</li>
				<li>
					<router-link to="/find">
						<img src="../../assets/images/tabbar_02@3x.png" width="30px"/>
						<p>发现</p>
					</router-link>					
				</li>
				<li>
					<router-link to="/talk">
						<img src="../../assets/images/tabbar_04@3x.png" width="30px"/>
						<p>食话</p>
					</router-link>				
				</li>
				<li>
					<router-link to="/my">
						<img src="../../assets/images/tabbar_05@3x.png" width="30px"/>
						<p>我的</p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
if (hour<10) {
	hour = '0'+hour;
}
if (min<10) {
	min = '0'+min;
}
var time = hour+':'+min;
export default {
  data () {
    return {
			show:false,
			time:time,
			list:[],
			four:[],
			today:[],
			guess:[]
    }
  },
	mounted(){
		this.$http.get('./data/data.json')
	  .then((res)=>{
			this.list = res.data.recommendList;
			this.four = res.data.recommendFour;
			this.today = res.data.recommendToday;
			this.guess = res.data.recommendGuess;
	  })
	},
	methods:{
		toggle(){
			this.show = !this.show
		}
	}
}
</script>
<style>
.recommend{
	position: relative;
	background-color: #FFFFFF;
}
/* 顶部 */
.top{
  width: 100%;
  height: 44px;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  background-color: #FFFFFF;
  z-index: 1;
}
.top a:nth-of-type(1){
  height: 32px;
  line-height: 32px;
  text-decoration: none;
  font-size: 14px;
  color: #aaaaaa;
  background-color: #f5f5f5;
  display: block;
  margin: 6px 52px;
}
.top a:nth-of-type(1) img{
  vertical-align: middle;
}
.top>img{
  position: absolute;
  left: 0px;
  top: 0px;
	width: 52px;
}
.top a:nth-of-type(2){
  position: absolute;
  right: 0px;
  top: 0px;
}

.add{
	position: fixed;
	top: 44px;
	left: 12px;
	z-index: 1;
}
.add span{
	display: block;
	width: 10px;
	height: 10px;
	background-color: #333333;
	transform: rotate(45deg);
	position: absolute;
	top: 3px;
	left: 10px;
}
.add ul{
	margin-top: 8px;
}
.add ul li a{
	display: block;
	width: 104px;
	height: 48px;
	line-height: 48px;
	text-align: center;
	font-size: 16px;
	color: #FFFFFF;
	background-color: #333333;
}
.add ul li:nth-of-type(1) a{
	border-bottom: 1px solid #484848;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
}
.add ul li:nth-of-type(2) a{
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
}
.add ul li a img{
	width: 30px;
	vertical-align: middle;
}
/* 轮播图 */
.swipe{
  margin-top: 44px;
  background-color: #f5f5f5;
  padding-bottom: 10px;
}
.swipe ul{
  height: 90%;
  padding: 0px 12px;
}
.swipe li{
  height: 30%;
  margin-bottom: 4px;
  position: relative;
}
.swipe a{
  display: block;
  width: 100%;
  height: 100%;
}
.swipe ul li p{
  color: #ffffff;
  position: absolute;
  text-shadow: 0px 1px 0px rgba(0,0,0,0.7);
}
.swipe ul li p:nth-of-type(1){
  font-size: 20px;
  font-weight: bold;
  left: 20px;
  bottom: 35px;
}
.swipe ul li p:nth-of-type(2){
  font-size: 12px;
  left: 20px;
  bottom: 15px;
}
.swipe p{
  text-align: center;
  color: #333333;
}
.swipe p:nth-of-type(1){
  font-size: 16px;
  margin-top: -25px;
}
.swipe p:nth-of-type(2){
  font-size: 12px;
  margin-top: 3px;
}
.swipe .mint-swipe-items-wrap{
  padding-bottom: 148%;
}
.swipe .mint-swipe-indicator{
  width: 6px;
  height: 6px;
}
.swipe .mint-swipe-indicator.is-active{
  background: #ff4c39;
  opacity: 1; 
}
/* 四个图标 */
.four ul{
  display: flex;
}
.four li{
  flex: 1;
  margin: 35px 22px 35px 0px;
  text-align: center;
  color: #333333;
  font-size: 12px;
}
.four li:nth-of-type(1){
  margin-left: 22px;
}
.four img{
  width: 100%;
}
/* 今日推荐 */
.today{
	padding: 0px 12px;
}
.today p{
  font-size: 18px;
  color: #333333;
  text-align: center;
  margin-bottom: 10px;
}
.today li{
  margin-bottom: 6px;
}
/* 猜你喜欢 */
.guess{
	padding: 0px 12px 55px;
}
.guess div{
	width: 120px;
	margin: 30px auto 10px;
}
.guess div p:nth-of-type(1){
	font-size: 18px;
	color: #333333;
}
.guess div p:nth-of-type(2){
	font-size: 12px;
	color: #999999;
}
.guess div img{
	float: left;
	margin-right: 5px;
	margin-top: 5px;
}
.guess ul{
	width: 100%;
	overflow: hidden;
}
.guess ul li{
	float: left;
	margin-bottom: 1%;
	width: 49%;
	position: relative;
}
.guess ul li:nth-of-type(2n-1){
	margin-right: 2%;
}
.guess ul li img{
	width: 100%;
	border-radius: 2px;
}
.guess ul li p{
	width: 100%;
	text-align: center;
	font-size: 14px;
	color: #FFFFFF;
	position: absolute;
	left: 0px;
	bottom: 10px;
	text-shadow: 0px 1px 0px rgba(0,0,0,0.7);
}
/* 底部导航 */
.nav{
	width: 100%;
	height: 50px;
	padding: 5px 0px;
	position: fixed;
	left: 0;
	bottom: 0;
	z-index: 1;
	background-color: #FFFFFF;
}
.nav ul{
	text-align: center;
	overflow: hidden;
}
.nav ul li{
	width: 25%;
	float: left;
}
.nav ul li p{
	color: #868686;
	font-size: 12px;
	margin-top: -4px;
}
.nav ul .current p{
	color: #FF4C39;
}
.nav a{
	display: block;
}

</style>