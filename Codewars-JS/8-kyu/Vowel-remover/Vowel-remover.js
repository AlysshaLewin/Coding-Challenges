/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/

//My Solution

function shortcut (string) {
    return string.replace(/[aeiou]/gi, '');
}


/*
P: param are strings that need to remove lowercase vowels

R: return string without vowels

E: "hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"

P: 1 - use the replace() method with the expression /[aeiou]/gi
   2 - the replace method will return a new string where any vowel in the original string is replaced with an empty string.
*/