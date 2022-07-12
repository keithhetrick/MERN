const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

/* 
[ randomCar ] = cars = ['Tesla', 'Mercedes', 'Honda'] =  cars[0] = 'Tesla'
[ ,otherRandomCar ] = cars = ['Tesla', 'Mercedes', 'Honda'] = cars[1] = 'Mercedes'

console.log(randomCar) = Tesla
console.log(otherRandomCar) = Mercedes

outcome = 
Tesla 
Mercedes 

*/


const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

/* 
name is a value attributed to 'employee' and CANNOT be called due to placement INSIDE the employee object.

otherName is also attributed to 'employee', and CAN be called due to placement OUTSIDE the 'employee' object; no value is currently defined

console.log(name) = not defined
console.log(otherName) = not defined

outcome = 
not defined
not defined

*/


const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);


/* 
const password = '12345';
console.log(password) = '12345'
console.log(hashedPassword) = person, but currently no password is attributed = undefined

outcome = 
12345 
undefined

*/  



const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

/*
const [,first] = numbers; = [2, 3, 5, 6, 1, 67, 12, 2] = 2
const [,,,second] = numbers; [5, 6, 1, 67, 12, 2] = 5
const [,,,,,,,,third] = numbers; [2] = 2

numbers = 2, 5, 2

console.log(first == second); = false
console.log(first == third); = true

outcome = 
false 
true

*/

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

/*
console.log(key) = value
console.log(secondKey) = [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]) = 1

[ ,willThisWork] = secondKey: [1, 5, 1, 8, 3, 3] = secondKey[1] = 5

console.log(willThisWork) = 5

outcome = 
value 
[1, 5, 1, 8, 3, 3] 
1
5

*/