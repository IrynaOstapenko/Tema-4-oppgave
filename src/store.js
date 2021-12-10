import navigation from './modules/navigation.js'

export default {
    state() {
        return {
            navigation: {
                visible: false,
                pages: [
                    { title: 'To-Do List',      id: 'to-do-list' },
                    { title: 'Slideshow',       id: 'slideshow' },
                    { title: 'Concact Us',      id: 'contact-form' },
                    { title: 'Sortable Table',  id: 'sortable-table' },
                    { title: 'Quiz',            id: 'quiz' }
                ],
            }
        };
    },
    
    getters: { 
        getPages(state) {
            return state.navigation.pages; 
        },
    },

    mutations: {
        addPage(state, page) {
            state.navigation.pages.push(page); 
        },
    },

    modules: { 
        navigation,
    },
};