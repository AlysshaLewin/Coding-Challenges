/*
DESCRIPTION:
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

//My Solution

String.prototype.toJadenCase = function () {
    let jadenCased = [];
    let words = this.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        jadenCased.push(word[0].toUpperCase() + word.slice(1));
    }
    return jadenCased.join(" ");
}


// function jadenWords (string) {
//     const str = "how can mirrors be real if our eyes aren't real";
//     const arr = str.split(" ");
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }
//     const str2 = arr.join(" ");
//     console.log(str2);
// }




/*
P:

R: convert strings to how they would be written by Jaden Smith.

E: Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

P: 1 = create an empty arry
   2 = create a variable that will hold  words that will use the toLowerCase() method, then split and seperate the words by emply spaces.
   3 = create a for loop to loop through the words. 
*/