// simple code to practice global state
<template>
    <div class="set-timer">
        <button class="store-test-button" @click="startTimer">start timer</button>
        <span>{{ this.$store.state.countUp }}</span>
        <button class="store-test-button" @click="stopTimer">stop timer</button>
        <button class="store-test-button" @click="resetTimer">reset</button>  
    </div>    
</template>

<script>
export default {
    computed: {
        startTimer() {
            return this.$store.getters.startTimer;
        },
        stopTimer() {
            return this.$store.getters.stopTimer;
        },
        resetTimer() {
            return this.$store.getters.resetTimer;
        }
    }
}
</script>

<style>
    .store-test-button {
        height: 2em;
        width: 8em;
        margin-right: 1em;
        margin-left: 1em;
        border: 0.5px solid black;
        border-radius: 5px;
    }
</style>
