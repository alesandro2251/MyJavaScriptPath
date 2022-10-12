/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall 
*/

const mark = {
    firstName:'Mark',
    lastName: 'Miller',
    weight: 90,
    height: 1.69,
    
    calcBMI: function(){
        return BMI = this.weight / (this.height ** 2)
    }
}

const John = {
    firstName: 'John',
    lastName: 'Smith',
    weight: 92,
    height: 1.95,
    
    calcBMI: function(){
        return BMI = this.weight / (this.height ** 2)
    }
}

if(mark.calcBMI() > John.calcBMI()){
    console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBMI()}) is bigger than ${John.firstName} ${John.lastName}'s (${John.calcBMI()})`);
}else{
    console.log(`${John.firstName} ${John.lastName}'s (${John.calcBMI()}) is bigger than ${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBMI()})`);
}
