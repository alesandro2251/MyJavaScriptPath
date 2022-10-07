const favourite = prompt("What is your favourite number ?") ;
console.log(favourite);
console.log(typeof favourite);

if (favourite > 20){
    console.log("Your number is bigger than 20 !")
    alert("Your number is bigger than 20 !");
}else{
    console.log("Your number is smaller than 20 !");
    alert("Your number is smaller than 20 !");
}

if (favourite == 20){ // This transfer (favorite) from srting and check the if else statment.
    alert("Nice you hit the number !");
}else{
    alert("Noooo ! You missed ! TRY AGAIN !");
}

// With === we wouldn't get alert,
// because === is srtict and doesn't do type coercion .
