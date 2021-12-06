<template>
    <div class="collapsible">
        <button @click="toggleDetails" class="collapsible__summary">
				<div class="collapsible__title">{{ title }}</div>
			</button>	 
    </div>
</template>

<script>
    export default {
		props: {
			title: {
				type: String,
				default: 'Test'
			}
		},
	}
</script>

<style>
   
</style>