/*
The function takes in 2 inputs x and y, and should return x to the power of y

Simple, right? But you're NOT allowed to use Math.pow();

Obs: x and y will be naturals, so DON'T take fractions into consideration;

Note : zero to the power of zero equals one in this kata

Great coding <3

*/

//My Solution

function power(x,y){
    let p = 1;
    for (let i = 0; i < y; i++){
        p *= x;
    }
    return p;
}


/*

PREP is a methodology in which to approach an algorithm or coding challenge. The acronym stands for Parameters, Return, Example, Pseudocode.

    Parameters
    What is the type of argument being inputted and are there multiple or default arguments?

    //2 inputs x and y

    Return
    What is being asked to be returned and what is the type?

    // return x to the power of y. CANNOT use Math.pow()

    Example
    Provide 2-3 examples of what we expect to happen if we call the function with certain arguments. Can you think of any edge cases?

    //

    Pseudocode
    Write informal steps on how to solve the problem. Think about what the parameters are and what steps need to be taken to get to our expected return. All statements showing "dependency" are to be indented.
*/  // declare a variable
    // create a for loop
    // 