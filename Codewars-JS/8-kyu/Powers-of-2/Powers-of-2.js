/*
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
FUNDAMENTALS
*/

//My Solution

/*What is an integer? any positive or negative number including 0.This particular problem will only be looking at non-negative integers or whole numbers. Examples of these include 0, 2, 59, 67, 2000.*/

/*What is an exponent? An exponent shows how many times to use a number in a multiplication. For example, 7² = 7 * 7 = 49.This problem requires we return a list of all the powers of 2 ranging from 0 to n.*/

// function powersOfTwo(n){
// //Create an empty array + name it
// let arr = []
// //Create a for loop to iterate through the exponent of i
// for (i = 0; i <= navigator; i++){
// //Push the results into the arr array
// let answer = 2**i
// arr.push(answer)
// }
// //Return the arr array
//     return arr
// }


function powersOfTwo(n){
    let arr = []
    for (i  0;i <= n; i++){
      let answer = 2**i
      arr.push(answer)
    }
    return arr 
  }