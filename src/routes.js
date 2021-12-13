import Home from './views/Home.vue';
import Component from './views/Component.vue';

export default [
	{ name: 'home',         path: '/',            	component: Home},
	{ name: 'todolist',    path: '/todolist',     component: Component},
	{ name: 'slideshow',    path: '/slideshow',     component: Component},
	{ name: 'contact-form',    path: '/contact-form',     component: Component},
	{ name: 'sortable-table',    path: '/sortable-table',     component: Component},
	{ name: 'quiz',    path: '/quiz',     component: Component}
]
