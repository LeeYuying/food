<template>
	<div class="find">
		<div class="findTop">
			<span>发现最热门</span>
			<router-link to=""><img src="../../assets/images/ms_mail2@3x.png" width=52px height=44px/></router-link>
		</div>	
		
		<div class="pic">
			<ul>
				<li v-for="(v,i) in pic">
					<router-link :to="v.path"><img :src="v.src" width="100%"/></router-link>
				</li>
			</ul>
		</div>
		
		<div class="artical">
			<div class="big">
				<p>热门的视频菜谱</p>
				<span>视频菜谱</span>
				<div>
					<router-link to="">
						<img src="../../assets/images/20160516163203146338752389891.jpg" width="30px"/>
						<span>日食记</span><span>2017-05-31更新</span>
					</router-link>
					<router-link to="">
						<img src="../../assets/images/20170531174704_320.png" width="100%"/>
						<p>看一遍就能学会的泡椒凤爪...</p>
						<p>463679次播放</p>
						<img src="../../assets/images/video_list@3x.png" width="40px"/>
					</router-link>	
				</div>
			</div>
			<div class="small">
				<p>昨日全国最爱菜谱</p>
				<span>点击最多</span>
				<router-link to="">
					<img src="../../assets/images/1b44cd0da67787f11b050108addadd34_150x150.jpg"/>
					<div>
						<p>酸辣土豆丝</p>
						<p>
							<img src="../../assets/images/all_star_h@3x.png"/>
							<img src="../../assets/images/all_star_h@3x.png"/>
							<img src="../../assets/images/all_star_h@3x.png"/>
							<img src="../../assets/images/all_star_h@3x.png"/>
							<img src="../../assets/images/all_star_h@3x.png"/>
						</p><br />
						<p>
							<img src="../../assets/images/cp_con_icon_sj@3x.png"/>
							12步 / <5分钟
						</p>
						<p>
							<img src="../../assets/images/cp_con_icon_kw@3x.png"/>
							酸辣味 / 炒
						</p>
					</div>
				</router-link>
			</div>
			<div class="many">
				<p>这个帖子就这么红了...</p>
				<span>评论最多</span>
				<p><img src="../../assets/images/tx2_1.png"/>银元宝</p>
				<p>王蛋蛋的一日三餐，吃好是真的</p>
				<router-link to="">
					<ul>
						<li><img src="../../assets/images/s16210777158_154217196104711.jpg"/></li>
						<li><img src="../../assets/images/s16210777158_154217196190602.jpg"/></li>
						<li><img src="../../assets/images/s16210777158_154217196174592.jpg"/></li>
						<li><img src="../../assets/images/s16210777158_154217196113082.jpg"/></li>
						<li><img src="../../assets/images/s16210777158_154217196198861.jpg"/></li>
						<li><img src="../../assets/images/s16210777158_154217196172675.jpg"/></li>
						<li><img src="../../assets/images/s16210777158_154217196551092.jpg"/></li>
						<li><img src="../../assets/images/s16210777158_154217196612160.jpg"/></li>
						<li><img src="../../assets/images/s16210777158_154217196663604.jpg"/></li>
					</ul>
				</router-link>				
			</div>
			<div class="big">
				<p>大家都在参加这次活动，快来吧</p>
				<span>活动</span>
				<div>
					<router-link to="">
					</router-link>
					<router-link to="">
						<img src="../../assets/images/f72f59f8245d4a36a7661ae8f06a9449.jpg" width="100%"/>
					</router-link>	
				</div>
			</div>
			<div class="small">
				<p>昨日全国最高评论</p>
				<span>评论最高</span>
				<router-link to="">
					<img src="../../assets/images/a5124367_154217640812349.jpg"/>
					<div>
						<p>鱼香杏鲍菇</p>
						<p>
							<img src="../../assets/images/all_star_h@3x.png"/>
							<img src="../../assets/images/all_star_h@3x.png"/>
							<img src="../../assets/images/all_star_h@3x.png"/>
						</p><br />
						<p>
							<img src="../../assets/images/cp_con_icon_sj@3x.png"/>
							10步 / <10分钟
						</p>
						<p>
							<img src="../../assets/images/cp_con_icon_kw@3x.png"/>
							家常味 / 炒
						</p>
					</div>
				</router-link>
			</div>
			<div class="small">
				<p>全国最爱收藏的菜谱</p>
				<span>收藏最高</span>
				<router-link to="">
					<img src="../../assets/images/2d7e6b8d247d6ffa50c94f6e0c89eb10_150x150.jpg"/>
					<div>
						<p>咖喱牛肉</p>
						<p>
							<img src="../../assets/images/all_star_h@3x.png"/>
							<img src="../../assets/images/all_star_h@3x.png"/>
							<img src="../../assets/images/all_star_h@3x.png"/>
							<img src="../../assets/images/all_star_h@3x.png"/>
							<img src="../../assets/images/all_star_h@3x.png"/>
						</p><br />
						<p>
							<img src="../../assets/images/cp_con_icon_sj@3x.png"/>
							8步 / <60分钟
						</p>
						<p>
							<img src="../../assets/images/cp_con_icon_kw@3x.png"/>
							咖喱味 / 炖
						</p>
					</div>
				</router-link>
			</div>
			<div class="big">
				<p>冬吃萝卜正当时 8款滋补益气萝卜料理</p>
				<span>点击最多</span>
				<div>
					<router-link to="">
					</router-link>
					<router-link to="">
						<img src="../../assets/images/a20b062ed9c44096e864001491a1960d.jpg" width="100%"/>
					</router-link>	
				</div>
			</div>
		</div>
		
		<div class="nav">
			<ul>
				<li>
					<router-link to="/">
						<img src="../../assets/images/tabbar_01@3x.png" width="30px"/>
						<p>推荐</p>
					</router-link>
				</li>
				<li class="current">
					<router-link to="/find">
						<img src="../../assets/images/tabbar_02ed@3x.png" width="30px"/>
						<p>发现</p>
					</router-link>					
				</li>
				<li>
					<router-link to="/talk">
						<img src="../../assets/images/tabbar_04@3x.png" width="30px"/>
						<p>食话</p>
					</router-link>				
				</li>
				<li>
					<router-link to="/my">
						<img src="../../assets/images/tabbar_05@3x.png" width="30px"/>
						<p>我的</p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default{
	data () {
		return {
			pic:[]
		}
	},
	mounted(){
		this.$http.get('./data/data.json')
		.then((res)=>{
				this.pic = res.data.findPic;
		})
	}
}

</script>
<style scoped>
	.find{
		background-color: #f5f5f5;
	}
	.findTop{
		width: 100%;
		height: 44px;
		position: fixed;
		left: 0;
		top: 0;
		text-align: center;
		background-color: #FFFFFF;
		z-index: 1;
	}
	.findTop span{
		font-size: 18px;
		line-height: 44px;
		padding-left: 45.5px;
	}
	.findTop a{
		float: right;
	}
	
	.pic{
		border-bottom: 1px solid #dddddd;
		padding: 0px 12px 8px;
		background-color: #FFFFFF;
		margin-top: 44px;
	}
	.pic ul{
		width: 100%;
		overflow: hidden;
	}
	.pic ul li{
		float: left;
		width: 22.7%;
		margin-right: 3%;
	}
	.pic ul li:nth-of-type(4){
		margin-right: 0px;
	}
	
	.artical{
		margin-top: 10px;
		margin-bottom: 60px;
	}
	.artical>div{
		margin-bottom: 10px;
		border-top: 1px solid #DDDDDD;
		border-bottom: 1px solid #DDDDDD;
		background-color: #FFFFFF;
	}
	.artical>div>p{
		font-size: 16px;
		margin: 10px 0px 10px 12px;
	}
	.artical>div>span{
		font-size: 12px;
		color: #01A1EA;
		border: 1px solid #01A1EA;
		border-radius: 2px;
		padding: 1px 5px;
		margin: 10px 0px 10px 12px;
	}
	
	.big div{
		padding: 0px 12px 8px;
	}
	.big div a:nth-of-type(1){
		display: block;
		margin: 10px 0px;
		font-size: 14px;
		color: #333333;
	}
	.big div a:nth-of-type(1) img{
		vertical-align: middle;
	}
	.big div a:nth-of-type(1) span:nth-of-type(1){
		margin-top: 2px;
		padding-left: 5px;
	}
	.big div a:nth-of-type(1) span:nth-of-type(2){
		float: right;
		font-size: 12px;
		color: #999999;
		line-height: 30px;
	}
	.big div a:nth-of-type(2){
		display: block;
		position: relative;
	}
	.big div a:nth-of-type(2) p:nth-of-type(1){
		position: absolute;
		left: 15px;
		bottom: 38px;
		color: #FFFFFF;
		font-size: 16px;
		text-shadow: 0px 1px 0px rgba(0,0,0,0.7);
	}
	.big div a:nth-of-type(2) p:nth-of-type(2){
		position: absolute;
		left: 15px;
		bottom: 18px;
		color: #FFFFFF;
		font-size: 12px;
		text-shadow: 0px 1px 0px rgba(0,0,0,0.7);
	}
	.big div a:nth-of-type(2) img:nth-of-type(2){
		position: absolute;
		right: 15px;
		bottom: 22px;
	}
	
	.small a{
		display: block;
		padding: 12px;
		overflow: hidden;
	}
	.small a img{
		width: 30%;
		float: left;
	}
	.small a div{
		padding-left: 33%;
	}
	.small a div p{
		margin-bottom: 4px;
	}
	.small a div p:nth-of-type(1){
		font-size: 15px;
		color: #333333;
	}
	.small a div p:nth-of-type(2) img{
		width: 14px;
		margin-right: 5px;
	}
	.small a div p:nth-of-type(3),.small a div p:nth-of-type(4){
		font-size: 12px;
		color: #999999;
	}
	.small a div p:nth-of-type(3) img,.small a div p:nth-of-type(4) img{
		width: 15px;
		margin-right: 3px;
	}
	
	.many p:nth-of-type(2){
		font-size: 14px;
		color: #FF4C39;
	}
	.many p:nth-of-type(2) img{
		width: 30px;
		border-radius: 50%;
		vertical-align: middle;
		margin-right: 10px;
	}
	.many ul{
		padding: 0px 12px 10px;
		overflow: hidden;
	}
	.many ul li{
		width: 28%;
		float: left;
		margin-right: 5px;
	}
	.many ul li img{
		width: 100%;
	}
	.nav{
		width: 100%;
		height: 50px;
		padding: 5px 0px;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 1;
		background-color: #FFFFFF;
	}
	.nav ul{
		text-align: center;
		overflow: hidden;
	}
	.nav ul li{
		width: 25%;
		float: left;
	}
	.nav ul li p{
		color: #868686;
		font-size: 12px;
		margin-top: -4px;
	}
	.nav ul .current p{
		color: #FF4C39;
	}
	.nav a{
		display: block;
	}
</style>