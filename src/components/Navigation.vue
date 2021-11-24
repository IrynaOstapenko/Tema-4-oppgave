<template>
	


	<nav>
		<div class="collapsible">
		<button @click="toggleDetails" class="collapsible__summary">
			<div :class="`collapsible__arrow ${ !collapsed ? 'collapsible__arrow--rotated' : '' }`">
				<svg viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M36 21L1.8571e-06 41.7846L3.67415e-06 0.21539L36 21Z" fill="black" />
				</svg>
			</div>

			<div class="collapsible__title">{{ title }}</div>
		</button>

		<div class="collapsible__details" v-if="!collapsed">
			<slot />
		</div>
		</div>


		<div class="collapsible">
		<RouterLink :to="{ name: 'home' }">Home</RouterLink ></div>

		<div class="collapsible">
		<RouterLink :to="{ name: 'component', params: { component_id: 'todolist' } }"
			>To-do List</RouterLink ></div>

		<div class="collapsible">
		<RouterLink :to="{ name: 'component', params: { component_id: 'slideshow' } }"
			>Slideshow</RouterLink ></div>

		<div class="collapsible">	
		<RouterLink :to="{ name: 'component', params: { component_id: 'contactform' } }"
			>Contact Form</RouterLink ></div>

		<div class="collapsible">	
		<RouterLink :to="{ name: 'component', params: { component_id: 'sortabletable' } }"
			>Sortable Table</RouterLink ></div>

		<div class="collapsible">	
		<RouterLink :to="{ name: 'component', params: { component_id: 'quiz' } }"
			>Quiz-app</RouterLink ></div>
	
	</nav>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: 'Details'
			}
		},
		
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
	@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');

	nav {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		margin-top: 25vh;
	}

	a {
		text-decoration: none;
		outline: none;
		color: #fff;
		letter-spacing: 5px;
	}

	.collapsible {
		background: rgb(0, 0, 0);
		width: 50%;
		border-radius: 50px;
		font-family: 'Quicksand', sans-serif;
		font-size: 1.5em;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 5px;
		padding: 15px;
	}

	.collapsible__title {
		color: #fff;
	}

	.collapsible__summary {
		width: 100%;
		background: rgb(88, 88, 88);
		border-radius: 50px;
		border: none;
	}

	.collapsible__summary,
	.collapsible__details {
		padding: 0.5em;
	}
	
	.collapsible__details {
		padding-left: 1.7em;	
		padding-top: 0;
	}

	.collapsible__arrow {
		width: 0.7em;
		height: 0.85em;
		margin-right: 0.5em;
	}

	.collapsible__arrow--rotated {
		transform: rotate(90deg)
	}
     
</style>
