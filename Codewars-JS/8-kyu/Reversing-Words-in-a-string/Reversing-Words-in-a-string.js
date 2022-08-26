/*
You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
*/


//My Solution

function reverse(string){
    return string.split(" ").reverse().join(" ");
}


/*
 P: params is a given string that needs to be reversed.

 R: return the reversed string.

 E: "Hello World" --> "World Hello"
"Hi There." --> "There. Hi"

 P: 1 - use the split method to split the string into an array of substrings.
    2 - use the reverse method to reverse the array.
    3 - use the join method to join the string back together
 */