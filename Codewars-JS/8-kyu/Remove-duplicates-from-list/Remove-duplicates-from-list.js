/*
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.


*/

//My Solution

function distinct(a) {
    return [... new Set(a)];
}


//PREP
/*
P - param is a which is an array of numbers
R - return the array of numbers with duplicates removed
E - [1, 2, 3, 2, 1] --- [1,2,3]
    [4, 5, 6, 4, 2] --- [4,5,6]
P - 1. Remove duplicates from an array using a Set
        2. The set will convert an array of duplicates. The new Set will implicitly remove duplicate elements. 
        3. Then, convert the set back to an array.
*/