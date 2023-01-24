/*
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'
*/


//My Solution


function insideOut(x){
    const words = x.split(' ');
  const arr = [];
  for (let i = 0; i < words.length; i++) {
    const curr = words[i];

    if (curr.length < 4) {
      arr.push(curr);
      continue;
    }

    if (!(curr.length % 2)) {
      arr.push(curr.slice(0, curr.length / 2).split('').reverse().join('')
        + curr.slice(curr.length / 2).split('').reverse().join(''));
    }

    if (curr.length % 2) {
      arr.push(curr.slice(0, Math.floor(curr.length / 2)).split('').reverse().join('')
        + curr[Math.ceil(curr.length / 2) - 1]
        + curr.slice(Math.floor([curr.length / 2]) + 1).split('').reverse().join(''));
    }
  }

  return arr.join(' ');
}