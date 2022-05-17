/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/

//My Solution

function between(a, b) {
    let array = [];
    for(let i = a; i <= b; i++) {
        array.push(i);
    }
    return array;
}



//P: params given are a, b
//R: return an array of all integers between the parameters including og params
//E: a = 1, b = 4, ---> [1, 2, 3, 4]
//P: create empty array
    // create a for loop through array
    //use .push() method on array