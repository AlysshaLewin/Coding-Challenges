/*
*** No Loops Allowed ***

You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.
*/

//My Solution

function check(a,x){
    return a.includes(x);
};


/*
P: params are a, which is a given array and x which contains a value.

R: return and check whether the provided array contains the value, without using a loop. Return true if the array contains the value and false if not.

E: [1,2,3,4,5] --> (4) true
[1,2,3,4,5] --> (2) true
[1,2,3,4,5] --> (6) false

P: 1 - use the .includes() method which checks if an array contains a certain number.
*/