<template>
	<Navigation /> 
	<RouterView />
</template>

<script>
	import Navigation from '../components/Navigation.vue';

	export default {
		components: {
			Navigation
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
