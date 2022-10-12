/* 
// Challenge
// Print "Jonas Schmidt is a {} years old teacher and has a driver license"

   const jonas = {
    firstName: 'Jonas', lastName: 'Schmidt', birhtYear: 1997, job: 'teacher',  friends: ['Michael', 'John', 'Peter'], hasDriverLicense: true,
   }
*/

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmidt',
    birhtYear: 1997,
    job: 'teacher',
    friends: ['Michael', 'John', 'Peter'],
    hasDriverLicense: true,

    calcAge: function(){
        return 2022 - this.birhtYear;
    },

    DriverLicense: function(){
        if(this.hasDriverLicense === true){
            return 'has a driver license'
        }else{
            return 'has not a driver license'
        }
    }
}
console.log(`${jonas.firstName} ${jonas.lastName} is a ${jonas.calcAge()} years old ${jonas.job} and 
${jonas.DriverLicense()}`);
