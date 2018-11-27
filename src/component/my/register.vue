<template>
	<div class="register">
		<div class="registerTop">
			<span @click="back()"><img src="../../assets/images/back_red.png" width="12px"/>返回</span>
			<span>注册美食杰</span>
			<router-link to="/my">登录</router-link>
		</div>
		<router-view></router-view>
		<div class="other">
			<router-link to=""><img src="../../assets/images/QQ_login@3x.png" width="62px"/><p>QQ登录</p></router-link>
			<router-link to=""><img src="../../assets/images/weibo_login@3x.png" width="62px"/><p>微博登录</p></router-link>
		</div>	
	</div>
</template>

<script>
export default{
	data(){
		return{
			
		}
	},
	methods:{
		back(){
			this.$router.go(-1)
		}
	}
}
</script>

<style scoped>
	.register{
		background-color: #F5F5F5;
		height: 100%;
	}
	.registerTop{
		height: 44px;
		position: relative;
		text-align: center;
		line-height: 44px;
		margin-bottom: 20px;
		background-color: #FFFFFF;
	}
	.registerTop span:nth-of-type(1){
		position: absolute;
		top: 0px;
		left: 15px;
		color: #FF4C39;
		font-size: 16px;
	}
	.registerTop span:nth-of-type(1) img{
		vertical-align: middle;
		margin-right: 8px;
	}
	.registerTop a{
		position: absolute;
		right: 15px;
		top: 0px;
		color: #FF4C39;
		font-size: 16px;
	}
	.registerTop span:nth-of-type(2){
		font-size: 18px;
	}
	
	.other{
		width: 154px;
		margin: 35px auto;
		text-align: center;
		overflow: hidden;
	}
	.other a{
		display: block;
		float: left;
	}
	.other a:nth-of-type(1){
		margin-right: 30px;
	}
	.other a img{
		margin-bottom: 10px;
	}
	.other a p{
		font-size: 14px;
		color: #000000;
	}
</style>
