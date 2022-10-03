/*
Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

Example
scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]
Good luck!
*/


//My Solution

function scrollingText(text){
    let txt = text.toUpperCase()
    return txt.split('').map((el,i)=>txt.slice(i) + txt.slice(0,i));
}


//OR

// function scrollingText(text){
//     let result = [];
    
//     for( var i = 0; i < text.length; i++){
//       result.push((text.slice(i) + text.slice(0,i)).toUpperCase())
//     }
    
//     return result;
// }