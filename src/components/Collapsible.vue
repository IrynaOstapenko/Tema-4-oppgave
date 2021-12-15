<template>
    <div class="collapsible">		
		<button @click="toggleDetails" class="collapsible__summary">{{ title }}</button>	 
	</div>        
    <slot v-if="!collapsed" />
</template>

<script>  

    export default {
		props: {
			title: { type: String, default: 'No title' },
		},
       
		data() {
			return {
				collapsed: true,
			}
		},

		methods: {
			toggleDetails() {
				this.collapsed = !this.collapsed	
			}
		}		
	}
</script>

<style>
    .collapsible {
        display: flex;
		justify-content: center;
		align-items: center;
		background: rgb(0, 0, 0);
		width: 50vw;
		border-radius: 50px;
		font-family: 'Quicksand', sans-serif;
		font-size: 1.5em;
		margin: 5px;
		padding: 15px;
	}

	.collapsible__summary {
		width: 100%;
		background: rgb(0, 0, 0);
		border-radius: 50px;
		border: none;
		color: #fff;
		font-family: 'Quicksand', sans-serif;
		font-size: 1.2em;
	}

	.collapsible__summary,
	.collapsible__component {
		padding: 0em;
	}
	
	.collapsible__component {
		padding-top: 0;
		background: rgb(202, 133, 133);
		width: 50vw;
	}

</style>