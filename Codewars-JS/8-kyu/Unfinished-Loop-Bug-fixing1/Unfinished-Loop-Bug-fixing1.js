/*
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
*/

//My Solution 

function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
}

/*
P: param = number

R: fix infinite loop Timmy created

E: n/a

P: for looped created. Missed the increment counter
*/