/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

//My Solution

function countPositivesSumNegatives(input) {
    let positiveNums = 0;
    let negativeNums = 0;
    if (input === null || input.length === 0){
        return [];
    } else {
        input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num);
    }
    return [positiveNums, negativeNums];
}

/*
P: input which is an array of integers

R: If the input is an empty array or is null, return an empty array. 

E: For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

P: 1 - create 2 variables, set them both to 0
   2 - create and if statement, return an empty array if the input is null or empty in the function.
   3 - Create an else if the input is neither empty, nor null checking if the numbers were greater than zero and run a conditional expression to count the positive numbers, and add negative numbers using the forEach() method.
*/