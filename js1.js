// JS Syntax and Variables

//Definition of JavaScript:
//1. JavaScript is a versatile, high-level programming language primarily used for creating interactive effects within web browsers. It is a core technology of the World Wide Web, alongside HTML and CSS, and enables developers to implement complex features on web pages, such as dynamic content updates, multimedia handling, and user interface enhancements.

//2. JavaScript is a high-level, object-oriented, multi-paradigm programming language.

// By "high-level," it means that we do not have to worry about complex stuff like memory management. 
// "Object-oriented" indicates that JavaScript supports the use of objects, which are collections of properties and methods that can represent real-world entities.

// "Multi-paradigm" means that JavaScript supports various programming styles, including procedural, object-oriented, and functional programming, giving developers flexibility in how they structure their code.


//By language, we are referring to a tool that allows us to communicate instructions to a computer in a way that it can understand and execute.
// This script demonstrates basic JavaScript syntax and variable usage

// Definition of syntax elements
// syntax - the set of rules that defines the combinations of symbols that are considered to be correctly structured programs in that language
// statement - a single instruction in a program
// comment - a note in the code that is ignored by the interpreter, used to explain the code
// variable - a named storage location in memory that holds a value




// // // Variables are containers used to store data values in JS
// // const name = "ThankGod";

// A value is a piece of data. It is the most fundamental unit of information that we have in programming. Call it the smallest unit of information e.g 23, 50, "Beans"

// const fruit = "apple";
// let fullName = "John Cena";
// fullName = "Michael Jackson";

// console.log(fruit, fullName, $age);

// Assignment

/*
1.Create 20 different Variables for either of number or string data type.

2. Create 5 variables and reassign their values using dynamic typing. Show all in the browser console

3.  create a paragraph text in your html file. write a logic that changes the text to "I am learnig JavaScript" When a button is clicked.

4. Create an alert that says "Mita School is the best School in Uyo"

*/

// // // 3 ways to declare variables
// // // var, let and const

// // var monica = "Nkem";
// // let names = "John";
// // const namez = "Clement";
// let logoColor = "red";
// let full_Name = "edet Okon";
// let $age = 70;

let javaScriptIsFun;
console.log(typeof javaScriptIsFun);

// // let javaScriptIsFun = true;

// // javaScriptIsFun= 67;

// // console.log(typeof javaScriptIsFun);

// let birthYear;
// birthYear = 2005;
// console.log(typeof birthYear);

// let color = "red";
// console.log(color);
// let firstName = "James";

// console.log(firstName);




// Variables Naming Rules/ Conventions
//1. varibales name should descriptive  e.g let colors = "mango" ❌  let color = "blue"; ✅
// 2. variable names must start with (a-z, A-Z)  e.g if the variable contains just a name, use lower case letters let age = 80;
// if it contains two words (names) use:
//a. camel case e.g const firstName = "Overcommer";
//b. snake case e.g let his_age = "90";
//3. Variable names cannot start with a digit
//4. variable names can start with the $ sign e.g let $name = "Hypeman";
//do not use reserved keywords e.g let class = ""
// use paschal case e.g = function CarModel() {}
// const API_KEY

//WAYS OF DECLARING VARIABLES

//1. let - blocked-scoped
// 2. const  -blocked - scoped
//3. var - global -scope

var fname = "Chris";
var fname = "Chris";

// const hisName = "John";
// const hisName = "John"


function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // ✅ 10 - var is accessible outside block
}
testVar();
console.log(x); // ❌ ReferenceError

// Problematic example with loops
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Logs: 3, 3, 3
}

function testLetConst() {
  if (true) {
    let y = 20;
    const z = 30;
    console.log(y, z); // ✅ 20, 30
  }
  console.log(y); // ❌ ReferenceError
  console.log(z); // ❌ ReferenceError
}

// Fixed loop example
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // ✅ Logs: 0, 1, 2
}



// DATA TYPES IN JAVASCRIPT
// WHAT IS DATA TYPE?
// Data type is an attribute of data which tells the compiler or interpreter how the programmer intends to use the data.
// In JavaScript, there are 7 primitive data types:




// // DATA TYPES
// // string, number, boolean, null, undefined, BigInt, symbol
// There are two types of numbers in js - integers(ints or int) / floats

// let num = 45;
// let num2 = "70"; // string
// let job = "teacher";
// let firstJob = "doctor";
// // integers

// let add = 80;
// let x = 12;
// +, *, **, %, /, $ _
// let a = 20.7;
// let b = 50;
// let c = a + b;
// console.log(c);

// // floats .. these are fractions
// const comma = 56.7;

// // Boolean
// Boolean is a data type that returns either true or false

// console.log(676 === "676");

// let funds = 50;
// let hasAccount = true;

// if (funds >= 200 && hasAccount == true) {
//   alert("This user can be a customer");
// } else {
//   alert("This user cannot be a customer");
// }

// let year;
// year = 2025;
// console.log(year);

// //07087766823

// //Assignment 1: Basic Variables

// //Create variables for your name, age, and country.

// //Print them in a sentence like: my name is Dee, i am 30 years old, and i live in nigeria

// //Create one variable each for:

// //A string

// //A number (integer or float)

// //A boolean

// // if(condition){
// // run this
// // }

// //Create two boolean variables:
// //isRaining = true, haveUmbrella = false.

// // Use if...else to print:

// // "You will get wet!" if it's raining and no umbrella.

// // "You are safe!" otherwise.

// // ==   equal to
// //!==  not equal to

// let isRaining = true;
// let haveUmbrella = false;

// if (isRaining && !haveUmbrella) {
//   console.log("You will get wet!");
// } else {
//   console.log("You are safe!");
// }

// // Arrays
// // Arrays are special type of variables used to store more than one value.

let numbers = [7, 18, 20, 44, 80, 124, 645];

console.log(numbers[5]);

const javaScriptStudents = [
  "ThankGod",
  "King",
  "Dave",
  "Hanna",
  "Victor",
  "Wisdom",
  "Utibe",
  "Cletus",
  "Michelle",
  "Godwin",
  "Bright",
  "Alex",
];

console.log(javaScriptStudents[10]);

// // Object

let church = {
  name: "Die By Fire Ministry",
  founded: 2001,
  founder: "Alex",
  favoriteBibleBooks: ["Matthew", "Deuteronomy", "Malachi", "Solomon"],
  totalNumberOfFineGirls: 89,
  motto: "In osusu we trust",
};
console.log(church.name);

console.log(church["founded"]);

let student = {
  name: "Bright",
  age: 900,
  grade: "SS2",
  subjects: ["Maths", "English", "Geography"],
};

console.log(student["age"]);

console.log(student.subjects);

// const student = {
//   number: 8,
//   laptopModel: "Toshiba",
//   name: "Hannah Samuel",
//   age: 70,
// };







// // Operators
// // Operators are special symbols that perform operations on variables and values.
// //1. Arithmetic Operators, assignment operators, comparison operators, logical operators, string operators

// //Arithmetic Operators
// // -, +, *, %, **, /, ++, --

// //subtraction
// let subNum = 90 - 20;
// console.log(subNum)

// var sub_num = 1000 - 250;

// //Addition

// let addNum = 2 + 3;

// let add_num = 1205 + 5.5;

// Multiplication

// let multNum = 4 * 8;
// let mult_Num = 0.9 * 300;

// // modulus operation

// let modNum = 10 % 3;
// let mod_Num = 27 % 4;

// // Exponentiation (Raised to power of)

// let pNum = 34 ** 5;
// let p_num = 5 ** 5;

// // Division

let divNum = 4 / 3;
let div_Num = 21 / 7;

// // Increment  ++

let incNum = 20;
incNum++;

// incNum = incNum * 2;
incNum *= 2;

// // decrement --

let decNum = 20;
decNum--;
// console.log(decNum);



// // Comparison Operators
// // These are operators used to combine multiple boolean expressions
// // == loose equal to
// //=== strict equal to
// // != loose not equal to
// // !== strict not equal to
// // < less than
// // > greater than
// // <= less than or equal to
// //>= greater than or equalto

// //Examples
// let x = 5;
// let y = 25;
// if (x >= y) {
//   console.log("This logic is true");
// } else {
//   console.log("The logic is false");
// }

// console.log(56 >= 2);

// logical operators
// and (&&) or(||) not(!)

let age = 16;
let hasLicense = true;

if (age >= 18 && hasLicense == true) {
  console.log("This person can drive");
} else {
  console.log("This person cannot drive");
}

// Logical not (!)

let password = "admin";
if (password !== "admin") {
  console.log("Pleaese Login");
} else {
  console.log("Logged in");
}

let isRaining = true;
if (!isRaining) {
  console.log("Go outside");
} else {
  console.log("Stay indoors");
}

// Assignment Operators
// =, +=, -=, *=, /=, %=, **=

let web = 10;
// web = web + 20
web += 20;
console.log(web);

let sub = 50;
sub -= 10;
console.log(sub);

let color = "red";
color += "car";
console.log(color);

// String Operation - concatenation

// let msg = "Hello";
// let msg1 = "Welcome to Mita School";

// let msg3 = msg + msg1;
// console.log(msg3)

let message = "Hello";
message += "World";

let mez = "Hi";
let mezz = "My name is Utibe";

console.log(mez + " " + mezz); // method 1

console.log("Hello" + " " + "My name is Utibe"); // method 2

// Assignment

/*
Assignment 1: Comparison Operators

👉 Ask the user for their age. Then:

Check if they are older than 18

Check if they are exactly 18

Check if they are younger than 18
Display the result as a message like:

"You are old enough!"

"You’re exactly 18, welcome to adulthood!"

"Sorry, you’re still underage."



Assignment 2: Assignment Operators

👉 Create a variable score = 10.

Use +=, -=, *=, /=, and %= on it step by step.

Print the value of score after each operation.

*/
let score = 10;
console.log("Initial score", score); //10;

score += 2;
console.log("after +=2", score); //12

score -= 3;
console.log("after-=3", score); //9

score *= 2;
console.log("after*=2", score); //18

score /= 3;
console.log("after /=3", score); //6

score %= 4;
console.log("after%=4", score); //2

let $age = 12;

if ($age == 18) {
  console.log("You’re exactly 18, welcome to adulthood!");
} else if ($age > 18) {
  console.log("You are old enough!");
} else {
  console.log("Sorry, you’re still underage.");
}






// Control Flow / Condtional Statements (if statement, else statement, else if, switch statement)

let agee = 15;

if (agee >= 18) {
  console.log("This user is an adult");
} else {
  console.log("This user is a minor");
}

// else if

let divIndex = 5;

if (divIndex >= 9) {
  console.log("This is a first world country");
} else if (divIndex >= 7) {
  console.log("This is a second world country");
} else if (divIndex >= 4) {
  console.log("This is a third world country");
} else if (divIndex >= 2) {
  console.log("This is a fourth world country");
} else {
  console.log("This is a fifth world country");
}

// Switch Statement
//A switch statement checks one value and compares it against many possible cases.

let light = "Green";

switch (light) {
  case "Red":
    console.log("Stop!");
    break;
  case "Yellow":
    console.log("Get Ready!");
    break;
  case "Green":
    console.log("Go!");
    break;
  default:
    console.log("Light don spoil");
}

// 2

let role = "admin";

switch (role) {
  case "admin":
    console.log("You have full access");
    break;
  case "editor":
    console.log("You can edit content");
    break;
  case "viewer":
    console.log("You can only view content");
    break;
  default:
    console.log("Unknown role");
}


//3
let day = "Sunday";

switch (day) {
  case "monday":
    console.log("First working day of the week");
    break;
  case "tuesday":
    console.log("second working day of the week");
    break;
  case "wednesday":
    console.log("third working day of the week");
    break;
  case "thursday":
    console.log("fourth working day of the week");
    break;
  case "friday":
    console.log("TGIF 🕺🕺💃🕺");
    break;
  default:
    console.log("It is the weekend!");
}

// console.log(`today is ${day}`);

/*
WHEN TO USE SWITCH

When checking one variable

When there are many fixed options

Cleaner than many else if

*/


//===== Ternary Operator ====
//A shorter version of if...else

  //synthax

  //condition ? valueIfTrue : valueIfFalse;

  //1. age check
  let age = 20;

let message = age >= 18 ? "Adult" : "Minor";
console.log(message);

/*
EXPLANATION
Condition: age >= 18

If true → "Adult"

If false → "Minor"
*/


//2. Login status

let isLoggedIn = false;

let lStatus = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(lStatus);


//3. Even or odd Number checker

let number = 7;

let result = number % 2 === 0 ? "Even" : "Odd";
console.log(result);

//% 2 === 0 checks if number is even

//If true → "Even"

//Else → "Odd"

// WHEN TO USE TERNARY
//✔ Simple decisions
//✔ One condition





//FUNCTIONS
// A function is a reusable block of code designed to perform a specific task.

//SYNTAX
function addNum() {
  //function body
}

// Normal function Examples

//1. A simple function to say hello

function sayHello() {
  console.log("Hello, welcome to javaScript class!");
}
sayHello();

// The act of calling a function is known as invoking  the function.

//2. function with a parameter(input)
function greet(name) {
  alert("Hello" + " " + name + "!");
}
greet("John");

// function expression
// Anytime we get a variable and set it equal to something whther it's a function or string or something else, that is known as expression E.g

const speak = function () {
  console.log("Good day!");
};
speak();

// 3. function that adds two numbers

function addNum(a, b) {
  return a + b;
}
console.log(addNum(5, 30));

function plusNum(x, y) {
  return x + y;
}
console.log(plusNum(34, 12));

//4. function that checks if a number is even
function checkEven(num) {
  return num % 2 === 0;
}
console.log(checkEven(8));

// Arrow Functions
//1. simple arrow function

const sayHi = () => console.log("Hi!");
sayHi();

//2. arrow function with parameter

const greet = (name) => console.log("Hello" + " " + name);

// 3. Arrow function that adds numbers

const addNums = (a, b) => a + b;
console.log(addNums(7.9, 12.0));

// 4. Arrow function with one parameter(no need for brackets)
const mult = (num) => num * num;
console.log(mult(8));

//. 5 Arrow function returning an object

const studentInfo = (name, age) => ({ name: name, age: age });
console.log(studentInfo("David", 70));

//6. Arrow functions with multiple lines (use curly braces + return)

const getGrade = (score) => {
  if (score >= 70) return "A";
  else if (score >= 50) return "B";
  else return "F";
};
console.log(getGrade(80));

//7. Arrow function inside an array map()

const numberz = [1, 2, 3, 4];
const values = [6, 8, 9, 5];
const squares = numberz.map((double) => double * double); // [1, 4, 9, 16]
console.log(squares);


