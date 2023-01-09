/*
Did you ever play Bowling? Short: You have to throw a bowl into 10 Pins arranged like this:


I I I I  # each Pin has a Number:    7 8 9 10
 I I I                                4 5 6
  I I                                  2 3
   I                                    1

You will get an Array with Numbers, e.g.: [3,5,9] and remove them from the field like this:


I I   I
 I   I
  I   
   I   

Return a string with the current field.

Note that:
String.prototype.replace() is not allowed!

You begin a new line with \n
Each Line must be 7 chars long
Fill the missing pins with a whitespace

*/


//My Solution


function bowlingPins(arr) {
    const startPins = 'I I I I\n I I I \n  I I  \n   I   '.split(' ');
    const startNumbers = '7 8 9 10\n 4 5 6 \n  2 3  \n   1  '.split(' ');
  
    for (let i = 0; i < startPins.length; i++) {
      for (let j = 0; j < startNumbers.length; j++) {
        if (i === j && arr.includes(Number(startNumbers[j]))) {
          if (startNumbers[j] === '10\n') {
            startPins[startNumbers.indexOf(startNumbers[j])] = ' \n';
          } else {
            startPins[startNumbers.indexOf(startNumbers[j])] = ' ';
          }
        }
      }
    }
  
    return startPins.join(' ');
}