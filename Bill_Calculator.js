/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement 
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430
*/

const bill = prompt('How much is the bill ?');
let tip;
let result;

if (bill >= 50 && bill <= 300){
    tip = bill * 0.15;
    result = Number(bill) + tip;
    alert("You need to tip:" + tip + " and total value is :" + result);
}else{
    tip = bill * 0.2;
    result = Number(bill) + tip;
    alert("You need to tip:" + tip + " and total value is :" + result);
}
