//! Function Creation 

// function addNumber(a, b) {
//    let result = a + b;
//    return result;
// }

// let result = addNumber(1, 2);
// console.log("The result is: ", result);

// function expression
// let addNumber = function(a, b) {
//     let result = a + b;
//     return result;
// }

// console.log("The result is: ", addNumber(1, 2));

//! Arrow Function (Parameter is when we define the function)
let addNumber = (a, b) => a + b;

// Argument is when we call the function
console.log("The result is: ", addNumber(1, 2));

//Anonymous Function is a function without a name
//IIFE
(function() {
    console.log("Hello World");
})

//invoke
();

((a, b) => a + b)(1, 2);


// Default Parameter
const multiply = function(a,b=5) {
    let result = a * b;
    return result;
}

console.log("The result is: ", multiply(1));

//! ==== Task Coding Challange ====
const result = function(a,b, operator) {
    if(operator === "+") {
        return a + b;
    } else if(operator === "-") {
        return a - b;
    } else if(operator === "*") {
        return a * b;
    } else if(operator === "/") {
        return a / b;
    }
}

console.log("The result is: ", result(1, 2, "-"));

//! ==== Task Coding Challange ====
const stringManipulation = (string) => {
    let length = string.length;
    let uppercase = string.toUpperCase();
    let lowercase = string.toLowerCase();
    let slice = string.slice(0, 5);
    return {length, uppercase, lowercase, slice};   //return object
};

console.log("The result is: ", stringManipulation("Hello World"));

const calculate = (weight, height) => {
    let bmi = weight / (height * height);
    let status;
    if(bmi < 18.5) {
        status = 'Underweight';
    } else if(bmi < 29.9) {
        status = 'Overweight';
    } else {
        status = 'Obesity';
    }
    return {bmi, status};
}

console.log("The result is: ", calculate(70, 1.75));

function studentGradingSystem (totalMarks, obtainedMark) {
    let percentage = (obtainedMark / totalMarks) * 100;
    let grade;
    if(percentage >= 90) {
        grade = 'A';
    } else if(percentage >= 80) {
        grade = 'B';
    } else if(percentage >= 70) {
        grade = 'C';
    } else if(percentage >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    return {percentage, grade};
}