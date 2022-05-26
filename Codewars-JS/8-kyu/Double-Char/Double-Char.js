/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Good Luck!
*/

//My Solutions


function doubleChar(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++){
        newStr += str[i] + str[i];
    }
    return newStr;
}


/*
P: We have 1 param named str

R: We're gonna return a string which each character is repeated once

E: "String"  -> "SSttrriinngg"

P: 1 - create a new variable to hold empty an string
   2 - loop through new string
   3 - concatenate looped strings
   4 - return newStr
*/