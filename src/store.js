//Simple code to practice global state

export default {
    state() {
        return {
            countUp: 0,
            myInterval: null            
        }
    },

    getters: {
        startTimer(state) {
            state.myInterval = setInterval(function() {
                state.countUp++
            }, 1000);
            return state.myInterval;
        },        
        stopTimer(state) { 
            return clearInterval(state.myInterval)       
        },
        resetTimer(state) {
            clearInterval(state.myInterval);
            return state.countUp = 0            
        }            
    }   
}


