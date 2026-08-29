// let age = 11;
// console.log(age);

// // Declaration first then assignment 
// let country;
// country = "India";
// console.log(country);

// let firstName , lastName;
// firstName = "Emmanuel";
// lastName = "Oluwaseun";
// console.log(firstName + " " + lastName);

// // Primitive data types
//! Primitives are immutable, meaning they cannot be altered. When you manipulate a primitive value, you are creating a new value rather than modifying the original one.
let age = 28;
let price = 19.99;

//* 2.String 
let greeting = "Hello, World!";

// * 3.Boolean
let isStudent = true;

// * 4.Null
let currentJob = null;
console.log(typeof currentJob); // Output: object


//! Non Primitive data types are mutable, meaning they can be altered. When you manipulate a non-primitive value, you are modifying the original value rather than creating a new one.

//* Arrays 
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // Output: apple
let mixedArray = [1, "two", true, null];

//* Objects 
let person = {
    firstName: 'Enmanuel',
    lastName: 'Tweneboah',
    age: 31,
}
console.log(person); // Output: Enmanuel

let amount = 40;
console.log(amount);
amount = 50;
console.log(amount);


//! ========= MEthods ================
// let amount = 19.99
// let results = amount.toFixed(1);

//*isNan
let qty = "10";
console.log(isNaN(qty)); // Output: false
let converNum = parseFloat(qty);
console.log(converNum); // Output: 10

//! ========== Operators ================

let apples = 10;
let oranges = 5;

let totalFruits = apples + oranges;
console.log(totalFruits); // Output: 15

let difference = apples - oranges;
console.log(difference); // Output: 5

let product = apples * oranges;
console.log(product); // Output: 50

let quotient = apples / oranges;
console.log(quotient); // Output: 2

//! Increment 
let currentAge = 25;
currentAge++;
console.log(currentAge); // Output: 26

//! Decrement 
let currentYear = 2023;
currentYear--;
console.log(currentYear); // Output: 2022

