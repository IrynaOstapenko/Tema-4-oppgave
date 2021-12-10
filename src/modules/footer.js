export default {
    state() {
        return {
            navigation: {
                footer: [],
                title: [
                    { id: '001', name: 'Contact Us' },
                ],
            },
        }
    },

    getters: {
        getTitle(state) {
            return state.footer.components;
        },
        
        getTitleCount(state) {
            return state.footer.components.length;
        }
    },
}