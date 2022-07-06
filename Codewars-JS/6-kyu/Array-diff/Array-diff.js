/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/


//My Solution

function arrayDiff(a, b) {
  if (a.length === 0) {
    return [];
  }

  if (b.length === 0) {
    return a;
  }

  let newA = a;
  let newB = b;

  a.forEach((arrItem, arrIndex) => {

    const aCopy = newA.slice();
    const bCopy = newB.slice();

    if (b.includes(arrItem)) {
        newA = aCopy.filter(item => item !== arrItem);
        newB = bCopy.filter(item => item !== arrItem);
    }
  });

  return newA;
}

