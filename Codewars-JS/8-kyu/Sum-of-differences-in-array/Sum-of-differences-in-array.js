/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

*/

//My Solution

function sumOfDifferences(arr) {
    // Sort array in descending order
     const sortedArr = arr.sort((a, b) => b - a);
     // Initialise difference tracker
     let sum = 0;
     // Loop through sorted array
     for (let i = 0; i < sortedArr.length - 1; i++) {
       // Calculate difference between consecutive pairs
       sum += sortedArr[i] - sortedArr[i + 1];
     }
     // Return total
     return sum;
}