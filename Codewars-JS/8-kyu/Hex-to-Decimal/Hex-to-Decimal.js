/*
Complete the function which converts hex number (given as a string) to a decimal number.

*/

//My Solution

function hexToDec(hexString){
    return parseInt(hexString, 16);
}

/*
P: param is a hex number as a string

R: we're to convert the hex number to a decimal number

E: hex1 = "2"; // Should return 2
const hex2 = "35"; // Should return 53
const hex3 = "1f4"; // Should return 500

P: use the parseInt() function
    - the parseInt() function takes a string as an argument and returns an integer. 
    - The first argument of it is the string to be converted, and the second argument is the radix (base) of the number.
    - Since we are converting to a hexadecimal number, the radix is 16, since there are 16 hexadecimal digits.
*/