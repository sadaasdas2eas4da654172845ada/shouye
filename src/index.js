// import Vue from 'vue/dist/vue.esm';
import Vue from 'vue';
import './index.css';
import { Icon } from '@iconify/vue2';
import App from '@/App.vue'
// import IndexView from '@/views/IndexView.vue';
import HomeView from '@/views/HomeView.vue';
import Drawer from './components/Drawer.vue';
Vue.component('Drawer', Drawer);
// Vue.component('')
Vue.component('Icon', Icon);
//页面打开请求自动发送，请求回来的数据还要渲染到页面上（数据驱动视图变化的ui框架）
//数据驱动视图变化的条件：数据必须是响应式数据（data）+数据必须通过模板语法绑定到模板中
//vue中this的指向问题：methods中的所有函数（不包括箭头函数）的this指向vm（vue实例对象）

new Vue({
	//挂载点
	el: '#app',
	components:{HomeView},
	template:'<HomeView/>',
	// 实例已经创建 但是实例上的模板没有渲染
	created(){
		console.log(this.$parent);
		console.log(this.$children);
	},
	// 当前组件的template已经渲染到页面上来
	mounted(){
		console.log(this.$children[0].$children)
	}
});