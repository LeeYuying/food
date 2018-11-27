<template>
	<div class="food">
		<div class="foodTop">
			<router-link to="/find"><img src="../../assets/images/back_red.png" width="12px"/>发现</router-link>
			<span>当季食材</span>
		</div>
		<div class="box">
			<ul>
				<li v-for="(v,i) in list"><router-link to="">
					<img :src="v.src"/>
					<p>{{v.name}}</p>
					<p><span>{{v.function1}}</span><span>{{v.function2}}</span></p>
					<p><img :src="v.small"/>{{v.energy}}</p>
				</router-link></li>
			</ul>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			list:[]
		}
	},
	mounted(){
		this.$http.get('./data/data.json')
		.then((res)=>{
			this.list = res.data.foodList
		})
	}
}
</script>
<style scoped>
	.foodTop{
		width: 100%;
		height: 44px;
		position: fixed;
		top: 0px;
		left: 0px;
		overflow: hidden;
		text-align: center;
		background-color: #FFFFFF;
		z-index: 1;
	}
	.foodTop a{
		position: absolute;
		top: 0px;
		left: 8px;
		line-height: 46px;
		font-size: 16px;
		color: #FF5151;
	}
	.foodTop a img{
		vertical-align: middle;
		margin-right: 8px;
	}
	.foodTop span{
		font-size: 18px;
		line-height: 48px;
	}
	.food .box{
		background: #fafafa;
		margin-top: 44px;
		overflow-y: scroll;
		overflow-x: hidden;
	}
	.food .box ul li{
		border-bottom: 1px solid #e6e6e6;
		width: 100%;
	}
	.food .box ul li a{
		display: block;
		width: 100%;
		padding: 12px 15px;
		overflow: hidden;
	}
	.food .box ul li a>img{
		width: 90px;
		float: left;
	}
	.food .box ul li a p{
		margin-left: 100px;
	}
	.food .box ul li a p:nth-of-type(1){
		font-size: 16px;
		color: #000000;
		line-height: 28px;
		margin-bottom: 8px;
	}
	.food .box ul li a p span{
		font-size: 14px;
		color: #686868;
		background-color: #e8e8e8;
		line-height: 28px;
		padding: 4px 10px;
		margin: 2px;
	}
	.food .box ul li a p:nth-of-type(3){
		font-size: 14px;
		margin-top: 4px;
		color: #46c01b;
	}
	.food .box ul li a p:nth-of-type(3) img{
		width: 18px;
		vertical-align: middle;
		margin-right: 4px;
	}
	.food .box ul li:nth-of-type(3) a p:nth-of-type(3){
		color: #ffcc00;
	}
</style>