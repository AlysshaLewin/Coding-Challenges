/*
You received an array with two strings. Create a function that will return their product as a string. E.g.

arrMultiply(['9','6']) should return '54'
*/

//My Solution

function arrMultiply(arr){
    let result = arr[0] * arr[1]
    return result.toString(); 
}

/*
P: Params is an array with two strings

R: We're returning a function that will return the product of the arrays as a string

E: arrMultiply(['9','6']) should return '54'
arrMultiply(['8','4']) should return '32'
arrMultiply(['2','6']) should return '12'

P: 1 - create a variable that will store the results of the function
   2 - inside the variable multiply arr[0] with arr[1]
   3 - return result with the method toString()
*/