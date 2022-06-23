/*
In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.

*/

//TIP: Even numbers are those numbers that are exactly divisible by 2. Hence when % is used with 2, the number is even if the remaineder is 0. Otherwise, the number is odd.

//My Solution

function testEven(n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
};


// Solution 2

// function testEven(n) {
//     return n % 2 === 0 ? true : false;
// }

/*
P: param = (n) a number passed into a function

R: Your code will determine if the number passed is even (or not).
The function needs to return either a true or false.

E: const number = 6;
const result = number % 4; // 2

P: 1 - write and if/else statement. If n mod 2 == 0, return true, else return false.
*/