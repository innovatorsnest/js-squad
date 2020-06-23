// Comparisons


alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)


// assign result to the variable
let result = 5 > 4; // assign the result of the comparison
alert( result ); // true



// String comparisons 
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true


// comparison of differnt types
alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1




// Boolean comparisons
alert( true == 1 ); // true
alert( false == 0 ); // true


// funny consequence
let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!


// strict equality limitiation in js
//A regular equality check == has a problem. It cannot differentiate 0 from false:

alert( 0 == false ); // true
//The same thing happens with an empty string:

alert( '' == false ); // true


// A strict equality operator === checks the equality without type conversion.

alert( 0 === false ); // false, because the types are different



// null and undefined comparison
alert( null === undefined ); // false
alert( null == undefined ); // true



// null vs 0
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true


// undefined cannot be compared to other values
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)


// The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.



// Please Note* - Don’t use comparisons >= > < <= with a variable which may be null/undefined, unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.