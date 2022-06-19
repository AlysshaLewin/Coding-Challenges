/*
Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true

*/

//My Solution

function setAlarm(employed, vacation){
    return (employed == true && vacation == false) ? true : false
}



/*
P:  params = employed which should return true when you are employed and vacation should return true when you are on vacation

R: return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise

E: setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true

P: 1 - create a ternary operator use && operator. Employed should equal in value true && vacation should equal in type false.
*/
