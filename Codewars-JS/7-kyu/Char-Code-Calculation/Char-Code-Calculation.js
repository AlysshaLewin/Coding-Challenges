/*
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/

//My Solution

function calc(x){
    // split x into an array, map each letter changing it into its corresponding char code.
  const char_codes_1 = x
  .split("")
  .map((letter) => letter.charCodeAt())
  //  Joining and splitting separates each number by digit (1, 2, 3...)instead of by the char code (67, 89, 101...)
  .join("")
  .split("");
// Change the 7's to 1's
const char_codes_2 = char_codes_1.map((number) =>
  number == 7 ? "1" : number
);
// sum up each char code variable
const sum_1 = char_codes_1.reduce((sum, num) => sum + +num, 0);
const sum_2 = char_codes_2.reduce((sum, num) => sum + +num, 0);
// return difference
return sum_1 - sum_2;
}