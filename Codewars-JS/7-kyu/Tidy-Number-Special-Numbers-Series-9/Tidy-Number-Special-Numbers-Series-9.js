/*
Definition
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not .
*/

//My Solution

function tidyNumber(n){
    let a = String(n).split('')
    for (let i = a.length - 1; i > 0; i--) {
        if (a[i] < a[i - 1]) {
            return false
            break
        }
    }
    return true
}