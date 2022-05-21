/*
Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
*/

//My Solution

function stringClean(s){
    let res = '';

    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) < 48 || s.charCodeAt(i) > 57) {
            res += s[i];
        }
    }

    return res;
}


//P: 1 parameter s
//R: return a string
//E: '! !' --> '! !'
    // '123456789' --> ''
//P: take in a string, remove all numbers
    // return a string with spacing & special characters ~#$%^&!@*():;"'.,?