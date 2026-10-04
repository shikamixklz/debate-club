const debateButton = document.getElementById("debate-button");
const debateQuestion = document.getElementById("debate-question");

const questions = [
    "Should university education be free?",
    "Is social media doing more harm than good?",
    "Should AI-generated work be allowed in university?",
    "Is working from home better than working in an office?",
    "Should students be allowed to use AI during exams?",
    "Does money actually buy happiness?",
    "Should voting be mandatory?",
    "Is university still worth the cost?"
];

debateButton.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    debateQuestion.textContent = questions[randomIndex];
});