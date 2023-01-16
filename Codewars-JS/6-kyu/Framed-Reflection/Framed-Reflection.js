/*
You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:


Words in your solution should be left-aligned.
*/


//My Solution


function mirror(text){
   let words = text.split(' ')
  let chars = Math.max(...words.map(x => x.length)) + 4
  words = words.map(x => '* ' + [...x].reverse().join('') + ' '.repeat(chars - x.length - 3) + '*')
  return ['*'.repeat(chars), ...words, '*'.repeat(chars)].join('\n')
}