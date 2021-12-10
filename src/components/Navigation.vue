<template>
	<nav>
		<RouterLink :to="{ name: 'component', params: { component_id: 'todolist' } }">To-do List</RouterLink>
		<RouterLink :to="{ name: 'component', params: { component_id: 'slideshow' } }">Slideshow</RouterLink >
		<RouterLink :to="{ name: 'component', params: { component_id: 'contactform' } }">Contact Form</RouterLink >
		<RouterLink :to="{ name: 'component', params: { component_id: 'sortabletable' } }">Sortable Table</RouterLink >
		<RouterLink :to="{ name: 'component', params: { component_id: 'quiz' } }">Quiz-app</RouterLink >
	</nav>
</template>

<script>
    import ToDoList from './ToDoList.vue';
    import Slideshow from './Slideshow.vue';
    import ContactForm from './ContactForm.vue';
    import SortableTable from './SortableTable.vue';
    import Quiz from './Quiz.vue'; 
	import Collapsible from './Collapsible.vue'; 

	export default {
		computed: {
			components() {
				return this.$store.getters.getComponents;
			},
		},
	};
</script>

<style> 
	nav {
		display: flex;
		flex-flow: row nowrap;
	}
</style> 
