// The most basic array function
const calcAge = function(birthYear){
    return 2022 - birthYear;
}

const years = [1997,2002,1976,2005];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);

const results = [age1, age2, age3, age4];
console.log(results);

// Adding values in array
years.push(2010); // adding element at last position
console.log(years);
years.unshift(1010);
console.log(years); // adding elements on first positon

// Removing elements in array
years.pop() // remove the last element
years.shift()// remove the first element
console.log(years);
// Other array functions
console.log(years.indexOf(1976)); // shows the place of the element

console.log(years.includes(2002));// show as a boolean whether the element is in the array
console.log(years.includes(2003));
