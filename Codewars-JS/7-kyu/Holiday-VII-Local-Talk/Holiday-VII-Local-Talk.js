/*
In Bali, as far as I can gather, when ex-pats speak to locals, they basically insert the word 'Pak' as often as possible. I am assured it means something like 'mate' or 'sir' but that could be completely wrong.

Anyway, as some basic language education(??) this kata requires you to turn any sentence provided (s) into ex-pat balinese waffle by inserting the word 'pak' between every other word. Simple 8kyu :D

Pak should not be the first or last word. Strings of just spaces should return an empty string.
*/

//My Solution

function pak(s){
    if (s.trim() === '') return '';
    const words = s.split(' ');

    return words.map((word, index) => {
        if (index <= words.length - 2) {
            word = word + ' pak';
        }

        return word;
    }).join(' ');
}