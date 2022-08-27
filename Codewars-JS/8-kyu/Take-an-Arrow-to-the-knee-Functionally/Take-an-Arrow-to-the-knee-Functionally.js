/*
Details
You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

Examples
These are example of how to convert a number to an ascii Character:
Javascript => String.fromCharCode(97) // a
C# => Tools.FromCharCode(97) // a
*/

//My Solution

let ArrowFunc = function(arr) {
    return arr.map(arr => String.fromCharCode(arr)).join(''); 
}

/*
P: params is an array of numbers 

R: return an arrays of numbers with numbers converted to a character

E: Javascript => String.fromCharCode(97) // a

P: 1 - complete the function by using the String.fromCharCode
*/