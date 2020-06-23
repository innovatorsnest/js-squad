// Type conversion and typeof

// converting the boolean to string
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string


// string to number
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number



// you cannot convert this to number
alert( Number("123z") ); // NaN



// Boolen Coversions
// 0 => true (in php it is false) here non empty strings are always true
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false