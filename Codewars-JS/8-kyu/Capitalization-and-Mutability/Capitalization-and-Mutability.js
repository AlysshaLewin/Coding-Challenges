/*
Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
*/

//My Solution

function capitalizeWord(word) {
    var str = word[0].toUpperCase();
    for (let i = 1; i < word.length; i++) {
        str += word[i];
    }
    return str;
}

//OR

// function capitalizeWord(word) {
//     return word[0].toUpperCase() + word.slice(1);
// }


/*
P: param is the single word needing capitalization

R: fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case)

E: word --> Word
towel --> Towel
soap --> Soap

P: 1 - create a string, assign param with 0 index and toUpperCase() method
   2 - create a for loop, looping through beginning at 1 till end
   3 - concatnate string with outcome of for loop
   4 - return string
 
*/