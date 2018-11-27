<template>
	<div class="artical">
		<img src="../../assets/images/20181114110818_401.jpg" width="100%"/>
		<h1>冬天最适合吃什么？这种平民食材一定要吃！</h1>
		<p>要问冬天最适合吃什么？除了大白菜当然是萝卜咯，萝卜具有顺气，止咳等功效，最适合冬天吃，萝卜的种类也很多而且各有各的本事，从中医上讲，白萝卜有补气和顺气；红萝卜补心、活血养血，心脑血管患者可以多吃；青萝卜清热舒肝，水萝卜则有利尿的作用，所以咯，今天咱就来认识认识各有“本事”的萝卜家族吧~</p>
		<div v-for="(v,i) in turnip">	
			<h3>{{v.title}}</h3>
			<p>{{v.msg}}</p>
			<br />
			<p><b>挑选小技巧：</b>{{v.choose}}</p>
			<ul>
				<li v-for="(a,i) in turnip[i].pic">
					<router-link to="">
						<img :src="a.src" width="100%"/>
						<span>{{a.title}}</span>
						<span><img :src="a.photo"/>{{a.name}}</span>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="comment">
			<p>评论</p>
			<div>
				<div>
					<img src="../../assets/images/tx2_6.png" width="34px"/>
					<p class="name">晏子_平仄平</p>
					<p class="time">19小时前</p>
				</div>	
				<p class="say">冬吃萝卜夏吃姜</p>
			</div>
			<div>
				<div>
					<img src="../../assets/images/tx2_1.png" width="34px"/>
					<p class="name">鱼鱼3814</p>
					<p class="time">2018-11-18</p>
				</div>					
				<p class="say">总结一句，全都是萝卜</p>
				<p class="other"><span>小可205：</span>呵呵，萝卜开会</p>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			turnip:[]
		}
	},
	mounted(){
		this.$http.get('./data/data.json')
		.then((res)=>{
				this.turnip = res.data.articalTurnip;
		})
	}
}
</script>
<style scoped>
	.artical{
		background-color: #FFFFFF;
	}
	.artical>p{
		padding: 0px 15px;
	}
	h1{
		font-size: 22px;
		color: #1b1b1b;
		line-height: 36px;
		margin: 15px 15px 20px;
	}
	.artical div{
		padding: 0px 15px;
	}
	p{
		font-size: 14px;
		color: #383838;
		line-height: 25px;
	}
	h3{
		font-size: 16px;
		margin: 30px 0px 10px;
	}
	ul{
		overflow: hidden;
		margin: 30px 0px;
	}
	li{
		width: 48.5%;
		float: left;
		margin-bottom: 50px;
	}
	li:nth-of-type(2n-1){
		margin-right: 3%;
	}
	li span{
		display: block;
		width: 100%;
		padding-left: 10px;
	}
	li span:nth-of-type(1){
		font-size: 18px;
		font-weight: 500;
		line-height: 36px;
		color: #000000;
	}
	li span:nth-of-type(2){
		font-size: 13px;
		color: #383838;
		line-height: 23px;
	}
	li span img{
		width: 23px;
		border-radius: 50%;
		vertical-align: middle;
		margin-right: 8px;
	}
	.comment>p{
		font-size: 16px;
		font-weight: 600;
		color: #000000;
		margin-bottom: 20px;
	}
	.comment>div{
		padding: 0px;
		padding-bottom: 50px;
	}
	.comment div div{
		padding: 0px;
		position: relative;
	}
	.comment div div img{
		position: absolute;
		border-radius: 50%;
	}
	.comment div p{
		margin-left: 45px;
		line-height: normal;
	}
	.comment div div p:nth-of-type(1){
		font-size: 14px;
		color: #888888;
	}
	.comment div div p:nth-of-type(2){
		font-size: 12px;
		color: #bbbbbb;
	}
	.comment .say{
		margin-top: 15px;
	}
	.comment .other{
		margin-top: 30px;
		padding-left: 15px;
		font-size: 12px;
		color: #888888;
	}
	.comment .other span{
		color: #547392;
	}
</style>