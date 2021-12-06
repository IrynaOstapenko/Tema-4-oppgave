<template>
    <div class="collapsible">
        <button @click="toggleDetails" class="collapsible__summary">
				<div class="collapsible__title">{{ title }}</div>
			</button>	 
    </div>
    <slot v-if="!collapsed" />
</template>

<script>
    export default {
		data() {
			return {
				collapsed: true
			};
		},

		methods: {
			toggleDetails() {
				this.collapsed = !this.collapsed
			}
		}
	};
</script>

<style>
    
</style>