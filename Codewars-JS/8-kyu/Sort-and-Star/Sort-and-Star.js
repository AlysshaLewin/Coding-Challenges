/*
You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

*/

//My Solution

function twoSort(s) {
    return s.sort()
    .slice(0,1)[0]
    .split("")
    .reduce((x,y,z) => x + "***" + y);
}
twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]); 

/*
P: s is an array

R: value must be a string with *** between each letter

E: 

P: 1 - sort a list alpabetically
   2 - return first value as a string with 3 asterisks in between each letter
   3 - split the string into an array
   4 - use reduce to initialize an empty string and add 3 stars after each letter unless letter is last one
*/