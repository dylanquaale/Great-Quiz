var startButton = document.getElementById("start-button");
var questionElements = document.getElementById('quiz');
var topScores = document.getElementById('btn-score');
var timeLeft = document.getElementById('timer');
var seconds = 90;
var highScore = 0;
var index = 0;
var questions = [
    {
        question: '1. Which of the following methods is used to access HTML elements using Javscript?',
        choices:['getElementById','getElementsByClassName','Both A and B','none of the above'],
        answer: 'Both A and B'
    }, 
    {
        question: '2. Javascript is an ______ language?',
        choices:['Object-Oriented','Object-Based','Both A and B','procedural'],
        answer: 'Object-Oriented'
    }, 
    {
        question: '3. How can a database type be declared to be a constant type?',
        choices:['var','const','let','none of the above'],
        answer: 'const'
    }, 
    {
        question: '4. What keyword is used to check wether a given property is valid or not?',
        choices:['lies','exist','is in','in'],
        answer: 'in'
    }, 
    {
        question: '5. What does the Javascript debugger statement do?',
        choices:['It will debug all the errors in the program at runtime','it acts as a breakpoint in the program','Both A and B','none of the above'],
        answer: 'it acts as a breakpoint in the program'
    }, 
    {
        question: '6. Method prompt contain...... Number of parameters?',
        choices:['1','2','3','0'],
        answer: '2'
    }, 
    {
        question: '7. Javascript file has an extension of?',
        choices:['.java','.js','.javascript','.xml'],
        answer: '.js'
    }, 
    {
        question: '8. Function is used to parse a string to Int:',
        choices:['Integer.parse','Int.Parse','Parse.Int','none of the above'],
        answer: 'Int.Parse'
    }, 
    //list of questions loop
    
]


// startTo my quiz

startButton.addEventListener("click", function(){
    startQuiz();
});

function startQuiz() {
    console.log("start");
    document.querySelector('.quiz-intro').classList.add('hide');
    questionElements.classList.remove('hide');

    askQuestion()

};  
// this is where questions and answers are looped through
//also where the I have my highScore adding and subtracting starting line 78
//line 78 subtracts 5 for wrong answer
function askQuestion() {
    document.getElementById('question-text').textContent = questions[index].question;
    document.getElementById('answer-buttons').innerHTML = ''
    questions[index].choices.forEach(function(choice){
        var button = document.createElement('button')
        button.textContent = choice;
        button.setAttribute('value', choice);
        button.addEventListener("click", function(){
        if(this.value !== questions[index].answer){
            seconds -= 5
            highScore -= 5
            console.log('wrong') 
        //     var secondsTimer = seconds,
        //     display = document.querySelector('#time');
        // startTimer(secondsTimer, display);
        //adding 10 for the correct answer selected 
        } else {
            seconds += 10
            highScore += 10
            console.log('right')}
        index++; //my alert window you will see at the end of the quiz
        if (index == 8){
            alert ('HighScore: ' +  highScore);
            window.location.href = "index.html";
        }
        askQuestion();

    });

    
        
        document.getElementById('answer-buttons').appendChild(button);
    })

};
//this is how I ended up makinh my timer
function startTimer(duration, display) {
    var timer = duration //seconds;
    setInterval(function () {
        seconds = parseInt(timer , 10)
        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
   var secondsTimer = seconds,
        display = document.querySelector('#time');
    startTimer(secondsTimer, display);
};