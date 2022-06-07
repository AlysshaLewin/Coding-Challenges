/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.
*/

//My Solution

function invert(array) {
    let invert = [];
   for (let i = 0; i < array.length; i++){
       if (array[i] > 0){
           invert.push(array[i] - (array[i] * 2)); //checks if the value is greater than 0, convert it to a negative by subtracting the positive number from itself times 2
       }
       if (array[i] < 0){
            invert.push(Math.abs(array[i])); //checks if the value is less than 0, also if the number is a negative.
       }
       if (array[i] == 0){
           invert.push(-0); //changes all 0s to negative 0s
       }
   } 
    return invert; //after changing and adding all the numbers into the invert array, we return it
}

/*
P: given an array containing both positive and negative values

R: return the inverse of each of the numbers

E: invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

P: 1 - create an array to contain all the inverted values
   2 - loop through array
   3 - if statements
   4 - return invert
*/