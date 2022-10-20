/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

Return as a number.
*/

//My Solution

function divCon(x){
    let num1 = 0,
      num2 = 0;
  x.map(v => (typeof v === "string" ? (num2 += v * 1) : (num1 += v)));
  return num1 - num2;
}