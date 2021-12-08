<template>
	<!-- <Navigation /> -->
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
	// import Quiz from '../components/Quiz.vue';

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
	@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

	@import '../style/reset.css';
	@import '../style/variables.css';
	@import '../style/style.css';
</style>
