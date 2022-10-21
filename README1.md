//let random = Math.trunc(Math.random() *3);

const startButton = document.querySelector('.start');
const section = document.querySelector('.question-section');
const results = document.querySelector('.results');
const intro = document.querySelector('.intro');
const trueButton = document.querySelector('.true');
const falseButton = document.querySelector('.false');
const nextButton = document.querySelector('.next');

//const questions = ['How are you today ?', 'Is it cold outside ?', 'Are you smilling ?'];
//const answers = [true, false, true];

//let question = document.querySelector('.question').textContent = questions[random];

const startGame = function(){
    section.classList.remove('hidden');
    results.classList.remove('hidden');
    intro.classList.add('hidden');
    startButton.classList.add('hidden');
    nextButton.classList.remove('hidden');
};

startButton.addEventListener('click', startGame);
//console.log(answers[random]);
let a = true;

const trueButtonPressed = function(){
    trueButton.addEventListener('click', function(){
        if(b != false){
            trueButton.classList.add('correct');
        }else{
            trueButton.classList.add('wrong');
            falseButton.classList.add('correct');
        }
    });
}
const falseButtonPressed = function(){
    falseButton.addEventListener('click', function(a){
        if(answers[random] === false){
            falseButton.classList.add('correct');
        }else{
            falseButton.classList.add('wrong');
            trueButton.classList.add('correct');
        }
    });
}
