// Basic for loop in JavaScript 
for(let rep = 1; rep <=10;rep++){
  console.log(`Repetiton number ${rep}`);
}


// Looping array
const jonas = [
    'Jonas',
    'Schmidt',
    '20',
    'teacher',
    ['Michael', 'John', 'Peter'] 
]

for(let i = 0;i < jonas.length ;i++){
    console.log(jonas[i]);
}


// Fiiling the array
const jonas1 = [
    'Jonas',
    'Schmidt',
    '20',
    'teacher',
    ['Michael', 'John', 'Peter'] 
]
const type = [];

for(let i = 0;i < jonas1.length ;i++){
    //type[i] = typeof(jonas1[i]);
    type.push(typeof(jonas1[i]));
}
console.log(type);
