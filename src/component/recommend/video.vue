<template>
	<div class="video">
		<div class="videoTop">
			<router-link to="/"><img src="../../assets/images/back_red.png" width="15px"/>主页</router-link>
			<span>菜谱视频大全</span>
			<router-link to="/search"><img src="../../assets/images/search_icon.png" width="44px"/></router-link>
		</div>
		<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="true" infinite-scroll-distance="5">
			<li v-for="(v,i) in list">
				<router-link to="">
					<img :src="v.src" width="180px"/>
					<div></div>
					<span></span>
					<span>{{v.length}}</span>
				</router-link>
				<p>{{v.title}}</p>
				<span>{{v.time}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	data(){
		return{
			topStatus: '',
			list:[]
		}
	},
	mounted(){
		this.$http.get('./data/data.json')
		.then((res)=>{
			this.list = res.data.videoList;
		})
	},
	methods: {
		loadMore() {
			this.loading = true;
			setTimeout(() => {
				for (let i = 1; i <= 10; i++) {
					this.list.push(this.list[i]);
				}
				this.loading = false;
			}, 1000);
		}
	}
}
</script>
<style scoped>
	.videoTop{
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
	.videoTop a:nth-of-type(1){
		position: absolute;
		top: 0px;
		left: 10px;
		line-height: 44px;
		font-size: 15px;
		color: #FF5151;
	}
	.videoTop a:nth-of-type(1) img{
		vertical-align: middle;
		margin-right: 3px;
	}
	.videoTop a:nth-of-type(2){
		position: absolute;
		top: 0px;
		right: 0px;
	}
	.videoTop span{
		line-height: 44px;
		font-size: 16px;
		font-weight: bold;
	}
	.video ul{
		padding: 0px 15px;
		margin-top: 44px;
		background-color: #FFFFFF;
	}
	.video ul li{
		padding: 12px 0px;
		overflow: hidden;
		border-bottom: 1px dotted #DDDDDD;
	}
	.video ul li a{
		position: relative;
		float: left;
		margin-right: 10px;
	}
	.video ul li a div{
		width: 32px;
		height: 32px;
		background-color: rgba(0,0,0,0.4);
		border-radius: 50%;
		position: absolute;
		top: 34px;
		left: 74px;
	}
	.video ul li a span:nth-of-type(1){
		width: 0px;
		height: 0px;
		border-top: 7px solid transparent;
		border-bottom: 7px solid transparent;
		border-left: 7px solid #FFFFFF;
		position: absolute;
		top: 43px;
		left: 88px;
	}
	.video ul li p{
		font-size: 16px;
		line-height: 24px;
	}
	.video ul li>span{
		font-size: 12px;
		color: #cccccc;
	}
	.video ul li a span:nth-of-type(2){
		position: absolute;
		right: 0px;
		bottom: 4px;
		font-size: 13px;
		color: #FFFFFF;
		background-color: #000000;
		opacity: 0.6;
	}
</style>