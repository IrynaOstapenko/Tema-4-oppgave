<!-- <template>
    <Collapsible>
	    <Navigation v-if="$route.params.component_id === 'navigation'" />
    </Collapsible>

    <Collapsible>
        <ToDoList v-if="$route.params.component_id === 'todolist'" />
    </Collapsible>

    <Collapsible>
        <Slideshow v-if="$route.params.component_id === 'slideshow'" />
    </Collapsible>

    <Collapsible>
        <ContactForm v-if="$route.params.component_id === 'contactform'" />
    </Collapsible>

    <Collapsible>
        <SortableTable v-if="$route.params.component_id === 'sortabletable'" />
    </Collapsible>

    <Collapsible>
        <Quiz v-if="$route.params.component_id === 'quiz'" />
    </Collapsible>
</template>

<script>
    import Navigation from '../components/Navigation.vue';
    import ToDoList from '../components/ToDoList.vue';
    import Slideshow from '../components/Slideshow.vue';
    import ContactForm from '../components/ContactForm.vue';
    import SortableTable from '../components/SortableTable.vue';
    import Quiz from '../components/Quiz.vue';

	export default {
		components: {
            Navigation,
            ToDoList,
            Slideshow,
            ContactForm,
            SortableTable,
            Quiz
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

</style> -->
