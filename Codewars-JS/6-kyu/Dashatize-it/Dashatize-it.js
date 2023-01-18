/*
Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/



//My Solution

function dashatize(num) {
    if ((num < 0) && (num > -10)) {
        return (num * (-1)).toString();
    } else if (num.toString() === 'NaN') {
        return 'NaN';
    } else {
        let numString = num.toString().split('').map((e) => `${e}-`).join('');
        numString = numString.slice(0, -1);
        let output = '';
        for (let i = 0; i < numString.length; i++) {
            let a = '*';
            if ((numString[i] === '-') && (numString[i - 1] % 2 === 0) && (numString[i + 1] % 2 === 0)) {
                output += a
            } else {
                output += numString[i];
            }
        };
        output = output.split('').filter((e) => e !== '*').join('');
        if ((output[0] === '-') && (output[1] === '-')) {
            return output.slice(2);
        } else {
            return output;
        }
    };
}
