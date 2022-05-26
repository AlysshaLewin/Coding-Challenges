/*
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
*/

//My Solution

function sumStr(a,b) {
    return String(Number(a) + Number(b));
}



/*
P: 2 intergers in form of a string

R: Concatenate and return the output of the sum

E: "4",  "5" --> "9"
"34", "5" --> "39"

P: 1 - turn a,b into numbers Number()
   2 - turn a,b into string (toString()) and add the two
   3 - return 
*/