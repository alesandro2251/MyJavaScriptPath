'use strict';

let secretNumber = Math.trunc(Math.random() *20) + 1;
let highscore = 0;
let score = 20;

// Functions to call classes from HTML
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
const backgroundStyle = function(color){
    document.querySelector('body').style.backgroundColor = color ;
}
const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}
const endGame = function(){
    displayMessage("You Lost the game! Try Again !");
    displayScore(0);
}
const displayNumber = function(number){
    document.querySelector('.number').textContent = number;
}
// End--Function--Section

// Button Check 
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        displayMessage("🚩 NO NUMBER !");
        displayNumber('!');
    } else if(guess === secretNumber){
        displayMessage(" 🎉 Correct Number !");
        displayNumber(secretNumber);
        backgroundStyle('#60b347');
        if(score > highscore){
            highscore = score ;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? " 📈 Too High !" : " 📉 Too Low !"); // using ternary operator
            score--;
            displayScore(score);
        }else{
            endGame();
        }
    }
});
// End--Button--Check

// Button Again
document.querySelector('.again').addEventListener('click', function (){
    score = 20 ;
    secretNumber = Math.trunc(Math.random() *20) + 1;

    displayMessage('Start guessing...');
    displayScore(score);
    displayNumber('?');
    document.querySelector('.guess').value = '';
    backgroundStyle('#222');
});
// End--Button--Again
