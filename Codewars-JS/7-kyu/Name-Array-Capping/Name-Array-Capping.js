/*
Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

example

capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
*/

//My Solution

function capMe(names) {
    return names.map((n) => n[0].toUpperCase() + n.slice(1).toLowerCase());
}

/*
P - parameter is an array of names

R - return an array of names with each name with its first letter capitalized 

E - capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

P - 1 - Iterate through array.
    2  - At each iteration, return the resulting string concatenated from capitalized first letter and lowercased rest of the letters.
 */