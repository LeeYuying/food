<template>
	<div class="hot">
		<p>
			<router-link to="/newest">最新</router-link>
			<router-link to="/hotest" class="current">最热</router-link>
		</p>
		<div v-for="(v,i) in list">
			<div>
				<router-link to=""><img :src="v.src" width="30px"/></router-link>
				<p><router-link to="">{{v.name}}</router-link></p>
				<p>{{v.time}}<router-link to="">{{v.from}}</router-link></p>
			</div>
			<p>{{v.msg}}</p>
			<ul>
				<li v-for="(a,i) in list[i].pic"><router-link to=""><img :src="a" width="100%"/></router-link></li>
			</ul>
			<p>
				<router-link to=""><img src="../../assets/images/comment24@3x.png"/>{{v.num1}}</router-link>
				<router-link to=""><img src="../../assets/images/heart24@3x.png"/>{{v.num2}}</router-link>
			</p>
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
				this.list = res.data.hotList;
		})
	}
}
</script>
<style scoped>
	.hot>div{
		border-bottom: 1px solid #F5F5F5;
		padding: 15px 0px;
	}
	.hot div div{
		margin-bottom: 6px;
	}
	.hot>div>p:nth-of-type(1){
		margin: 0px 20px 8px 53px;
	}
	.hot>div>div>a{
		float: left;
		margin-left: 18px;
		margin-right: 5px;
	}
	.hot>div>div>p:nth-of-type(1){
		line-height: 15px;
	}
	.hot>div>div>p:nth-of-type(1) a{
		font-size: 14px;
		color: #FF4C39;
	}
	.hot>div>div>p:nth-of-type(2){
		font-size: 12px;
		color: #999999;
	}
	.hot>div>div>p:nth-of-type(2) a{
		color: #1995f5;
	}
	.hot div ul{
		width: 80%;
		margin-left: 53px;
		overflow: hidden;
	}
	.hot div ul li{
		width: 30%;
		float: left;
		margin-right: 8px;
		margin-bottom: 5px;
	}
	.hot>div>p:nth-of-type(2){
		text-align: right;
		padding-right: 15px;
	}
	.hot>div>p:nth-of-type(2) img{
		width: 12px;
		margin-left: 8px;
		margin-right: 1px;
		vertical-align: middle;
	}
	.hot>div>p:nth-of-type(2) a{
		font-size: 12px;
		color: #AAAAAA;
	}
	.hot>p{
		width: 150px;
		margin: 0px auto;
		text-align: center;
		margin-bottom: 25px;
		overflow: hidden;
	}
	.hot>p>a{
		display: block;
		float: left;
		width: 48%;
		border: 1px solid #FF4C39;
		padding: 6px 0px;
		font-size: 12px;
		color: #FF4C39;
	}
	.hot>p>a:nth-of-type(1){
		border-bottom-left-radius: 6px;
		border-top-left-radius: 6px;
	}
	.hot>p>a:nth-of-type(2){
		border-bottom-right-radius: 6px;
		border-top-right-radius: 6px;
	}
	.hot .current{
		background-color: #FF4C39;
		color: #FFFFFF;
	}
</style>