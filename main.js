import App from './App'
import * as moment from 'moment'
 
Vue.prototype.$moment = moment

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
// import Swiper from "./components/swiper"

Vue.config.productionTip = false

// Vue.component('Swiper', Swiper);

App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif