<!-- <template>
	<nav>

		<div class="collapsible">
			<RouterLink :to="{ name: 'component', params: { component_id: 'todolist' } }">To-do List</RouterLink>
		</div>

		<div class="collapsible">
			<RouterLink :to="{ name: 'component', params: { component_id: 'slideshow' } }">Slideshow</RouterLink >
		</div>

		<div class="collapsible">	
			<RouterLink :to="{ name: 'component', params: { component_id: 'contactform' } }">Contact Form</RouterLink >
		</div>

		<div class="collapsible">	
			<RouterLink :to="{ name: 'component', params: { component_id: 'sortabletable' } }">Sortable Table</RouterLink >
		</div>

		<div class="collapsible">	
			<RouterLink :to="{ name: 'component', params: { component_id: 'quiz' } }">Quiz-app</RouterLink >
		</div>
	
	</nav>
</template>

<script>
    import ToDoList from './ToDoList.vue';
    import Slideshow from './Slideshow.vue';
    import ContactForm from './ContactForm.vue';
    import SortableTable from './SortableTable.vue';
    import Quiz from './Quiz.vue'; 
	import Collapsible from './Collapsible.vue'; 

	export default {
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
	/*
	nav {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
	}
	*/
</style> -->
