/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

//My Solution

//P: parameter given is n
//R: return function with digits in descending order
//E: Input: 42145 -> Output: 54421
//P: turn n into a string,
    // split(), then sort(), reverse(), join()

function descendingOrder(n){
   let strNum = String(n);
            strNumArr = strNum.split(""),
            strNumArrSorted = strNumArr.sort(function(a,b){
                return a - b;
            });
           
           strNumArrSorted = strNumArrSorted.reverse();
           
           strNum = strNumArrSorted.join("");

           return parseInt(strNum);
}