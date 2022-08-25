/*
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

*/


//My Solution

function correctPolishLetters (string) {
    return string
  .replace(/ł/g, 'l')
  .replace(/ą/g, 'a')
  .replace(/ć/g, 'c')
  .replace(/ę/g, 'e')
  .replace(/ń/g, 'n')
  .replace(/ó/g, 'o')
  .replace(/ś/g, 's')
  .replace(/ź/g, 'z')
  .replace(/ż/g, 'z')
}


/*
P: params is the string with polish letters

R: return a string without the polish letters

E: ą -> a,
ć -> c,
ę -> e,
ł -> l,

P: use regex to replace all polish letters

*/