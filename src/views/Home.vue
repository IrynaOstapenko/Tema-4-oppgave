<template>
    <Collapsible>
        <ToDoList />
    </Collapsible>

    <Collapsible>
        <Slideshow />
    </Collapsible>

    <Collapsible>
        <ContactForm />
    </Collapsible>

    <Collapsible>
        <SortableTable />
    </Collapsible>

    <Collapsible>
        <Quiz />
    </Collapsible>
</template>

<script>
    import Navigation from '../components/Navigation.vue';
    import ToDoList from '../components/ToDoList.vue';
    import Slideshow from '../components/Slideshow.vue';
    import ContactForm from '../components/ContactForm.vue';
    import SortableTable from '../components/SortableTable.vue';
    import Quiz from '../components/Quiz.vue';
	import Collapsible from '../components/Collapsible.vue';
	import CollapsibleTitle from '../components/CollapsibleTitle.vue';

	export default {
		components: {
            Navigation,
            ToDoList,
            Slideshow,
            ContactForm,
            SortableTable,
            Quiz,
			Collapsible,
			CollapsibleTitle
		},

        data() {
            return {
                componentTitles: [
                    { ToDoList:'To-Do List' },
                    { Slideshow: 'Merry Xmas' },
                    { ContactForm: 'Contact Us' },
                    { SortableTable: 'Table' },
                    { Quiz: 'Quiz' }
                ]
            }
        },

        props:
            [ 'componentTitles' ]
        ,

        methods: {

        }
	};
</script>

<style>
   
</style>
