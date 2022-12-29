/*
You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].


*/


//My Solution

function explode(x){
    if (typeof x[0] == 'number' && typeof x[1] == 'number'){
      let score = x[0] + x[1]
      let arr = []
      for (let i=0; i<score; i++){
        arr.push(x)
      }
      return arr;
    }
  
    if (typeof x[0] == 'number' || typeof x[1] == 'number'){
      let number = (typeof x[0] == 'number'? x[0] : x[1])
      let arr = []
      for (let i = 0; i<number; i++){
        arr.push(x);
      }
      return arr
    }
  
    if(typeof x[0] !== 'number' && typeof x[1] !== 'number'){
      return 'Void!'
    }
}


//OR

/*
function explode(x){
  let score = 0;
  let array = [];
  if (typeof x[0] !== 'number' && typeof x[1] !== 'number') return 'Void!';
  if (typeof x[0] !== 'number' && typeof x[1] === 'number') score = x[1] ;
  if (typeof x[0] === 'number' && typeof x[1] !== 'number') score = x[0];
  if (typeof x[0] === 'number' && typeof x[1] === 'number') score = x[0] + x[1];
  for (var i = 0; i < score; i++) {
    array.push(x);
  }
  return array;
}
*/