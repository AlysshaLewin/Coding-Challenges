/*
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/


//My Solution


const encryptThis = function (text) {
    let result = [];
  
    for (let i of text.split(" ")) {
      i = [...i];
  
      if (i.length <= 2) {
        i[0] = i[0].charCodeAt();
      } else {
        [i[0], i[1], i[i.length - 1]] = [i[0].charCodeAt(), i[i.length - 1], i[1]];
      }
  
      result.push(i.join(""));
    }
  
    return result.join(" ");
};