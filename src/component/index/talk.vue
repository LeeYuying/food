<template>
	<div id="talk">
		<div class="talkTop">
			<span>食话</span>
			<img src="../../assets/images/index_icon_photo@3x.png" @click="toggle()"/>
			<router-link to="/my"><img src="../../assets/images/home_talk_attention@3x.png" width=34px height=44px/></router-link>
			<router-link to=""><img src="../../assets/images/search_topbar@3x.png" width=56px height=44px/></router-link>
		</div>	
		<div class="add" v-show="show">
			<span></span>
			<ul>
				<li><router-link to="/my"><img src="../../assets/images/sys_pic@3x.png"/>发作品</router-link></li>
				<li><router-link to="/my"><img src="../../assets/images/h_sys_sh@3x.png"/>发食话</router-link></li>
			</ul>
		</div>
		
		<div class="talkSwipe">
			<mt-swipe :auto="4000">
				<mt-swipe-item v-for='(v,i) in swipe'>
					<router-link to=""><img :src="v" width="100%"/></router-link>
				</mt-swipe-item>
			</mt-swipe>
		</div>
		
		<div class="four">
			<ul>
				<li v-for='(v,i) in four'>
					<router-link to=""><img :src="v.src"/></router-link>{{v.msg}}
				</li>
			</ul>
		</div>
		
		<router-view></router-view>
		
		<div class="nav">
			<ul>
				<li>
					<router-link to="/">
						<img src="../../assets/images/tabbar_01@3x.png" width="30px"/>
						<p>推荐</p>
					</router-link>
				</li>
				<li>
					<router-link to="/find">
						<img src="../../assets/images/tabbar_02@3x.png" width="30px"/>
						<p>发现</p>
					</router-link>					
				</li>
				<li class="current">
					<router-link to="/talk">
						<img src="../../assets/images/tabbar_04ed@3x.png" width="30px"/>
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
export default{
	data () {
		return {
			show:false,
			swipe:[],
			four:[]
		}
	},
	mounted(){
		this.$http.get('./data/data.json')
		.then((res)=>{
				this.swipe = res.data.talkSwipe;
				this.four = res.data.talkFour;
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
	#talk{
		width: 100%;
		background-color: #FFFFFF;
		margin-top: 44px;
		margin-bottom: 60px;
	}
	#talk .talkTop{
		width: 100%;
		height: 44px;
		position: fixed;
		left: 0;
		top: 0;
		text-align: center;
		background-color: #FFFFFF;
		z-index: 1;
	}
	#talk .talkTop a{
		position: absolute;
		top: 0px;
	}
	#talk .talkTop>img{
		position: absolute;
		top: 0px;
		left: 0px;
		width: 52px;
	}
	#talk .talkTop a:nth-of-type(1){
		right: 16px;
	}
	#talk .talkTop a:nth-of-type(2){
		right: 50px;
	}
	#talk .talkTop span{
		line-height: 44px;
		font-size: 18px;
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
	
	#talk .talkSwipe{
		background-color: #F5F5F5;
		padding-bottom: 10px;
	}
	#talk .four{
		padding: 0px;
	}
	#talk .four ul{
	  display: flex;
	}
	#talk .four li{
	  flex: 1;
	  margin: 20px 22px 35px 0px;
	  text-align: center;
	  color: #333333;
	  font-size: 12px;
	}
	#talk .four li:nth-of-type(1){
	  margin-left: 22px;
	}
	#talk .four img{
	  width: 100%;
	}
	#talk .nav{
		width: 100%;
		height: 50px;
		padding: 5px 0px;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 1;
		background-color: #FFFFFF;
	}
	#talk .nav ul{
		text-align: center;
		overflow: hidden;
	}
	#talk .nav ul li{
		width: 25%;
		float: left;
	}
	#talk .nav ul li p{
		color: #868686;
		font-size: 12px;
		margin-top: -4px;
	}
	#talk .nav ul .current p{
		color: #FF4C39;
	}
	#talk .nav a{
		display: block;
	}
	#talk .talkSwipe a{
		display: block;
		z-index: 0;
	}
	#talk .talkSwipe .mint-swipe-items-wrap{
		padding-bottom: 50%;
	}
	#talk .talkSwipe .mint-swipe-indicators{
		bottom: -2px;
	}
	#talk .talkSwipe .mint-swipe-indicator.is-active{
		background: #FF4C39;
		opacity: 1;
	}	
</style>