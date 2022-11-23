/*
Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.
Like this:

n = 5

[
  '-----',
  '-   -',
  '-   -',
  '-   -',
  '-----'
]
n = 3

[
  '---',
  '- -',
  '---'
]
*/

//My Solution

function box(n){
    let result = []
    for(let i = 0; i < n; i++) {
      if(i === 0 || i === n-1) {
        result.push('-'.repeat(n))
      } else {
        result.push('-' + ' '.repeat(n - 2) + '-')
      }
    }
    return result
}