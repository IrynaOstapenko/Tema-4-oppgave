<template>    
    <div class="quiz-container">
        <!-- We show the heading only on top of the first question -->
        <h2 class="quiz-container__heading" v-show="questionsIndex === 0">TRY OUR QUIZ</h2>
    
        <div class="quiz-container__question" v-for="(question, index) in questions" v-show="index === questionsIndex">            
            <h4 class="quiz-container__question__heading">{{ question.text }}</h4>
            <ul class="quiz-container__question__answers">
                <li v-for="answer in question.answers">
                    <input  type="radio" :id="answer.text" :name="index" :value="answer.correct" v-model="userAnswer">
        <!-- We use v-model to connect user's choice with vue. In radio buttons v-model links to value. -->
                    <label v-bind:for="answer.text">{{ answer.text }}</label>
                </li>
            </ul>

            <button class="quiz-container__question__btn btn-prev" v-if="questionsIndex > 0" @click="prev">prev</button>

            <button class="quiz-container__question__btn btn-next" @click="next">next</button>
        </div>

        <div class="quiz-container__result" v-show="questionsIndex === questions.length">
            <h2 class="quiz-container__result__heading">Quiz finished!</h2>
            <p>You scored {{ score() }} / {{ questions.length }}</p>
        </div>

    </div>  
</template>

<script>
export default {
    data() {
        return {
            questions: [
                {
                    text: 'What is the capital of Norway?',
                    answers: [
                        {text: 'Oslo', correct: true },
                        {text: 'Stockholm', correct: false },
                        {text: 'Helsinki', correct: false }
                    ],
                },
                {
                    text: 'Who is the president of the USA?',
                    answers: [
                        {text: 'Barack Obama', correct: false },
                        {text: 'Donald Trump', correct: false },
                        {text: 'Joseph Biden', correct: true }
                    ]
                },
                {
                    text: 'When did the Second World War begin?',
                    answers: [
                        {text: '1914', correct: false },
                        {text: '1939', correct: true },
                        {text: '1941', correct: false }
                    ]
                },
                {
                    text: 'What is the name of the king of Sweden?',
                    answers: [
                        {text: 'Harald', correct: false },
                        {text: 'Gustaf Adolf', correct: false },
                        {text: 'Carl Gustaf', correct: true }
                    ]
                },
                {
                    text: 'What is the closest planet to the Sun?',
                    answers: [
                        {text: 'Mercury', correct: true },
                        {text: 'Mars', correct: false },
                        {text: 'Venus', correct: false }
                    ]
                },
                {
                    text: 'Who won the Golden Ball in 2018?',
                    answers: [
                        {text: 'Cristiano Ronaldo', correct: false },
                        {text: 'Lionel Messi', correct: false },
                        {text: 'Luka Modrić', correct: true }
                    ]
                }
            ],
            questionsIndex: 0,
            userAnswer: null,
            // Here we nullify totalAnswers in order to avoid that one option is "checked" in the next question
            totalAnswers: [],
        }
    },
    methods: {
        next() {
            this.questionsIndex++;
            this.totalAnswers.push(this.userAnswer);
            this.userAnswer = null;
        },
        prev() {
            this.questionsIndex--;
        },
        
        score() {
            // Array method that allows to select only true values in the array
            return this.totalAnswers.filter(Boolean).length;
        }
    }
}
</script>

<style>
    .quiz-container {
        position: relative;
        width: 50vw;
        height: 300px;
        margin: auto;
        border: 1px solid black;
        border-radius: 25px;
        padding-top: 1px;
        display: flex;
        flex-flow: column nowrap;
        font-family: 'Quicksand', sans-serif;
        margin-bottom: 5vh;
    }
    .quiz-container__heading {
        text-align: center;
        margin: 0.8em;
        color: #db6541;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    }
    .quiz-container__question {
       position: absolute;
       top: 25%;
       left: 30%;
    }
    .quiz-container__question__heading {
        margin-bottom: 0.3em;
    }
    .quiz-container__question__answers {
        list-style-type: none;
        font-size: 0.8em;
        margin-bottom: 0.3em;
        padding: 5px;
        width: 17vw;
    }
    .quiz-container__question__answers li {
        background: rgb(238, 229, 224);
        border: 0.3em outset rgb(214, 198, 188);
        margin: 0.3em;
        padding: 6px;
    }
    label {
        margin-left: 0.2em;
    }
    .quiz-container__question__answers li:hover {
        background: rgb(228, 213, 204);
        border: 0.3em outset rgb(230, 216, 207);
    }
    .quiz-container__question__btn {
        margin-bottom: 0.3em;
        background-color: white;
        height: 25px;
        width: 55px;
        border: 1px solid black;
        border-radius: 25px;
        margin-right: 0.2em;
    }
    
    .quiz-container__result__heading {
        text-align: center;
        margin: 0.8em;
        color: #db6541;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    } 
    .quiz-container__result p {
        text-align: center;
        padding: 60px;
    }
</style>