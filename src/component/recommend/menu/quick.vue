<template>
	<div class="quick">
		<div class="quickTop">
			<router-link to="/"><img src="../../../assets/images/20180816120753_729.png" width="86px"/></router-link>
			<p><img src="../../../assets/images/topsearchicon@3x.png" width=16px/><input type="text" placeholder="搜索你想找的菜"/></p>	
			<span>搜索</span>
			<router-link to="/menu">菜谱大全</router-link>
		</div>
		<div class="ten">
			<h1>快手菜</h1>
			<p>快手菜精品菜谱TOP10</p>
			<ul>
				<li v-for="(v,i) in ten">
					<router-link to="">
						<div><img :src="v.src"/></div>
						<div>
							<p>{{v.name}}</p>
							<p>
								<img src="../../../assets/images/20180831142237_413.png" width="16px"/>
								<img src="../../../assets/images/20180831142237_413.png" width="16px"/>
								<img src="../../../assets/images/20180831142237_413.png" width="16px"/>
								<img src="../../../assets/images/20180831142237_310.png" width="16px"/>
								<img src="../../../assets/images/20180831142237_552.png" width="16px"/>
							</p>
							<p><span>{{v.collect}}收藏</span><span>{{v.look}}浏览</span></p>
						</div>						
					</router-link>
				</li>
			</ul>
		</div>	
	</div>
</template>

<script>
export default{
	data(){
		return{
			ten:[]
		}
	},
	mounted(){
		this.$http.get('./data/data.json')
		.then((res)=>{
				this.ten = res.data.quickTen;
		})
	}
}
</script>

<style scoped>
	.quick{
		background-color: #FFFFFF;
	}
	.quickTop{
		width: 100%;
		height: 44px;
		background-color: #FFFFFF;
		border-bottom: 1px solid #EEEEEE;
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 1;
	}
	.quickTop>p>img{
		position: absolute;
		left: 90px;
		top: 15px;
	}
	.quickTop a:nth-of-type(1){
		position: absolute;
		left: 0px;
		top: 0px;
	}
	.quickTop p{
		margin-left: 85px;
		margin-right: 120px;
		line-height: 42px;
	}
	.quickTop p input{
		font-size: 12px;
		width: 100%;
		border: none;
		outline: none;
		padding-left: 25px;
		background-color: #F5F5F5;
		height: 32px;
		line-height: 32px;
	}
	.quickTop span{
		position: absolute;
		right: 80px;
		top: 7px;
		color: #FFFFFF;
		background: #FF4C39;
		width: 12%;
		height: 32px;
		border-radius: 2px;
		text-align: center;
		line-height: 32px;
		font-size: 14px;
	}
	.quickTop a:nth-of-type(2){
		position: absolute;
		right: 12px;
		top: 12px;
		font-size: 14px;
		color: #FF4C39;
	}
	
	.ten{
		margin-top: 44px;
	}
	.ten h1{
		font-size: 28px;
		color: #333333;
		padding: 18px 15px;
	}
	.ten>p{
		font-size: 18px;
		color: #333333;
		font-weight: bold;
		padding-left: 15px;
		padding-bottom: 25px;
	}
	.ten ul{
		padding-left: 15px;
	}
	.ten ul li {
		position: relative;
		height: 90px;
		padding-bottom: 20px;
	}
	.ten ul li a div:nth-of-type(1){
		position: absolute;
		height: 90px;
		width: 120px;
		border-radius: 3px;
		overflow: hidden;
	}
	.ten ul li a div:nth-of-type(1) img{
		position: absolute;
		width: 100%;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}
	.ten ul li a div:nth-of-type(2){
		margin-left: 130px;
	}
	.ten ul li a div:nth-of-type(2) p:nth-of-type(1){
		font-size: 16px;
		font-weight: bold;
		color: #333333;
		padding: 12px 0px 8px;
	}
	.ten ul li a div:nth-of-type(2) p:nth-of-type(2) img{
		margin-right: -3px;
	}
	.ten ul li a div:nth-of-type(2) p:nth-of-type(3) span{
		font-size: 12px;
		color: #999999;
		margin-right: 15px;
	}
</style>