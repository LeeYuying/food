<template>
	<div class="register">
		<p><router-link to="/phone">手机注册</router-link><router-link to="/email" class="current">邮箱注册</router-link></p>
		<input type="text" placeholder="邮箱"/>
		<input type="password" placeholder="密码"/>
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
	.register>p:nth-of-type(1){
		overflow: hidden;
		text-align: center;
		margin: 0px 12px 30px;
	}
	.register p a{
		display: block;
		width: 49%;
		height: 28px;
		line-height: 28px;
		font-size: 14px;
		color: #FF5151;
		border: 1px solid #FF5151;
		float: left;
	}
	.register .current{
		color: #FFFFFF;
		background-color: #FF5151;
	}
	.register input{
		width: 100%;
		height: 30px;
		padding: 10px 16px;
		color: #333333;
		font-size: 16px;
		border: none;
	}
	.register button{
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
</style>
