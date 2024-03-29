/*
Guitar tab is a common medium for guitarists to read music. Each of the six strings of the guitar are symbolised by a string of (usually) hyphens, with numbers in between the hyphens denoting which fret is to be pressed down in order to produce a certain pitch.

A chord is when more than one note sounds simultaneously. Chords are very commonly played on a guitar.

TASK
You will be passed a list of chords (as a string), and you must return guitar tab, (as a string), for these chords in a particular format. Underneath the tab, you must show the chords you were passed lining up with the chords above.

Let me explain:

The chords you will be passed will be a selection of the following chords: Am,C,D and G.

You will always be passed a valid list of chords, and you only need to handle the chords in the above list.

Here are guitar tabs of the chords in isolation:

Am:
    e|---0---|
    B|---1---|
    G|---2---|
    D|---2---|
    A|---0---|
    E|-------|
         Am
    
C:
    e|---0---|
    B|---1---|
    G|---0---|
    D|---2---|
    A|---3---|
    E|-------|
         C
    
D:
    e|---2---|
    B|---3---|
    G|---2---|
    D|---0---|
    A|-------|
    E|-------|
         D

G:
    e|---3---|
    B|---0---|
    G|---0---|
    D|---0---|
    A|---2---|
    E|---3---|
         G
Example with multiple chords:

turnChordsIntoTab('Am C Am G Am C Am D Am')
should return the string:

`\
e|---0---0---0---3---0---0---0---2---0---|
B|---1---1---1---0---1---1---1---3---1---|
G|---2---0---2---0---2---0---2---2---2---|
D|---2---2---2---0---2---2---2---0---2---|
A|---0---3---0---2---0---3---0-------0---|
E|---------------3-----------------------|
     Am  C   Am  G   Am  C   Am  D   Am`
Notice the labels of the string names (e, B, G, D, A, E) and the name of the chord underneath the chord which it is labelling. Both need to be included in the string you return.

Fromatting
Every chord needs to be separated by 3 hyphens, and there must be 3 hyphens before the first chord and 3 hypens after.

A pipe (|) must be used immediately after the string name, and at the very end of the string.

The line which has the chord names on, underneath the tab, should be padded at the start with spaces, but it must end immediately after the last chord, and not contain spaces after it.
*/


//My Solution


const turnChordsIntoTab = (chords) => {
    chords = chords.split(" ");
    let arr = ['e', 'B', 'G', 'D', 'A', 'E'], result = [], final = [];
    let obj = {'Am' : [0, 1, 2, 2, 0, '-'], 'C' : [0, 1, 0 ,2 ,3 , '-'], 'D' : [2, 3 ,2, 0, '-', '-'], 'G' : [3, 0, 0 ,0 ,2 ,3]}
  
    chords.forEach(elem => result.push(obj[elem]));
  
    for(let i = 0; i < arr.length; i++)
      final.push(`${arr[i]}|${result.map(elem => "---"+elem[i]).join("")}---|`);
  
    let temp = chords.map(elem => (chords.indexOf(elem) === chords.length-1) ? elem : (elem === 'Am') ? elem +"  " : elem +"   ")
    temp[temp.length-1] = temp[temp.length-1].trim();
    final.push(`     ${temp.join("")}`);
  
    return final.join("\n");
}