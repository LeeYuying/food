<template>
	<div class="my">
		<div class="myTop">
			<span @click="back()"><img src="../../assets/images/back_red.png" width="12px"/>返回</span>
			<span>登录美食杰</span>
			<router-link to="/register">注册</router-link>
		</div>
		<input type="text" placeholder="手机号/邮箱/用户名"/>
		<input type="password" placeholder="密码"/>
		<button>登录</button>
		<p>忘记密码？</p>
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
	.my{
		background-color: #F5F5F5;
		height: 100%;
	}
	.myTop{
		height: 44px;
		position: relative;
		text-align: center;
		line-height: 44px;
		margin-bottom: 20px;
		background-color: #FFFFFF;
	}
	.myTop span:nth-of-type(1){
		position: absolute;
		top: 0px;
		left: 15px;
		color: #FF4C39;
		font-size: 16px;
	}
	.myTop span:nth-of-type(1) img{
		vertical-align: middle;
		margin-right: 8px;
	}
	.myTop a{
		position: absolute;
		right: 15px;
		top: 0px;
		color: #FF4C39;
		font-size: 16px;
	}
	.myTop span:nth-of-type(2){
		font-size: 18px;
	}
	.my input{
		width: 100%;
		height: 30px;
		padding: 10px 16px;
		color: #333333;
		font-size: 16px;
		border: none;
	}
	.my button{
		width: 90%;
		height: 44px;
		color: #FFFFFF;
		background-color: #ff5151;
		line-height: 44px;
		text-align: center;
		display: block;
		margin: 10px auto;
		border-radius: 2px;
		font-size: 16px;
		border: none;
		outline: none;
		margin-top: 20px;
	}
	.my p{
		text-align: center;
		color: #999999;
		font-size: 14px;
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
