/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

// My Solution

function fakeBin(x){
    let str = '';
    for(let i = 0; i < x.length; i++){
        if(x[i]< '5')str += '0'
        else if(x[i] >= '5')str += '1';
    }
    return str;
};


/*
P: a sting of digits

R: return the resulting sting of digits, replace any digit below 5 with '0' and any digit 5 and above with '1'

E: ('45385593107843568'), '01011110001100111')

P: 1 - declare a empty string variable
   2 - loop through given string
   3 - write an if/else if statement
   4 - return empty string
*/