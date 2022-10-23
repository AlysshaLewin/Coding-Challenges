/*
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/

//My Solution

function switcher(x){
    const symbol = { 27: "!", 28: "?", 29: " " };
    return x
    .map((s) => (symbol[s] ? symbol[s] : String.fromCharCode(123 - Number(s))))
    .join("");
}

/*
P - An array containing strings representing numbers. The numbers corresport to alphabet in reverse order.
27 = '!', 28 = '?' and ' ' = 29.

R - A string of the converted letters and symbols.

E - In test cases

P - a is 97, z is 122 in ascii. 123- charCode = letterNum.
charCode = 123 - letterNum
make obj for 27, 28, 29
for any less thsn 27, do charCode method
first, .map() to convert each entry into letter/symbol. Then .join('') for final value

*/