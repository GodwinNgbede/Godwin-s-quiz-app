const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");

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
    question: " Which symbol is used for single-line comments in JavaScript?",
    answers: ["<!-- comment -->", "/* comment */", "// comment", "' comment '"],
    correct: 2,
  },
];
