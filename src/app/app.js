import { createApp } from 'vue';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';

import store from '../store.js';
import App from './App.vue';
import routes from '../routes.js';

const app_store = createStore(store);
const router = createRouter({
	routes: routes,
	history: createWebHistory()
})

createApp(App)
	.use(app_store)
	.use(router)
	.mount('#app');

