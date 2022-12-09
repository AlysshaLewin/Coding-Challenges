/*
The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

Given a string of binary, return the version the photocopier gives you as a string.
*/


//My Solution

function broken(x){
    let output = '';
    for (let i = 0; i < x.length; i++) {
        if (x[i] === '0') {
            output += '1';
        } else {
            output += '0';
        };
    };
    return output;
}


//OR

/*
function broken(x){
  return x.split('').map(a => a == "0" ? "1" : "0").join('');
}
*/