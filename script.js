var startEL = document.querySelector("#start-game");
var questionList = document.querySelector("#theQuestions");
var startButton = document.getElementById("start-button");
var timer = document.getElementById("timer");
var timeLeft = 60;
 var timerInterval;
 var hasgameStarted = false;
 var questionElement = document.querySelector("#theQuestions");
 var answersElement = document.querySelector("#answer-buttons");
 var gameIndex = 0;
 var questions = [
{ 
    title: "Who is President of the US?",
options: ["Franklin", "Nixon", "Biden"],
answer: "Biden"
},
{ 
title: "How many years is one term?",
options: ["3", "5", "4"],
answer: "4"
},
{ 
title: "Who was the President before the current President?",
options: ["Clinton","Trump", "Kennedy"],
answer: "Trump"
},
{ 
title: "What Branch of the government does the President represent?",
options: ["Executive", "Legislative", "Judicial"],
answer: "Executive"
}
];

var hasGameEnded= false;
var endGameElement = document.querySelector("#end-screen");
var initials = "";
var score = 0;
var playerScoreList = JSON.parse(localStorage.getItem("yourScore")) || [];

startButton.addEventListener("click", function() {
startTime();
startGame();
startQuestions();
})

function startTime() {
    timerInterval = setInterval(function() {
        if (timeLeft <= 1){
            clearInterval(timerInterval);
            endgame();
        }
        timeLeft--;
        timer.textContent = "Time Left: " + timeLeft;
    },  1000)
}
function startGame() {
    hasgameStarted = true;
    startEL.setAttribute("class", "hidden");
    questionElement.setAttribute("class", "visible");
}
function startQuestions () {
    questionElement.textContent = questions[gameIndex].title;
    answersElement.innerHTML = " ";
 for ( var i = 0; i < questions[gameIndex].options.length; i++) {
        var btn = document.createElement("button");
        btn.textContent = questions[gameIndex].options[i];
        btn.onclick = checkAnswer;
        answersElement.append(btn)
    }
}
function checkAnswer() {
    if (this.textContent === questions[gameIndex].answer){
        alert("Correct");
        score++;
    } else {
        alert("Incorrect");
        timeLeft -= 10;
    }
    gameIndex++;
    if (gameIndex > 4){
        clearInterval(timerInterval);
        getplayerName()
    }
    else {
        startQuestions();
    }
}
document.querySelector("#submittedName").addEventListener("click", function() {
firtsName = document.querySelector("#initials").value;
endGameElement();
})
function playerName() {
    document.getElementById("youScore").textContent = "Your Score is  "
+ score;
document.querySelector("#end-screen").classList.remove("hidden");
questionElement.setAttribute("class", "hidden")
}

function endgame() {
    hasGameEnded = true;
    endGameElement.setAttribute("class" , "visible");
    playerScoreList.push({"initials": playerName, "score" : score});
    localStorage.setItem("highscore" , JSON.stringify(playerScoreList));

    window.location.assign('./score.html');
}
