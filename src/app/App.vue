<template>
	<Navigation />
	<RouterView />
	<!-- <ToDoList />
	<Slideshow /> -->
	<!-- <ContactForm />
	<SortableTable />
	<Quiz /> -->
</template>

<script>
	import Navigation from '../components/Navigation.vue';
	// import ToDoList from '../components/ToDoList.vue';
	// import Slideshow from '../components/Slideshow.vue';
	// import ContactForm from '..components/ContactForm.vue';
	// import SortableTable from '..components/SortableTable.vue';	
	// import Quiz from '..components/Quiz.vue';

	export default {
		components: {
			Navigation,
			// ToDoList,
			// Slideshow,
			// ContactForm,
			// SortableTable,
			// Quiz
		}
	}
</script>

<style>
	@import '../style/reset.css';
	/* @import '../style/variables.css';
	@import '../style/style.css'; */
</style>
