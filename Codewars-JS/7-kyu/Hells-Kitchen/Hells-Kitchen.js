/*
Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.
*/

//My Solution


function gordon(a) {
    a = a
      .toUpperCase() // toUpperCase() method to change the string to all uppercase letters
      .replace(/[aA]/g, "@") // replace() method to replace any 'a' or 'A' in the string to '@'
      .replace(/[EIOU]/g, "*"); // replace() method to replace any 'EIOU' in the string to '*'
    return a // returning the string 'a'
      .split(" ") // using the split() method to split the string into separate words
      .map((x) => x + "!!!!") // map() method to iterate through the array of strings and adding '!!!!' to the end of each element
      .join(" "); // join() method to join the strings in the array back into a string
}