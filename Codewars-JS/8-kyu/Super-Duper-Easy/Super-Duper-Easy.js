/*
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
*/


//My Solution

function problem(x){
    return isNaN(x) || x === "" ? "Error" : (x * 50) + 6;
}


/*
P: param = value(x) multiplied by 50 and increased by 6

R: return the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error"

E: n/a

P: 1 - createa ternary statement stating, create a return stating if nan(x) OR x is === a string.
   2 - it will return either an "Error" or value multiplied by 50 and increased by 6
*/