/*
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?
*/

//My Solution

function greet(name){
  if(name !== "Johnny")
    return "Hello, " + name + "!";
  else if(name == "Johnny")
    return "Hello, my love!";
}


/*
P: param is name

R: complete if/else if statement by changing original if to else if and adding new if statement

E: n/a

P: 1 - complete if/else if statement by changing original if to else if and adding new if statement
   2 - because she states she is in love with Johnny, we can use use !== 
*/