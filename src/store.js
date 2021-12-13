import navigation from './modules/navigation.js'
import footer from './modules/footer.js';

export default {
    state() {
        return {
            footer: {
                visible: false,
                pages: [
                    { title: 'Contact Us',      id: 'contact-form' },
                ],
            }
        };
    },
    
    getters: { 
        getPages(state) {
            return state.footer.pages; 
        },
    },

    mutations: {
        addPage(state, page) {
            state.footer.pages.push(page); 
        },
    },

    modules: { 
        navigation,
        footer
    },
};