/*
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(x){
    const tip = x * 0.2;
    return tip
}
function totalPrice(bills, tip){
    const result = bills + tip;
    return result
}

for(let i = 0; i < bills.length; i++){
    //console.log(`Tip ${i + 1} is ${calcTip(bills[i])}\n`);
    tips[i] = calcTip(bills[i]);
}
for(let i = 0; i < bills.length; i++){
    //console.log(`Total price is ${totalPrice(bills[i], calcTip(bills[i]))}\n`);
    totals[i] = totalPrice(bills[i], calcTip(bills[i]));
}

console.log(`Tips you need to pay are ${tips}`);
console.log(`Total prices you need to pay are ${totals}`);
