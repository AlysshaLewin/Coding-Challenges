/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

//My Solution

function simpleMultiplication(number) {
    return number % 2 ? number * 9 : number * 8;
}


/*
P: param = given number

R: return given number by 8 if it is an even number and by 9 otherwise

E: n/a

P: 1 - write a ternary for n*8 or n*9
*/