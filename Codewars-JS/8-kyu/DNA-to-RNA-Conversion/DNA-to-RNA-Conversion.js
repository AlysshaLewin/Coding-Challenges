/*
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.


*/

//My Solution

function DNAtoRNA(dna) {
    // Split the string into an array of letters
    let arr = dna.split('');
    // Go through arr, letter by letter and store this in 'rna' (a new array)
    let rna = arr.map(letter => {
    // If the letter we are on is T, we return a U in its place
        if (letter === 'T') {
            return 'U';
    // If the letter isn't T, we return the original letter
        } else {
            return letter;
        }      
    })
    // Return modifed array and join the letters back together to make one string
    return rna.join('');
}