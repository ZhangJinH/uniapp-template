import Vue from 'vue'
import App from './App'
import cuCustom from './colorui/components/cu-custom.vue'

import router from './app/router'
import http from './app/http'

import './colorui/main.css'
import './colorui/icon.css'

import store from './store'

import './app/style.styl'


Vue.config.productionTip = false

Vue.prototype.$router = new router()
Vue.prototype.$http = new http({
	baseUrl: 'https://yanbaomini.tingchao.ltd'
})

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
