/*
Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.

*/


//My Solution

ffunction findLongest(str) {
  
    let spl = str.split(" ");
    let longest = 0;
    
    for (let i = 0; i < spl.length; i++){
    
      if (spl[i].length > longest) {
        longest = spl[i].length;
      }
    }
      return longest;
  }


/*
P: param given is a string

R: it should return the longest word as a number, There will only be 1 'longest' word

E: foolish --> 7
argument --> 8 

P: function does not currently have curly braces at the end of the statement but parentheses, replace.
 correct curly braces after loop, replace parentheses.
*/