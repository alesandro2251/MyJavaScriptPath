
// basic functions 
function logger(){
    console.log('Hello, you my name is Alesandro');
}


function fruits(apples, oranges){
    console.log(apples, oranges);
    const juice = `The juice is made out ${apples} apple and ${oranges} oranges .`;
    return juice; // returns the value of the variable juice
}

// calling a function
logger();
const fruitJuice = fruits(5,6);
console.log(fruitJuice);

// Function expressions

const calcAge = function(birthYear){
  return 2022 - birthYear;
}
const age1 = calcAge(2002);
console.log(age1);

// Arrow functions
const calcAge1 = birthYear => 2022 - birthYear;
const age2 = calcAge1(2002);
console.log(age2);

// Arrow functions example
const yearUntilRetiertment = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retierment = 65 - age;
    return `${firstName} have ${retierment} years until retiertment .`;
}
console.log(yearUntilRetiertment(2002, 'Alesandro'));
