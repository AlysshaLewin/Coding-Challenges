/*
In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.
*/


//My Solution

function periodIsLate(last, today, cycleLength){
    let date = Math.abs(today - last) / (24 * 60 * 60 * 1000);
    return date > cycleLength;
}


/*
P: params are last which is the date of the last period, today which is the date the period was checked, cycleLength which is the integer representing the length of the cycle in days 

R: we're creating a function that will test whethere a period is late, we'll return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

E: 

P: 1 - create a variable of date and store Math.abs(today - last) divided by (24 * 60 * 60 * 1000) which is the equation for number of seconds in a day.
   2 - return date if it is larger than cycleLength
*/