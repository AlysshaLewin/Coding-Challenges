/*
Researchers found some old data from a wildlife study done in the past. The developer working on a program to organize the data left the project before it was completed. The researchers need you to write a function to get the formal name of a location from a string that was entered by the original observers in the study.

A location name will be all the capitalized words before the word "Park", "Preserve", "Reservation", "Reserve" or "Recreation Area". The location name will also include those words: "Park", "Preserve", etc.

The location name could be at the very beginning of the sentence or preceded by only one word in which case your code should not return the preceding words: "The", "At" or "In".

Note: Those three words will be the only words preceding a location name at the beginning of a sentence in the data given.

In some cases, the location name will be the only thing entered.

Examples:

Input: "The bird was in the parking lot at North Chagrin Reservation foraging under a sycamore tree."
Your code would return the string: "North Chagrin Reservation"

Input: "At Lingmeyer Beach Park in the far eastern dunes."
Your code would return the string "Lingmeyer Beach Park"

Input: "Newcastle Shorebird Reserve"
Your code would return "Newcastle Shorebird Reserve"

Input: "At the north entrance to Ypsilanti Lakeshore Preserve."
Your code would return only "Ypsilanti Lakeshore Preserve"

Please help the researchers with your coding skills.
*/


//My Solution

function findTheLocation(str){
    const res = (str.match(/([A-Z][a-z]+ )*\b(Park|Preserve|Reservation|Reserve|Recreation Area)\b/) || [])[0] || '';
  return res.replace(/(The |At |In )/, '');
}
