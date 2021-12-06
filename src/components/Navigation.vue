<template>
	<nav>
		<div class="collapsible">
			<button @click="toggleDetails" class="collapsible__summary">
				<div class="collapsible__title">{{ title }}</div>
			</button>	
		</div>
		
		<div class="collapsible__component" v-if="!collapsed">
			test <!-- <RouterLink :to="{ name: 'component', params: { component_id: 'contactform' } }" /> -->
		</div>




		<div class="collapsible" @click="toggleDetails">
			<RouterLink :to="{ name: 'component', params: { component_id: 'todolist' } }">To-do List</RouterLink>
		</div>

		<div class="collapsible" @click="toggleDetails">
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
    import ToDoList from './ToDoList.vue';
    import Slideshow from './Slideshow.vue';
    import ContactForm from './ContactForm.vue';
    import SortableTable from './SortableTable.vue';
    import Quiz from './Quiz.vue'; 

	export default {
		props: {
			title: {
				type: String,
				default: 'ComponentName'
			}
		},
		
		data: function() {
			return {
				collapsed: true
			};
		},

		methods: {
			toggleDetails: function() {
				this.collapsed = !this.collapsed
			}
		}
	};
</script>

<style>

	nav {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		margin-top: 20vh;
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
		font-family: 'Quicksand', sans-serif;
		font-size: 1.5em;
	}

	.collapsible__summary {
		width: 100%;
		background: rgb(0, 0, 0);
		border-radius: 50px;
		border: none;
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

	.collapsible__arrow {
		width: 0.7em;
		height: 1px;
		padding-left: 15px;
		margin-right: 0.5em;
	}

	.collapsible__arrow--rotated {
		transform: rotate(90deg);
	}
     
</style>
