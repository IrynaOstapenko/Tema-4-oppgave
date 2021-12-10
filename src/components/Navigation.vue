<template>
	<nav>
		<RouterLink class="navbar" :to="{ name: 'home' }">Home</RouterLink>
		<RouterLink class="navbar" :to="{ name: 'component', params: { component_id: 'todolist' } }">To-do List</RouterLink>
		<RouterLink class="navbar" :to="{ name: 'component', params: { component_id: 'slideshow' } }">Slideshow</RouterLink >
		<RouterLink class="navbar" :to="{ name: 'component', params: { component_id: 'contactform' } }">Contact Us</RouterLink >
		<RouterLink class="navbar" :to="{ name: 'component', params: { component_id: 'sortabletable' } }">Sortable Table</RouterLink >
		<RouterLink class="navbar" :to="{ name: 'component', params: { component_id: 'quiz' } }">Quiz</RouterLink >
	</nav>
</template>

<script>
    import ToDoList from './ToDoList.vue';
    import Slideshow from './Slideshow.vue';
    import ContactForm from './ContactForm.vue';
    import SortableTable from './SortableTable.vue';
    import Quiz from './Quiz.vue'; 

	export default {
		computed: {
			components() {
				return this.$store.getters.getComponents;
			},

			pagesFromStore() {
				return this.$store.getters.getPages
			},
		},
	};
</script>

<style> 
	nav {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		background: rgb(0, 0, 0);
		width: 100%;
		padding: 15px;
	}

	.navbar {
		font-family: 'Quicksand', sans-serif;
		padding: 1em;
		margin: 0.5em;
		border: 1px solid white;
		border-radius: 50px;
		background: rgb(0, 0, 0);
		color: white;
		text-decoration: none;
	}
</style> 
