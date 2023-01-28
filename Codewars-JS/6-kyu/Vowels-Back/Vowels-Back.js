/*
You need to play around with the provided string (s).

Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

Exceptions:

If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

Provided string will always be lower case, won't be empty and will have no special characters.

*/


//My Solution


function vowelBack(s){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const except = ['c', 'o', 'd', 'e'];
    let result = '';

    for (let letter of s) {
        let tempNum = 0;
        let tempLetter = '';
        if (letter === 'c' || letter === 'o') {
            result += String.fromCharCode(letter.charCodeAt(0) - 1);
        } else if (letter === 'd' || letter === 'e') {
            result += 'a';
        } else if (letter === 'i') {
            result += letter;
        } else if (letter === 'a') {
            result += 'v';
        } else if (letter === 'u') {
            result += 'p';
        } else if(vowels.indexOf(letter) === -1) {
                tempNum = letter.charCodeAt(0) + 9;
                if (tempNum > 122) {
                    tempLetter = String.fromCharCode(tempNum - 26);
                } else tempLetter = String.fromCharCode(letter.charCodeAt(0) + 9);
            }
        if (except.indexOf(tempLetter) === -1) {
            result += tempLetter;
        } else result += letter;
    }
    return result;
}