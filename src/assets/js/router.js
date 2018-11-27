import vueRouter from 'vue-router'
import recommend from '../../component/index/recommend.vue'
import find from '../../component/index/find.vue'
import talk from '../../component/index/talk.vue'
import my from '../../component/index/my.vue'
import newest from '../../component/talk/new.vue'
import hotest from '../../component/talk/hot.vue'
import search from '../../component/recommend/search.vue'
import artical from '../../component/recommend/artical.vue'
import video from '../../component/recommend/video.vue'
import menu from '../../component/recommend/menu.vue'
import quick from '../../component/recommend/menu/quick.vue'
import register from '../../component/my/register.vue'
import phone from '../../component/my/phone.vue'
import email from '../../component/my/email.vue'
import food from '../../component/find/food.vue'

import '../css/clear.css'

export default new vueRouter({
	routes:[
		{ path:'/',component:recommend },
			{ path:'/search',component:search },
			{ path:'/artical',component:artical },
			{ path:'/video',component:video },
			{ path:'/menu',component:menu },
				{ path:'/quick',component:quick },
				
		{ path:'/find',component:find },
			{ path:'/food',component:food },
		
		{ path:'/talk',component:talk,
		  children:[
			{ path:'/newest',component:newest },
			{ path:'/hotest',component:hotest },
			{ path:'/',component:newest }] },
			
		{ path:'/my',component:my },
			{ path:'/register',component:register,
				children:[
				{ path:'/phone',component:phone },
				{ path:'/email',component:email },
				{ path:'/',component:phone }] }
	]
})
