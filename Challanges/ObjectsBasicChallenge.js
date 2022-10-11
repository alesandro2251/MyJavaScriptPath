
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmidt',
    age: '20',
    job: 'teacher',
    friends: ['Michael', 'John', 'Peter']
}

// Challenge
// Print "Jonas Schmidt has 3 friends, and his best friend is Michael. He is working as a techer. 
// He is 20 years old "

console.log(`${jonas.firstName} ${jonas.lastName} has ${jonas.friends.length} friends, 
and his best friend is ${jonas.friends[0]}. 
He is working as a ${jonas.job}. 
He is ${jonas.age} years old .`);
