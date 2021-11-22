<template>

	<nav>
		<RouterLink :to="{ name: 'home' }">Home</RouterLink>
		<RouterLink :to="{ name: 'component', params: { component_id: 'todolist' } }"
			>To-do list</RouterLink
		>
		<RouterLink :to="{ name: 'component', params: { component_id: 'slideshow' } }"
			>Slideshow</RouterLink
		>
		<RouterLink :to="{ name: 'component', params: { component_id: 'contactform' } }"
			>Contact Form</RouterLink
		>
		<RouterLink :to="{ name: 'component', params: { component_id: 'sortabletable' } }"
			>Sortable Table</RouterLink
		>
		<RouterLink :to="{ name: 'component', params: { component_id: 'quiz' } }"
			>Quiz</RouterLink
		>
	
	</nav>
	
</template>

<script>
	export default {
	}
</script>

<style>
     
</style>
