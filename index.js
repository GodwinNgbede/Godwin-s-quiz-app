const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const next_btnEl = document.getElementById("nextBtn");

const quizData = [
  {
    question: " What is the correct way to declare a JavaScript variable?",
    answers: ["variable x", "var x", "x = variable", "let variable x"],
    correct: 1,
  },
  {
    question:
      "What keyword is used to declare a constant variable in JavaScript?",
    answers: ["var", "let", "const", "final"],
    correct: 2,
  },
  {
    question: " How do you write a function in JavaScript?",
    answers: [
      "function = myFunction() {}",
      "function myFunction() {}",
      "def myFunction() {}",
      "fn myFunction() {}",
    ],
    correct: 1,
  },
  {
    question: " What is the result of typeof null?",
    answers: ["null", "object", "undefined", "string"],
    correct: 1,
  },
  {
    question: " How do you create an array in JavaScript?",
    answers: [
      "let arr = {}",
      "let arr = []",
      "let arr = new Array()",
      "Both B and C",
    ],
    correct: 3,
  },
  {
    question: " How can you convert a string to an integer in JavaScript?",
    answers: ["parseInt()", "toInteger()", "parseInteger()", "convertInt()"],
    correct: 0,
  },
  {
    question: " What will console.log(2 + '2') output?",
    answers: ["22", "4", "NaN", "Error"],
    correct: 0,
  },
  {
    question: "How do you check if a variable is NaN?",
    answers: [
      "isNaN(variable)",
      "variable == NaNvariable == NaN",
      "typeof variable === 'NaN'",
      "variable === NaN",
    ],
    correct: 0,
  },
  {
    question: " How do you define an arrow function?",
    answers: [
      "let myFunc = () => {}",
      "let myFunc = -> {}",
      "let myFunc = function => {}",
      "let myFunc() => {}",
    ],
    correct: 0,
  },
];
let currentQuestionIndex = 0;
let timeLeft = 600;
let timerInterval;
function showQuestion() {
  optionsEl.innerHTML = "";
  const currentQuestion = quizData[currentQuestionIndex];

  questionEl.textContent = currentQuestion.question;

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.classList.add("option");
    button.textContent = answer;
    button.onclick = () => checkAnswer(index);
    optionsEl.appendChild(button);
  });
}
function checkAnswer(selectedIndex) {
  const currentQuestion = quizData[currentQuestionIndex];

  if (selectedIndex === currentQuestion.correct) {
    alert("Correct!");
  } else {
    alert("Wrong Answer!");
  }

  nextQuestion();
}
function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    alert("Quiz Completed!");
    clearInterval(timerInterval); // Stop the timer
    questionEl.textContent = "Quiz Finished!";
    optionsEl.innerHTML = "";
  }
}
function startTimer() {
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;
      document.getElementById("timer").textContent = `Time Left: ${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`;
    } else {
      clearInterval(timerInterval);
      alert("Time is up! Quiz Over.");
      questionEl.textContent = "Time's up!";
      optionsEl.innerHTML = "";
    }
  }, 1000);
}

next_btnEl.addEventListener("click", nextQuestion);

showQuestion();
startTimer();
