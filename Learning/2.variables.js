// Variables

// # variable declaration
let message; // or var
message = "Hello!";

alert(message); // shows the variable content

// # single line
let user = "John",age = 25,message = "Hello";

// # multiple line
let user = "John",
  age = 25,
  message = "Hello";



// # copy the data from one variable to another 
let hello = 'Hello world!';

let message;

// copy 'Hello world' from hello into message
message = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!



// error triggering twice 
let message = "This";

// repeated 'let' leads to an error
let message = "That"; // SyntaxError: 'message' has already been declared



// variable declaration 
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3



// Reserved Names
let let = 5; // can't name a variable "let", error!


// use-strict example 

// note: no "use strict" in this example

num = 5; // the variable "num" is created if it didn't exist

console.log(num); // 5


// with "use strict"
"use strict";

num = 5; // error: num is not defined