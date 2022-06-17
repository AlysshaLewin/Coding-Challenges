/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

*/

//My Solution

function sumMix(x){
    return x.reduce((x, y) => Number(x) + Number(y), 0);
}


/*
P: We are given an an array of integers as strings and numbers

R: We are returning the sum of the array values as if they were all numbers

E: n/a

P: 1 - use the reduce() method on x, use arrow notation 
   2 - add the Number() method to both x and y, initialize with 0

*/