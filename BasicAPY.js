// Do a simple APY calculator

const period = prompt('Enter the period :');
const yield1 = prompt('Enter the APY');
let startingPrice = prompt('Enter the starting sum :');

function APYcalc(startingPrice, yield1){
    const result = Number(startingPrice) + (Number(startingPrice) * (Number(yield1) / 100)) ;
    return result
}

for(let i = 0;i <= period;i++){
    startingPrice = APYcalc(startingPrice, yield1);
}

console.log(`Your final price is ${startingPrice}`);
