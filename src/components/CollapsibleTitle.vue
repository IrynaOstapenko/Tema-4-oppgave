<template>
    
	<div class="collapsible-title">{{ title }}</div>

</template>

<script>
    export default {
		props: {
			title: {type: String}
		}
	}
</script>

<style>
   .collapsible-title {
		color: #fff;
		font-family: 'Quicksand', sans-serif;
		font-size: 1.5em;
	}
</style>