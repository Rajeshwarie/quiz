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
    {
        question: "Question 3: Entemology is the science that studies?",
        choices: ["Behaviour of human beings", "Insects", "Animals", "Birds"],
        correctAnswer: "Insects"
    },
    {
        question: "question 4: Fastest shorthand writer was?",
        choices: ["DR.G.D.Bist", "J.R.D.Tata", "J.M.Tagore", "Khudada Khan"],
        correctAnswer: "DR.G.D.Bist"
    },
    {
        question: "question 5: Epsom is the place associated with?",
        choices: ["Horse racing", "Polo", "Shooting", "Snooker"],
        correctAnswer: "Horse racing"
    },
    {
        question: "question 6: For galvanizing iron which of the following metals is used?",
        choices: ["Aluminium", "Copper", "Lead", "Zinc"]
        correctAnswer: "Zinc"
    },
    {
        question: "question 7: Guwahati High Court is the judicature of?",
        choices: ["Nagaland", "Arunachal Pradesh", "Assam", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "question 8: The ozone layer restricts?",
        choices: ["Visible light", "IR rays", "X-rays and gamma rays", "UV rays"],
        correctAnswer: "UV rays"
    },
    {
        question: "question 9: Filaria is caused by?",
        choices: ["Bacteria", "Mosquito", "Protozoa", "Virus"],
        correctAnswer: "Mosquito"
    },
    {
        question: "question 10: Fathometer is used to measure?",
        choices: ["Earthquakes", "Rainfall", "Ocean depth", "Sound intensity"],
        correctAnswer: "Ocean depth"
    }
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
