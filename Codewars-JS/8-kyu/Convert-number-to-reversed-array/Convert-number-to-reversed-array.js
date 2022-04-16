/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]
*/

//My Solution

function digitize(n) {
   let str = String(n);
   return str.split('').map(Number).reverse()
}