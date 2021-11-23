<template>
	<h3>Quiz</h3>
</template>

<script>
const questions = [
  {
    question: "How many days are there in a year?",
    answers: [
      { answer: "324", wrong: true },
      { answer: "311", wrong: true },
      { answer: "365", wrong: false },
      { answer: "355.3", wrong: true },
    ],
  },
  {
    question: "How many continents exists on Earth?",
    answers: [
      { answer: "7", wrong: false },
      { answer: "4", wrong: true },
      { answer: "6", wrong: true },
      { answer: "3", wrong: true },
    ],
  },
];
console.log(questions);
const giveQuestion = function () {};
giveQuestion();
export default {
  data() {
    return {
      question: (this.question = questions[0].question),
    };
  },
};
</script>


<style>
    h3 {
		text-align: center;
	}
</style>
