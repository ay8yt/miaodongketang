import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


const Home = () => import(/** webpackChunkName: "Home" */ '@/components/Home.vue');
const Article = () => import(/** webpackChunkName: "Article" */ '@/components/Article.vue');


export default new Router({
	mode: "hash",
	base: "/blog/dist/",  //以根目录为相对路径，这里的根目录是miaodongketang/，若作为单独项目部署时，则不需要配置base
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/article/:aid',
			name: 'article',
			component: Article
		}
	]
})




