var startButton = document.getElementById("start-button");
var questionElements = document.getElementById('quiz');
var topScores = document.getElementById('btn-score');
var timeLeft = document.getElementById('timer');
var index = 0;
var questions = [
    {
        question: '1.Which of the following methods is used to access HTML elements using Javscript?',
        choices:['getElementById','getElementsByClassName','Both A and B','none of the above'],
        answer: 'Both A and B'
    }, 
    {
        question: '2.Which of the following methods is used to access HTML elements using Javscript?',
        choices:['getElementById','getElementsByClassName','Both A and B','none of the above'],
        answer: 'Both A and B'
    }, 
    {
        question: '3.Which of the following methods is used to access HTML elements using Javscript?',
        choices:['getElementById','getElementsByClassName','Both A and B','none of the above'],
        answer: 'Both A and B'
    }, 
    {
        question: '4.Which of the following methods is used to access HTML elements using Javscript?',
        choices:['getElementById','getElementsByClassName','Both A and B','none of the above'],
        answer: 'Both A and B'
    }, 
    {
        question: '5.Which of the following methods is used to access HTML elements using Javscript?',
        choices:['getElementById','getElementsByClassName','Both A and B','none of the above'],
        answer: 'Both A and B'
    }, 
    {
        question: '6.Which of the following methods is used to access HTML elements using Javscript?',
        choices:['getElementById','getElementsByClassName','Both A and B','none of the above'],
        answer: 'Both A and B'
    }, 
    //list of questions loop
    
]


// Timer? Start it up here

startButton.addEventListener("click", function(){
    startQuiz();
});

function startQuiz() {
    console.log("start");
    document.querySelector('.quiz-intro').classList.add('hide');
    questionElements.classList.remove('hide');

    askQuestion()

};  
// need to make an if statement for when we are done with the questions
function askQuestion() {
    document.getElementById('question-text').textContent = questions[index].question;
    document.getElementById('answer-buttons').innerHTML = ''
    questions[index].choices.forEach(function(choice){
        var button = document.createElement('button')
        button.textContent = choice;
        button.setAttribute('value', choice);
        button.addEventListener("click", function(){
        if(this.value !== questions[index].answer){
            console.log('wrong')
        } else {console.log('right')}
        index++;
        askQuestion();
        });

        
        document.getElementById('answer-buttons').appendChild(button);
    })

};

    // List of questions should exist
//questionElements.addEventListener('click', function() {

//})
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
