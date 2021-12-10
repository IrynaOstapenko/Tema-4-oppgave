export default {
    state() {
        return {
            navigation: {
                navbar: [],
                components: [
                    { id: '001', name: 'To-Do List' },
                    { id: '002', name: 'Slideshow' },
                    { id: '003', name: 'Contact Us' },
                    { id: '004', name: 'Sortable Table' },
                    { id: '005', name: 'Quiz' }
                ],
            },
        }
    },

    getters: {
        getComponents(state) {
            return state.navigation.components;
        },
        
        getComponentsCount(state) {
            return state.navigation.components.length;
        }
    },
}
