/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/

//My Solution
function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
};


/*
P: we have an array of strings

R: we're returning a sorted array of the same strings but ordered from shortest to longest

E: ["Telescopes", "Glasses", "Eyes", "Monocles"] --> ["Eyes", "Glasses", "Monocles", "Telescopes"]

P: 1 - use the array.sort() by passing compare function as an argument
   2 - if the compare function return value is a.length - b.length, it sorts the array in ascending order
   3 - if the compare function return value is b.length - a.length, it sorts the array in descending order 
*/