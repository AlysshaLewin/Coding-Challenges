/*
Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

*/

//My Solution

function reverseWords(str){
    return str.split(" ").reverse().join(" ");
}

/*
P: param = string of words

R: reverse the word in a string, and if there are multiple words in the string, they will stay in the same place, but the words would be backward. 

E: "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

P: 1 - split() method
   2 - reverse() method
   3 - join() method
*/