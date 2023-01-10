/*
n this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.
*/


//My Solution


const dup = arr => arr.map(w => w.split('').map((l, i, a) => l == a[i+1] ? null : l).join(''));