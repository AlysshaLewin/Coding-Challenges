/*
Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.
*/

//My Solution

function isToday(date) {
    return new Date().toDateString() === date.toDateString();
}