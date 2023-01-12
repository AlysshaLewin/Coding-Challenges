/*
Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.

If such letters are two or more, choose the one that appears in the string( earlier.

For example:

('my mom loves me as never did', 't') => 'ty tot loves te as never did'
('real talk bro', 'n') => 'neal talk bno'
('great job go ahead', 'k') => 'grekt job go khekd'

*/


//My Solution

function replaceCommon(string, letter) {
    const abc = 'abcdefghijklmnopqrstuvwxyz '.split('');
    const abcNum = abc.map(el => string.split('').reduce((acc, cur) => acc + !!(cur === el && cur!==' '),0));
    const max = Math.max(...abcNum);
   let i = 0;
    while(abcNum[abc.indexOf(string[i])] < max) i++;
    let needReplace = new RegExp(string[i], 'g')
    return string.replace(needReplace,letter)
}