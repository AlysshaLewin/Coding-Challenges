/*
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)

*/

//My Solution

function hero(bullets, dragons){
    return (bullets >= dragons * 2) ? true : false
}

/*
P: params = bullets, dragons

R: return if hero will survive dragons with only a specific amount of bullets

E: n/a

P: 1 - create a ternary conditional
   2 - if bullets are greater than or equal to the amount of dragons return true if not return false
*/