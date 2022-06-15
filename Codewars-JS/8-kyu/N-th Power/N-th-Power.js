/*
This kata is from check py.checkio.org

You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:

array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
*/


//My Solution

function index(array, n){
   if (array.length <= n || 0 > n) {
    return -1;
   } else {
    return Math.pow(array[n], n);
   }
}


/*
P: params = an array with positive numbers, and a non-negative number

R: return the N-th power of the element in the array with the index N

E: array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;

P: 1 - write and if statement stating if the array is less than or equal to n OR 0 is greater than n return -1
   2 - write an else statement stating that else return Math.pow
*/