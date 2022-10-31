/*
Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

*/

//My Solution

function absentVowel(x){
    let vowelString = ['a','e','i','o','u'];
    for (let i = 0; i < vowelString.length; i++) {
      if (!x.includes(vowelString[i])) {
        return i;
      }
    }
}
//P - param is a given string of vowels
//R - return and figure out the index of which vowel is missing from the given string
//E - 
//P - 
  //create vowelArray
  //loop through voweArray
  //  IF string does not contain vowelArray'i'
  //    THEN return vowelArray index