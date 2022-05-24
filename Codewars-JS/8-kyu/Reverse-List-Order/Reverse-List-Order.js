/*
In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]
*/

//My Solution

function reverseList(list) {
    return list.reverse();
}


/*PREP is a methodology in which to approach an algorithm or coding challenge. The acronym stands for Parameters, Return, Example, Pseudocode.

    Parameters
    What is the type of argument being inputted and are there multiple or default arguments?

    // default argument is list

    Return
    What is being asked to be returned and what is the type?

    // return an array list in reverse order 

    Example
    Provide 2-3 examples of what we expect to happen if we call the function with certain arguments. Can you think of any edge cases?

    // [1, 2, 3, 4] --> [4, 3, 2, 1]
    [9, 2, 0, 7] --> [7, 0, 2, 9]

    Pseudocode
    Write informal steps on how to solve the problem. Think about what the parameters are and what steps need to be taken to get to our expected return. All statements showing "dependency" are to be indented.
*/
    // use .reserve() method on list parameter
    // return