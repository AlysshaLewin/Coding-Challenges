/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/

//My Solution

function areYouPlayingBanjo(name) {
    let eachName = name.toLowerCase()
    if (eachName.startsWith("r")){
        return `${name} plays banjo`
    } else {
        return `${name} does not play banjo`
    }
    return name;
}



/*
P: param = name

R: return a name 

E: name + " plays banjo" 

P: 1 - declare a variable to hold param in lowercase
   2 - write an if statement that says if variable (name) starts with "r" return plays banjo
   3 - write an else statement that says else variable (name) does not return does not play banjo
*/