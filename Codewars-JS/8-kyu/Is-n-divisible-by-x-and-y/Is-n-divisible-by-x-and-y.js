/*
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
*/


//My Solution

function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0
}


/*
P: n, x, y

R: checks if a number n is divisible by two numbers x AND y

E: 10 % 2 = 0
10 % 3 = 1

P: 1 - create a ternary statement
   2 - check if n mod x is equal to 0 in value and type (===)
   3 - check if n mod y is equal to 0 in value and type (===)
*/