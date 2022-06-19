/*
Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".
*/


//My Solution

let hoopCount=(n)=> n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"



/*
P: param = n, how many times the hula hoop goes round

R: return how many times the hoop goes round and it will return him an encouraging message

E: If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
   If he doesn't get 10 hoops, return the string "Keep at it until you get it".

P: 1 - ternary operator, if n greater that or equal to 10, then "Great, now move on to tricks" if not, "Keep at it until you get it"

*/