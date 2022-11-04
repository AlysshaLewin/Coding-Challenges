/*
Apparently "Put A Pillow On Your Fridge Day is celebrated on the 29th of May each year, in Europe and the U.S. The day is all about prosperity, good fortune, and having bit of fun along the way."

All seems very weird to me.

Nevertheless, you will be given an array of two strings (s). First find out if the first string contains a fridge... (i've deemed this as being 'n', as it looks like it could hold something).

Then check that the second string has a pillow - deemed 'B' (struggled to get the obvious pillow-esque character).

If the pillow is on top of the fridge - it must be May 29th! Or a weird house... Return true; For clarity, on top means right on top, ie in the same index position.

If the pillow is anywhere else in the 'house', return false;

There may be multiple fridges, and multiple pillows. But you need at least 1 pillow ON TOP of a fridge to return true. Multiple pillows on fridges should return true also.

100 random tests
*/

//My Solution

function pillow(s){
    const nIndices = [];
    const bIndices = [];
    let result = false;

    [...s[0]].forEach((char, index) => {
        if (char === 'n') nIndices.push(index);
    });

    [...s[1]].forEach((char, index) => {
        if (char === 'B') bIndices.push(index);
    });

    if (result === false && nIndices.length > 0) {
        nIndices.forEach((index) => {
            if (bIndices.includes(index)) result = true;
        });
    }

    if (result === false && bIndices.length > 0) {
        bIndices.forEach((index) => {
            if (nIndices.includes(index)) result = true;
        });
    }

    return result;
}