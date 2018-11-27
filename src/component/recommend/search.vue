<template>
	<div class="search">
		<div class="searchTop">
			<router-link to="">搜索</router-link>
			<p><input type="text" placeholder="菜谱名/食材名"/></p>
			<span @click="back()"><img src="../../assets/images/ms_back_icon2@3x.png" width="15px"/></span>
		</div>
		<p>请输入要搜索的关键字</p>
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
	.search{
		background-color: #FFFFFF;
		height: 100%;
	}
	.searchTop{
		height: 44px;
		background-color: #FFFFFF;
		border-bottom: 1px solid #EEEEEE;
		font-size: 14px;
	}
	.searchTop p{
		height: 100%;
		margin-left: 65px;
		margin-right: 75px;
	}
	.searchTop input{
		width: 100%;
		height: 32px;
		margin: 6px 0px;
		padding-left: 8px;
		float: right;
		background-color: #eeeeee;
		outline: none;
		border: none;
	}
	.searchTop span{
		position: absolute;
		left: 15px;
		top: 0px;
	}
	.searchTop a{
		width: 55px;
		height: 32px;
		color: #FFFFFF;
		background-color: #FF4C39;
		border-radius: 2px;		
		text-align: center;
		line-height: 32px;
		position: absolute;
		right: 10px;
		top: 6px;
	}
	.search>p{
		text-align: center;
		font-size: 16px;
		color: #666666;
		height: 64px;
		line-height: 64px;
	}
</style>