const questions = [
    {
        question: "Question 1: What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "Question 2: What is the capital of France?",
        choices: ["Madrid", "Rome", "Berlin", "Paris"],
        correctAnswer: "Paris"
    },
    // Add more questions in the same format
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const scoreElement = document.getElementById("score");
const submitButton = document.getElementById("submit");

function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    
    choicesElement.innerHTML = "";
    current.choices.forEach(choice => {
        const li = document.createElement("li");
        li.textContent = choice;
        li.addEventListener("click", checkAnswer);
        choicesElement.appendChild(li);
    });
}

function checkAnswer(event) {
    const userChoice = event.target.textContent;
    const correctAnswer = questions[currentQuestion].correctAnswer;
    
    if (userChoice === correctAnswer) {
        score++;
    }
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.textContent = "Quiz Completed!";
    choicesElement.innerHTML = "";
    submitButton.style.display = "none";
    scoreElement.textContent = Score: ${score} out of ${questions.length};
}

loadQuestion();
submitButton.addEventListener("click", checkAnswer);
