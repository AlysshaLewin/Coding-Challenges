/*
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

Examples:

uniTotal("a") == 97
uniTotal("aaa") == 291
*/


//Solution

function uniTotal (str) {
      // total up dem unicodes!
      let count=0;
      for (let a=0;a<str.length;a++){
      count += str.charCodeAt(a);
      }
      return count;
}