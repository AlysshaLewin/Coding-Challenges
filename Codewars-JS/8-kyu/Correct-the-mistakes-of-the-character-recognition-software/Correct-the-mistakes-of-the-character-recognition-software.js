/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1

*/


//My Solution

function correct(string){
    return string.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I");
}


/*
P: param is a string that holds the current errors in the digitised text

R: return a string that contains the corrected errors

E: "L0ND0N" ----> "LONDON";
   "DUBL1N" -----> "DUBLIN");
  "51NGAP0RE" ----> "SINGAPORE"

P: 1 - loop over every character
   2 - if the character is misrepresented, correct it
   3 - return the result

*/