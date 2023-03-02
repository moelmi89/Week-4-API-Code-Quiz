var startQuiz = document.getElementById("startQuiz");
var currentScore = document.getElementById("currentScore");
var viewScores = document.getElementById("viewScores");
var finalScore = document.getElementById("finalScore");
var results = document.getElementById("results");
var playAgain = document.getElementById("play-again");

var welcome = document.getElementById("welcome");
var quiz = document.getElementById("quiz")
var question = document.getElementById("question");
var option = document.getElementById("option");
var message = document.getElementById("message");

var submit = document.getElementById("submit");

var initials = document.getElementById("initials");

var highScores = document.getElementById("highScores");
var highScoreList = document.getElementById("highScoreList");
var clear = document.getElementById("clear");

var timer = document.getElementById("timer");


var secondsLeft = 0;
var score = 0;
var currentQuestion = 0;
var countdownTimer;



function stopGame() {

    clearInterval(countdownTimer);
    secondsLeft = 75;
	currentQuestion = 0;

    timer.textContent = ""

	welcome.style.display = 'none';
	question.textContent = "All Done!"
	results.style.display = 'block';

    finalScore.textContent = "You Scored: " + currentScore;
}


startQuiz.addEventListener("click", startGame);
highScores.addEventListener("click", getHighScores);
submit.addEventListener("click", saveScore);
playAgain.addEventListener("click", startGame)