/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/

//My Solution

function bmi(weight, height) {
    let bmi = weight / (height ** 2);

    if (bmi <= 18.5) {
        return "Underweight";
    }
    else if (bmi <= 25.0) {
        return "Normal";
    }
    else if (bmi <= 30.0) {
        return "Overweight";
    } else {
        return "Obese";
    }
}


/*
P: params are the weight and height of bmi

R: return a function that calculates bmi

E: bmi <= 18.5 return "Underweight"
bmi <= 25.0 return "Normal"
bmi <= 30.0 return "Overweight"

P: 1 - create a variable and assign bmi to i
2 - create a series of if/else statements to compate bmi to

*/