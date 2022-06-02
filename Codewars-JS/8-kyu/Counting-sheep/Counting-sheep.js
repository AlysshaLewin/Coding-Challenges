/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

//My Solution

function countSheeps(arrayOfSheep) {
    let sheepCounter = 0;
    for( let i = 0; i < arrayOfSheep.length; i++) {
        if(arrayOfSheep[i] === true) {
            sheepCounter++;
            console.log(countSheeps)
        }
    }
    return sheepCounter;
}

/*
P: we have an arrayOfSheep param

R: we need to return   a function that counts the number of sheep present in the array

E: n/a

P: 1 - create a variable to hold counter value
   2 - create a loop for the number of sheep in the array
   3 - if statement - sheep value is equal to true + 1
   4 - return number of sheep
*/