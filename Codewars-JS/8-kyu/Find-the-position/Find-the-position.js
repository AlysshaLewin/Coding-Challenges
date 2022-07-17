/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/


//My Solution

function position(letter){
    alp = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z"];
    return "Position of alphabet: " + (alp.indexOf(letter) + 1);
}


/*
P: params is a letter 

R: return the position of a letter in the alphabet

E: Input: "a" --> Output: "Position of alphabet: 1"
Input: "c" --> Output: "Position of alphabet: 3"
Input: "e" --> Output: "Position of alphabet: 5"

P: 1 - create a variable that contains the alphabet 
   2 - return Position of alphabet:, + variable name using the indexOf() method + 1

*/