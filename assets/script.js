var startBtn = document.querySelector("#start");
var timerEl = document.getElementById('countdown');
var quesEl = document.querySelector("#ques");
var choicesEl = document.querySelector("ol");
var choice1El = document.querySelector("#choice1");
var choice2El = document.querySelector("#choice2");
var choice3El = document.querySelector("#choice3");
var choice4El = document.querySelector("#choice4");
var ques2El = document.querySelector("#quesTwo");
var choice5El = document.querySelector("#choice5");
var choice6El = document.querySelector("#choice6");
var choice7El = document.querySelector("#choice7");
var choice8El = document.querySelector("#choice8");

function startQuiz() {
    countdown();
    quesEl.textContent = "What is a function?"
    choicesEl.style.display = "block"
    choice1El.textContent = "An expression, rule, or law that defines a relationship between one variable"
    choice2El.textContent = "A set of statements that performs a task or calculates a value"
    choice3El.textContent = "A set of arrays"
    choice4El.textContent = "Helps define document.querySelector"
}

function ques2() {
    ques2El.textContent = "."
    choicesEl.style.display = "block"
    choice1El.textContent = ""
    choice1El.textContent = ""
    choice1El.textContent = ""
    choice1El.textContent = ""
}

function countdown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
        
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = 'Time:' + timeLeft;
            // Decrement `timeLeft` by 1
            timeLeft--;
          } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
          }
    }, 1000)
}


startBtn.addEventListener("click", startQuiz);
choice2El.addEventListener("click", ques2);
choice1El.addEventListener("click", timeLeft--);