/*
Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)

"Yes" --> "Yes?" 
"No?" --> "No?"
*/


//My Solution

function ensureQuestion(s) {
    return s.endsWith('?') ? s : s + '?';
}

/*
P: param is a string

R: return a string with a "?" appended to the end unless the original string ends with a question mark, in which case, returns the original string.

E: "Yes" --> "Yes?" 
"No?" --> "No?"

P: 1 - use the endsWith() string method in a ternary operator

*/