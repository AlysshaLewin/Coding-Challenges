/*
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]
*/

//My Solution

function greet(name){
    return `Hello, ${name} how are you doing today?`;
}




/*What is PREP?

PREP is a methodology in which to approach an algorithm or coding challenge. The acronym stands for Parameters, Return, Example, Pseudocode.

    Parameters
    What is the type of argument being inputted and are there multiple or default arguments?

    Return
    What is being asked to be returned and what is the type?

    Example
    Provide 2-3 examples of what we expect to happen if we call the function with certain arguments. Can you think of any edge cases?

    Pseudocode
    Write informal steps on how to solve the problem. Think about what the parameters are and what steps need to be taken to get to our expected return. All statements showing "dependency" are to be indented.
*/

//P: turn name input into a string
//R: return the input param of "name" to a string "Hello, <name> how are you doing today?"
//E: 
//P: turn input into string
   //insert param into temperal literal, Hello, ${name} how are you doing today?