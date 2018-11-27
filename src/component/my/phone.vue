<template>
	<div class="phone">
		<p><router-link to="/phone" class="current">手机注册</router-link><router-link to="/email">邮箱注册</router-link></p>
		<p><input type="text" placeholder="手机号"/><span class="send">发送验证码</span></p>
		<input type="password" placeholder="密码"/>
		<input type="text" placeholder="验证码"/>
		<button>注册</button>
	</div>
</template>

<script>
export default{
	data(){
		return{
			
		}
	}
}
</script>

<style scoped>
	.phone>p:nth-of-type(1){
		overflow: hidden;
		text-align: center;
		margin: 0px 15px 30px;
	}
	.phone p a{
		display: block;
		width: 49%;
		height: 28px;
		line-height: 28px;
		font-size: 14px;
		color: #FF5151;
		border: 1px solid #FF5151;
		float: left;
	}
	.phone p a:nth-of-type(1){
		border-bottom-left-radius: 2px;
		border-top-left-radius: 2px;
	}
	.phone p a:nth-of-type(2){
		border-bottom-right-radius: 2px;
		border-top-right-radius: 2px;
	}
	.phone .current{
		color: #FFFFFF;
		background-color: #FF5151;
	}
	.phone input{
		width: 100%;
		height: 30px;
		padding: 10px 16px;
		color: #333333;
		font-size: 16px;
		border: none;
	}
	.phone button{
		width: 90%;
		height: 44px;
		color: #FFFFFF;
		background-color: #ff5151;
		line-height: 44px;
		text-align: center;
		display: block;
		margin: 15px auto;
		border-radius: 2px;
		font-size: 16px;
		border: none;
		outline: none;
	}
	.phone p:nth-of-type(2){
		position: relative;
	}
	.phone .send{
		display: block;
		width: 70px;
		height: 30px;
		color: #FFFFFF;
		background-color: #FF5151;
		font-size: 14px;
		padding: 0px 10px;
		line-height: 30px;
		position: absolute;
		top: 10px;
		right: 15px;
	}
</style>
