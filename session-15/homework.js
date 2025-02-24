/* -------------------------------------------------------------------------- */
/*                              === Functions ===                             */
/* -------------------------------------------------------------------------- */

// 1. Function without parameters
// ✅ Create a function that prints "Hello, World!" to the console.
function greeting() {
  console.log("Hello, World!");
}
greeting();

// 2. Function with parameters
// ✅ Create a function that takes two numbers and returns their sum.
function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
const result = sum(20, 30);

// 3. Function returning a value
// ✅ Create a function that multiplies two numbers and returns the result.
function multiply(a, b) {
  //   return a * b

  const result = a * b;
  return result;
}
const someResult = multiply(2, 12);

// 4. Function with default parameters
// ✅ Create a function that greets a user with a default name if none is provided.

function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet();
greet("Andra");

// 5. Function expression
// ✅ Store a function in a variable that subtracts two numbers.

function substract(a, b) {
  return a - b;
}
console.log(substract(15, 5));

// 6. Arrow function
// ✅ Create an arrow function that divides two numbers.

let divide = (a, b) => a / b;
console.log(divide(10, 2));

// 7. Function calling another function
// ✅ Create a function that squares a number, then use it inside another function.

function square(x) {
  return x * x;
}
function anotherFct(x) {
  console.log(square(x));
}
anotherFct(6);

// 8. Function with a loop
// ✅ Write a function that prints numbers from 1 to N.

function printNumbers(n) {
  for (let i = 1; i <= n; i = i + 1) console.log(i);
}
printNumbers(7);

function printNumbers_recursive(n, i = 1) {
  if (i > n) return;
  console.log(i);
  i = i + 1;
  printNumbers_recursive(n, i);
}
printNumbers_recursive(8);

// 9. Recursive function
// ✅ Write a function that calculates the factorial of a number using recursion.

function factorial(n) {
  let x = 1;
  for (let i = 1; i <= n; i = i + 1) x = x * i;
  return x;
}
console.log(factorial(8));
console.log(factorial(0));

function factorial_recursive(n, x = 1) {
  //   console.log(n);
  if (n < 1) {
    console.log(x);
    return;
  }
  x = x * n;
  n = n - 1;
  factorial_recursive(n, x);
}
factorial_recursive(8);

// 10. Higher-order function
// ✅ Write a function that accepts another function as an argument and applies it.

/* -------------------------------------------------------------------------- */
/*                          === Objects & Methods ===                         */
/* -------------------------------------------------------------------------- */

// 1. Simple object
// ✅ Create an object representing a car with brand, model, and year properties.
const carObject = {
  brand: "Toyota",
  model: "Corolla",
  year: "2002",
};
carObject.brand;
// carObject.color = 'white'

// 2. Object with a method
// ✅ Add a method to the car object that returns its details.
const anotherCarObject = {
  brand: "Toyota",
  model: "Corolla",
  year: "2020",
  // getConstructionYear: function() {
  getConstructionYear() {
    return "The car was released  in " + this.year;
  },
};
anotherCarObject.getConstructionYear();

// 3. Intentionally empty :)

// 4. Object with computed property
// ✅ Create an object where one property name is dynamically assigned.

// somewhere else in the code
const newProperty = "reTestedIn";
carObject[newProperty] = "2022";

const student = {
  name: "Bob",
  [newProperty]: "testing",
};

// 5. Object with nested objects
// ✅ Create an object with a nested structure representing a student's grades.
const anotherPlaneObject = {
  brand: "Boeing",
  model: "747",
  year: "2024",
  features: {
    color: "red",
    motor: {
      model: "full105",
      releaseDay: Date.now(),
    },
    autoPilot: true,
  },
  getConstructionYear() {
    return "The car was released  in " + this.year;
  },
  getPlaneFeatures() {
    return this.features.motor.releaseDay;
  },
};
anotherCarObject.getConstructionYear();

// 6. Using `this` inside an object method
// ✅ Create an object that uses `this` to reference its own properties.

const angajat = {
  nume: "Matei",
  varsta: 26,
  id: Math.floor(Math.random() * 1000),
  experienta: "5+",
  getExperience() {
    return (
      "Angajatorul doreste ca angajatul sa aiba " +
      this.experienta +
      "ani de experienta."
    );
  },
};
console.log(angajat.getExperience());

// 7. Object.entries()
// ✅ Convert an object into an array of key-value pairs.

for (const [key, value] of Object.entries(angajat)) {
  console.log(`${key}: ${value}`);
}

// 8. Object.keys()
// ✅ Retrieve an array of keys from an object.

for (const key of Object.keys(angajat)) {
  console.log(key);
}

// 9. Object.values()
// ✅ Retrieve an array of values from an object.

for (const value of Object.values(angajat)) {
  console.log(value);
}
// 10. Object.assign() to merge objects
// ✅ Merge two objects together and print the result.
const obj1 = { nume: "Andrei", varsta: 25 };
const obj2 = { job: "Programator", experienta: "4 ani" };

const mergeObject = Object.assign(obj1, obj2);

console.log(mergeObject);
