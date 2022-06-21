/*
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

*/


//My Solution

function switchItUp(number){
    switch (number) {
        case 0:
            return "Zero";
            break;
        case 1:
            return "One";
            break;
        case 2:
            return "Two";
            break;
        case 3:
            return "Three";
            break;
        case 4:
            return "Four";
            break;
        case 5:
            return "Five";
            break;
        case 6:
            return "Six";
            break;
        case 7:
            return "Seven";
            break;
        case 8:
            return "Eight";
            break;
        case 9:
            return "Nine";
            break;
        default: 
        break;
    }
}



/*
P: param = number between 0-9

R: return a number in a string for every number that cycles throught 0-9

E: Input :: 1
Output :: "One".

P: 1 - write a switch statement that returns a string for each case 
*/