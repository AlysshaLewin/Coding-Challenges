/*
Task
Given a scrambled path, return the number of rotations needed in horizontal direction to make a clear passage from top to bottom. There is always at least one configuration possible. Multiple solutions may be possible. Any valid solution passes this kata.

Input
rows: an array of strings, each representing a row that needs to be rotated in order to make a clear passage from top to bottom.
'x': a wall
'.': a tile of path
Output
return an array of integers, specifying the amount of rotations required to make a clear passage when all rows have been rotated.
zero: no rotations
positive: number of rotations to the left
negative: number of rotations to the right

*/


//My Solution

function rotate(rows) {
    return rows.map(row => row.indexOf('.') - rows[0].indexOf('.'));
}
