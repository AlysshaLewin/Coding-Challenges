/*
Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

Task
Implement a function named

generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
generateRange(1, 10, 3) // should return array of [1,4,7,10]
Note
min < max
step > 0
the range does not HAVE to include max (depending on the step)

*/


//My Solution

function generateRange(min, max, step){
    let arr = [];
    for (let i = min; i <= max; i += step) {
      arr.push(i);
    };
    return arr;  
}


/*
P: params = min to max, with the step

R: a function that which takes three arguments and generates a range of integers from min to max, with the step.

E: generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
generateRange(1, 10, 3) // should return array of [1,4,7,10]
generateRange(2, 12, 3) // should return array of [2,5,8,11]

P: 1 - create an empty array and assign it to the variable
   2 - create a for loop, use min, max, step
   3 - push all of the numbers into the arr array. Return array

*/