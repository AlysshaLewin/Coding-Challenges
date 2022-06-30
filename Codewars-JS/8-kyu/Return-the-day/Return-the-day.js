/*
Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"
*/


//My Solution

function whatday(num) { 
    switch (num) {
        case 1: 
            return "Sunday";
            break;
        case 2: 
            return "Monday";
            break;
        case 3: 
            return "Tuesday";
            break;
        case 4: 
            return "Wednesday";
            break;
        case 5: 
            return "Thursday";
            break;
        case 6: 
            return "Friday";
            break;
        case 7: 
            return "Saturday";
            break;
        default:
            return "Wrong, please enter a number between 1 and 7";
    }
}


/*
P: params is numbers pretaining to the day of the week

R: With each number gon through return which day of the week it is

E: 1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"

P: 1 - Create a switch statement with num as the expression.
  2 - For each case use a number starting with 1 and return the day of the week associated with that number.
  3 - add a default at the end.
*/