/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

//My Solution

function solution(str){
  return str.split("").reverse().join("");
}

solution('hello');