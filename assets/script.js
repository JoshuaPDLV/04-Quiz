var startBtn = document.querySelector("#start");
var timerEl = document.getElementById('countdown');
var quesEl = document.querySelector("#ques");
var choicesEl = document.querySelector("ol");
var choice1El = document.querySelector("#choice1");
var choice2El = document.querySelector("#choice2");
var choice3El = document.querySelector("#choice3");
var choice4El = document.querySelector("#choice4");
var timeInterval;

var currentQuestions = 0

var questions = [
    {
        question: "what is a function?", 
        choices: ["An expression, rule, or law that defines a relationship between one variable", "A set of statements that performs a task or calculates a value", "A set of arrays", "Helps define document.querySelector"],
        answer: "A set of statements that performs a task or calculates a value"
    },
    {
        question: "what is a function?", 
        choices: ["An expression, rule, or law that defines a relationship between one variable", "A set of statements that performs a task or calculates a value", "A set of arrays", "Helps define document.querySelector"],
        answer: "A set of statements that performs a task or calculates a value"
    },
]

function startQuiz() {
    countdown();
    choicesEl.style.display = "block"
    displayQuestions();
}
function displayQuestions(){
    quesEl.textContent = questions[currentQuestions].question
    choice1El.textContent = questions[currentQuestions].choices[0]
    choice2El.textContent = questions[currentQuestions].choices[1]
    choice3El.textContent = questions[currentQuestions].choices[2]
    choice4El.textContent = questions[currentQuestions].choices[3]
}

function countdown() {
    var timeLeft = 75;

    timeInterval = setInterval(function() {
        
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