/*
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

//My Solution

function arrayPlusArray(arr1, arr2) {
    return arr3 = arr1.concat(arr2).reduce((x,y) => x + y);
//join the two arrays together and the method to achieve that is would be concat.
//include another array, that is equal to concatenating the two arrays given.
//iterate through the array and sum all the elements together, so should use the reduce method as it returns a single value.
//return keyword as returning the sum of all the elements in the array.
}