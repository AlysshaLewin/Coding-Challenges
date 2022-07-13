/*
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.

*/


//My Solution

function tripleTrouble(one, two, three){
    let string = '';
    for (let i = 0; i < one.length; i++) {
        string += `${one[i]} ${two[i]} ${three[i]}`;
    }
    return string;
}


/*
P: params are groups of letters

R: return a string that combines all of the letters of the three inputed strings in groups

E: Input: "aa", "bb" , "cc" => Output: "abcabc"

P: 1 - write a variable with an empty string
   2 - write a for loop that loops through the params and increment with template literal of each param, return string

*/