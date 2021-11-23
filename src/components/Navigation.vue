<template>

	<section class="main-navigation">
		<div class="main-navigation__link"><RouterLink :to="{ name: 'home' }">Home</RouterLink></div>
		<div class="main-navigation__link"><RouterLink :to="{ name: 'component', params: { component_id: 'todolist' } }"
			>To-do list</RouterLink
		></div>
		<div class="main-navigation__link"><RouterLink :to="{ name: 'component', params: { component_id: 'slideshow' } }"
			>Slideshow</RouterLink
		></div>
		<div class="main-navigation__link"><RouterLink :to="{ name: 'component', params: { component_id: 'contactform' } }"
			>Contact Form</RouterLink
		></div>
		<div class="main-navigation__link"><RouterLink :to="{ name: 'component', params: { component_id: 'sortabletable' } }"
			>Sortable Table</RouterLink
		></div>
		<div class="main-navigation__link"><RouterLink :to="{ name: 'component', params: { component_id: 'quiz' } }"
			>Quiz</RouterLink
		></div>
	
	</section>
	
</template>

<script>
	export default {
	}
</script>

<style>
	.main-navigation {
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		margin-top: 1em;
		margin-left: 1em;
	}

	.main-navigation__link {
		margin-right: 2em;
	}
     
</style>
