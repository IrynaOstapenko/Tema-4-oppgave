<template>
    <!-- routes to each component or home for navbar -->
    <Home v-if="$route.params.component_id === 'home'" />
    <ToDoList v-if="$route.params.component_id === 'todolist'" />
    <Slideshow v-if="$route.params.component_id === 'slideshow'" />
    <ContactForm v-if="$route.params.component_id === 'contactform'" />
    <SortableTable v-if="$route.params.component_id === 'sortabletable'" />
    <Quiz v-if="$route.params.component_id === 'quiz'" />
</template>

<script>
    import Navigation from '../components/Navigation.vue';
    import Home from './Home.vue'
    import ToDoList from '../components/ToDoList.vue';
    import Slideshow from '../components/Slideshow.vue';
    import ContactForm from '../components/ContactForm.vue';
    import SortableTable from '../components/SortableTable.vue';
    import Quiz from '../components/Quiz.vue';

	export default {
		components: {
            Navigation,
            Home,
            ToDoList,
            Slideshow,
            ContactForm,
            SortableTable,
            Quiz
		},
	};
</script>

<style>
</style>

