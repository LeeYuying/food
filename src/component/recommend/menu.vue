<template>
	<div class="menu">
		<div class="menuTop">
			<router-link to="/search"><img src="../../assets/images/topsearchicon@3x.png" width=14px/> 搜索任何你想要的</router-link>
			<span @click="back()"><img src="../../assets/images/ms_back_icon2@3x.png" width="15px"/></span>
		</div>
		<div class="box">
			<div class="left">
				<ul>
					<li v-for="(v,i) in classify">
						<img :src="v.src" width="30px"/>
						<p>{{v.msg}}</p>
					</li>
				</ul>
			</div>
			<div class="right">
				<div v-for="(v,i) in classify">
					<ul>
						<li v-for="(a,i) in classify[i].pic">
							<router-link :to="a.path">
								<img :src="a.src" width="100%"/>
								<p>{{a.name}}</p>
							</router-link>							
						</li>
					</ul>
				</div>				
			</div>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			classify:[]
		}
	},
	methods:{
		back(){
			this.$router.go(-1)
		}
	},
	mounted(){
		this.$http.get('./data/data.json')
		.then((res)=>{
				this.classify = res.data.menuClassify;
		})
	}
}
</script>
<style scoped>
	.menu{
		height: 100%;
		overflow: hidden;
		background-color: #FFFFFF;
	}
	.menuTop{
		position: fixed;
		width: 100%;
		height: 44px;
		background-color: #FFFFFF;
		font-size: 14px;
		text-align: center;
		z-index: 1;
	}
	.menuTop a{
		margin: 6px 10px 0px 50px;
		line-height: 32px;
		font-size: 14px;
		color: #AAAAAA;
		background-color: #F5F5F5;
		display: block;
		height: 32px;
	}
	.menuTop a img{
		vertical-align: middle;
	}
	.menuTop span{
		position: absolute;
		left: 15px;
		top: 0px;
	}
	.box{
		height: 100%;
		margin-top: 70px;
		position: relative;
		overflow: hidden;
	}
	.left{
		width: 100px;
		height: 100%;
		position: absolute;
	}
	.left ul{
		width: 100%;
		height: 100%;
		overflow: scroll;
	}
	.left ul li{
		width: 100%;
		padding: 22px 0px;
		text-align: center;
	}
	.left ul li:nth-of-type(1){
		background-color: #F5F5F5;
	}
	.left ul:after{
		content: '';
		display: block;
		height: 50px;
	}
	.left ul li p{
		font-size: 14px;
		color: #333333;
		margin-top: 3px;
	}
	.right{
		margin-left: 100px;
		text-align: center;
	}
	.right ul li{
		width: 26%;
		float: left;
		margin-left: 16px;
		margin-bottom: 20px;
	}
	.right ul li a p{
		font-size: 12px;
		color: #000000;
	}
</style>