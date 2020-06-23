// if , else and ? and logical || , &

// ? -> let result = condition ? value1 : value2;

if (age < 3) {
  message = "Hi!";
} else if (age < 18) {
  message = "Hello!";
} else if (age < 100) {
  message = "Greetings!";
} else {
  message = "What an unusual age!";
}

// using the ?
let accessAllowed = age > 18 ? true : false;

// multiple
// let age = prompt("age?", 18);

let message =
  age < 3
    ? "Hi, baby!"
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";

alert(message);

// some truthy and falsy values
if (0) {
  // 0 is falsy
}

if (1) {
  // 1 is truthy
}



// Using || or &

let name = 'tushar' || null;


console.log('name', name);


// OR “||” finds the first truthy value

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder


// AND

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

// AND “&&” finds the first falsy value


// !(NOT)

result = !value;
alert( !true ); // false
alert( !0 ); // true




// Nullish coalescing operator '??'

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// show the first not-null/undefined value
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder



// compare with ||
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0