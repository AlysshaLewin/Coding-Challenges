/*
Your task is to write function which takes string and list of delimiters as an input and returns list of strings/characters after splitting given string.

Example:

multipleSplit('Hi, how are you?', [' ']) => ['Hi,', 'how', 'are', 'you?']
multipleSplit('1+2-3', ['+', '-']) => ['1', '2', '3']
List of delimiters is optional and can be empty, so take that into account.

Important note: Result cannot contain empty string.
*/


//My Solution

function multipleSplit(string, delimiters=[]){
     let char = delimiters[0]
      for (let i = 0; i < delimiters.length; i++)
         string = string.split(delimiters[i]).join(char)

     return string.split(char).filter(v => v)
}
