/*
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).


*/

//My Solution

function insertDash(num) {
    num = String(num).split('').map(Number);

  for (let i = 0; i < num.length; i += 1) {
    if (num[i] % 2 === 1 && num[i + 1] % 2 === 1) {
      num.splice(i + 1, 0, '-');
    }
  }

  return num.join('');
 }


 //OR

//  function insertDashRegExp(num) {
//     return num.toString().replace(/[13579](?=[13579])/g, "$&-");
//   }