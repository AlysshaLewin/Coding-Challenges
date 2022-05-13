/*
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

//My Solution

//P: Parameters given are n, s
//R: We're repeating and returning the given string 'string'
//E: repeatStr(6, "I") // IIIIII, repeatStr(5, "Hello") // HelloHelloHelloHelloHello
//P: write a function repeatStr that repeats 'string'
    // repeat said string using repeat()

function repeatStr (n, s) {
    return s.repeat(n);
  
}