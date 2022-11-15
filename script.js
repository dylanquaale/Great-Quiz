var startButton = document.getElementById("start-button");
var questionElements = document.getElementById('question-container');
var topScores = document.getElementById('btn-score');
var timeLeft = document.getElementById('timer');
// list of questions here
// Timer? Start it up here

startButton.addEventListener("click", function(){
    startQuiz();
});

function startQuiz() {
    console.log("start");

    // List of questions should exist
questionElements.addEventListener('click', function() {

})
    // LOOP?
    // go to question 1
    // Display question 1
    // Wait for user to choose answer <- probably where you'll end up adding event listener(s)
    
    // if user chose correct answer
        // Acknowledge correct answer (sound? display "correct!" message? Up to you)
    
        // Otherwise
        // Acknowledge incorrect answer and punish by subtracting time from timer
    // next question and repeat
    // LOOP?

    // after all questions are done
        // send user to high scores page and ask them to type their name
        // when submitted, 
            // add name to localstorage
            // dislpay list of high scores
};