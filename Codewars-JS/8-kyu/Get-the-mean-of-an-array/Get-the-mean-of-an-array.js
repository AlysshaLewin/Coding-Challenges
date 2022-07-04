/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/


//My Solution

function getAverage(scoreArray){
    const count = scoreArray.length;
    let sum = 0;

    for (let i = 0; i < count; i++) {
        sum = sum + scoreArray[i];
    }

    return Math.floor (sum / count);
}

/*
P: param is scoreArray which is the Average sum(all of the numbers) / count (all of the numbers)

R: we are to return the average of the given array rounded down to its nearest integer

E:

P: 1 - create a variable to store the count averages
   2 - create a variable to hold the sum of the array
   3 - creat a loop to loop through the array and increment
   4 - return sum / count using Math.floor();

*/