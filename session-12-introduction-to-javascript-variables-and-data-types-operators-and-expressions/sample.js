// Arithmetic Operators
const number1 = 10;
const number2 = 7;
const sum = number1 + number2;
console.log(`The sum is: ${sum}`);

const number3 = 15;
const average = (number1 + number2 + number3) / 3;
console.log(`The average is: ${average}`);

// Assignment Operators
let variableX = 12;
variableX = variableX + 8;
console.log(`The value of variableX is now: ${variableX}`);

let variableY = 20;
variableY += 4;
console.log(`The value of variableY is now: ${variableY}`);

// Comparison Operators
const valueA = 25;
const valueB = 30;

if (valueA > valueB) {
  console.log("valueA is greater than valueB");
} else {
  console.log("valueB is greater than or equal to valueA");
}

const personAge = 17;

if (personAge >= 18) {
  console.log("The person is an adult.");
} else {
  console.log("The person is a minor.");
}

// Logical Operators
const condition1 = true;
const condition2 = false;

if (condition1 && condition2) {
  console.log("Both conditions are true.");
} else {
  console.log("At least one of the conditions is not true.");
}

const condition = true;

if (!condition) {
  console.log("The condition is true.");
} else {
  console.log("The condition is not true.");
}
