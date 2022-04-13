/*
Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"
*/

//My Solution

function nameShuffler(str){
    let myStr = str.split(' ');
    myStr = [myStr[1], myStr[0]];
    myStr = myStr.join(' ')
    return myStr;
  }