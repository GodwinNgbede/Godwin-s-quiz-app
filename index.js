const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");
const quizPageEl = document.getElementById("quiz-page");

function showPage2() {
  containerEl.style.display = "none";
  quizPageEl.style.display = "block";
}
// dont forget to comment out the addEventListener
btnEl.addEventListener("click", showPage2());
console.log("clicked");
