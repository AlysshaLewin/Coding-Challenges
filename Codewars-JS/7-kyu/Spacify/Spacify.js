/*
Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"
*/

//My Solution

function spacify(str) {
    return str.split('').join(' ');
}

/*
P: params is a normal string

R: return the given string with spaces inserted between each character

E: [ 'c', 'o', 'f', 'f', 'e', 'e' ] --> 'c o f f e e'
[ 'b', 'a', 'n', 'a', 'n', 'a' ] --> 'b a n a n a'


P: 1 - user the split() method on the string which will give a character array.
   2 - use the join() method on the array to join the characters with a space separator.
*/