/*
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]
*/

//My Solution 

function monkeyCount(n) {
    let array = [];
    for(let i = 1; i <= n; i++){
        array.push(i);
    }
    return array;
}

/*
P: param = a number

R: populate an array with all numbers up to and including the param number but excluding zero

E: 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    1 --> [1]

P: 1 - create a empty array
   2 - create a for loop initializing with 1, i is less than or equal to n, increament ++
   3 - use the push() method to push the array into the empty array
   4 - return the array
*/