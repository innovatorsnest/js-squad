// Arrow functions

let func = (arg1, arg2, ...argN) => expression


// Example 
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");

welcome();



// multiline arrow functions
let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  
  alert( sum(1, 2) ); // 3