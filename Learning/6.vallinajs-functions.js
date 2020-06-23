// Functions

function showMessage() {
  console.log("Hello everyone!");
}

showMessage();

//call multiple times

showMessage();
showMessage();

// local variables
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert(message);
}

showMessage(); // Hello, I'm JavaScript!

alert(message); // <-- Error! The variable is local to the function

// outer Variables  - The outer variable is only used if there’s no local one.
let userName = "John";

function showMessage() {
  let message = "Hello, " + userName;
  alert(message);
}

showMessage(); // Hello, John

// Passing Arguments
function showMessage(from, text) {
  // arguments: from, text
  console.log(from + ": " + text);
}

showMessage("Ann", "Hello!"); // Ann: Hello! (*)
showMessage("Ann", "What's up?"); // Ann: What's up? (**)

// *Note - If a parameter is not provided, then its value becomes undefined.

function showMessage(from, text = "no text given") {
  console.log(from + ": " + text);
}

showMessage("Ann"); // Ann: no text given

// using function
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}

// use || for handling empty values
function showMessage(text) {
  text = text || "empty";
}

// Using return
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Do you have permission from your parents?");
  }
}

// if return nothing or return empty
function doNothing() {
  /* empty */
}

alert(doNothing() === undefined); // true

// Function Naming
showMessage(); // shows a message
getAge(); // returns the age (gets it somehow)
calcSum(); // calculates a sum and returns the result
createForm(); // creates a form (and usually returns it)
checkPermission(); // checks a permission, returns true/false

// types of declaring function
let sayHi = function () {
  alert("Hello");
};

function sayHi() {
  alert("Hello");
}

// copy the functions
function sayHi() {
  // (1) create
  alert("Hello");
}

let func = sayHi; // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)c

// same for the variable
let sayHi = function () {
  alert("Hello");
};

let func = sayHi;
// ...

// callback function
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

// DIFFERENCE
// Function Declaration
function sum(a, b) {
  return a + b;
}

// Function Expression
let sum = function (a, b) {
  return a + b;
};



// Working Algorithm

// Function Declaration
sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}


// Function Expression
sayHi("John"); // error!

let sayHi = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};



// Methodology
// Example 1
let age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined



// Example 2
let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now