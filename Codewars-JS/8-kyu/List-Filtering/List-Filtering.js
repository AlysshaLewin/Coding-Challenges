/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/


//My Solution

function filter_list(numArr) {
    return numArr.filter(arrItem => arrItem >= 0 && typeof arrItem === 'number');
}

//OR

// function filter_list(numArr) {
//     return numArr.filter(callbackFunc);
// }

// function callbackFunc(arrItem) {
//     // 1 - it is a number
//     // 2 - it is positive
//     if (arrItem >= 0 && typeof arrItem === 'number') {
//         return true;
//     } else {
//         return false;
//     }
// } 


/*
P: param is a list of non-negative numbers and strings

R: returns a new list with the strings filtered out

E: filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

P: 1 - create a callback function that states if an item is greater than or equal to 0 && the typeof the item is equal to number return true, else return false.

*/