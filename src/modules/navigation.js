export default {
    state() {
        return {
            navigation: {
                components: [
                    { id: '001', name: 'To-Do List' },
                    { id: '002', name: 'Slideshow' },
                    { id: '003', name: 'Contact Us' },
                    { id: '004', name: 'Sortable Table' },
                    { id: '005', name: 'Quizzzzz' }
                ],
            },
        }

    },

    getters: {
        getComponents(state) {
            return state.navigation.components;
        },
    },
}