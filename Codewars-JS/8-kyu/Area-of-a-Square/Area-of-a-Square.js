/*
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
*/

//My Solution

function squareArea(A){
    return Number(Math.pow(2 * A / 3.1416, 2).toFixed(2));
}