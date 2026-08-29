// alert('This is my first JS')
// let numberOfApples = 10;
// let numberOfOranges = 5;
// let totalFruits = numberOfApples + numberOfOranges;
// console.log("Total fruits: ",totalFruits);

//! =============================
// let numberOfApples = 10;
// let numberOfOranges = "5";
// let isEqual = numberOfApples === numberOfOranges;
// console.log("Is equal: ",isEqual);

// let isGreater = numberOfApples >= numberOfOranges;
// console.log("Is greater: ",isGreater);

//! ways of creating strings 

let singleQuoteString = 'Hello World';

// console.log(singleQuoteString.length)
console.log(singleQuoteString[0]);
// ToLOwerCase 
let toLowerCase = singleQuoteString.toLowerCase();
console.log(toLowerCase);

let indexSlice = singleQuoteString.slice(0,5);
console.log(indexSlice);

// let positionOfSubstring = doubleQuoteString.indexOf("World");
// console.log(positionOfSubstring);

//! replace 
let replacedString = singleQuoteString.replace("World", "JavaScript");
console.log(replacedString);

//! concat 
let firstName = "John";
let lastName = "Doe";
let fullName = firstName.concat(" ",lastName);
console.log(fullName);