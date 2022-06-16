/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/


//My Solution

function find_average(array) {
    if (array.length > 0) {
        let average = array.reduce((a, b) => a + b) / array.length
        return average
    } else {
        return 0;
    }
}
