/*
Thanks to the effects of El Nino this year my holiday snorkelling trip was akin to being in a washing machine... Not fun at all.

Given a string made up of '~' and '_' representing waves and calm respectively, your job is to check whether a person would become seasick.

Remember, only the process of change from wave to calm will add to the effect (really wave peak to trough but this will do). Find out how many changes in level the string has and if that figure is more than 20% of the array, return "Throw Up", if less, return "No Problem".
*/

//My Solution

function seaSick(x){
    let count = 0;
    for (let i = 0; i < x.length-1; i++){
      if (x[i] !== x[i+1])
      count++;
    }
    return count > x.length/5 ? "Throw Up" : "No Problem";
}