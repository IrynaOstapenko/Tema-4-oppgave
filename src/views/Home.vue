<template>
    <Collapsible :title="'Todo List'">
        <ToDoList />
    </Collapsible>

    <Collapsible :title="'Slideshow'">
        <Slideshow />
    </Collapsible>

    <Collapsible :title="'Contact Us'">
        <ContactForm />
    </Collapsible>

    <Collapsible :title="'Sortable Table'">
        <SortableTable />
    </Collapsible>

    <Collapsible :title="'Quiz'">
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

        props:
            [ 'componentTitles' ]
        ,
	};
</script>

<style>
   
</style>
