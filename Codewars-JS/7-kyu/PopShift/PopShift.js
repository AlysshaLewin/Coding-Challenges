/*
You will be given a string.

You need to return an array of three strings by gradually pulling apart the string.

You should repeat the following steps until the string length is 1:

a) remove the final character from the original string, add to solution string 1. b) remove the first character from the original string, add to solution string 2.

The final solution string value is made up of the remaining character from the original string, once originalstring.length == 1.

Example:

"exampletesthere" becomes: ["erehtse","example","t"]

The Kata title gives a hint of one technique to solve.
*/

//My Solution

function popShift(s){
    let result =['','',''];
  let arr = s.split('')
  while (arr.length > 1) {
    result[1]+= arr.shift()
    result[0]+= arr.pop()
  }
  result[2] = arr[0] || '';
  return result;
}