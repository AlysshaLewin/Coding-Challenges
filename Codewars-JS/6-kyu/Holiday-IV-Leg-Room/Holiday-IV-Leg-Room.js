/*
Bloody planes... Making me walk in past the business class 'suites' and back into cattle class.

As we all know, leg room is the major issue. In this kata, you will assess the level of comfort an individual will experience in their flight.

You will be given the individual's height in cms (a), and a string that represents the properties of their seat (b).

It is expected that a person's leg length accounts for 55% (use Math.floor) of their height, and that for a person to be 'comfortable' their leg room on an aeroplane must be at least 15% more than their leg length.

If the figure is more than 25% leg length they have 'super comfy' seats, and if it is less than 15% it is just classed as 'ouch'.

The amount of leg room can be calculated by the number of consonants in the provided seat string 'b'. Each counts for 2cm of room.

You should return the comfort rating as a string.

In the case that the seat string has a 00 value within it - there is a hole in the seat in front! return 'Jackpot!', relax and put your legs through! Note this value is zero zero, not the letter O.

Note the seat string will only contain lower case letters and possibly the magic "00" value.
*/


//My Solution

function legRoom (a, b){
    let legLen = Math.floor(a * 0.55)
  let legRoom = b.replace(/[aeiou]/gi, '').length * 2
  if(b.includes('00')) return 'Jackpot!'
  else if(legRoom > legLen * 0.25) return 'super comfy'
  else if(legRoom < legLen * 0.15) return 'ouch'
  else return 'comfortable'
}