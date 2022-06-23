/*
While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

The function receives one parameter health which will always be a whole number between -10 and 10.


*/

//My Solution

function checkAlive (health) {
    if (health > 0) {
      return true;
    } else {
      return false;
    }
  };


/*
P: param is (health) which will always be a whole number between -10 and 10.

R: return true if greg's health is greater than 0, or false if it is 0 or below.

E; health > 0 = true
health < 0 = false

P: 1 - Put health > 0 into the if statement, reverse sign to say health > 0, return true, else return false.

*/