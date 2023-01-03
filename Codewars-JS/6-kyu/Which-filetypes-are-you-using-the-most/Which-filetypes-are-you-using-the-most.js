/*
Description
You've been working with a lot of different file types recently as your interests have broadened.

But what file types are you using the most? With this question in mind we look at the following problem.

Given a List/Array of Filenames (strings) files return a List/Array of string(s) containing the most common extension(s). If there is a tie, return a sorted list of all extensions.

Important Info:
Don't forget, you've been working with a lot of different file types, so expect some interesting extensions/file names/lengths in the random tests.
Filenames and extensions will only contain letters (case sensitive), and numbers.
If a file has multiple extensions (ie: mysong.mp3.als) only count the last extension (.als in this case)
Examples
files = ['Lakey - Better days.mp3', 
         'Wheathan - Superlove.wav', 
         'groovy jam.als', 
         '#4 final mixdown.als', 
         'album cover.ps', 
         'good nights.mp3']
would return: ['.als', '.mp3'], as both of the extensions appear two times in files.

files = ['Lakey - Better days.mp3', 
         'Fisher - Stop it.mp3', 
         'Fisher - Losing it.mp3', 
         '#4 final mixdown.als', 
         'album cover.ps', 
         'good nights.mp3']
would return ['.mp3'], because it appears more times then any other extension, and no other extension has an equal amount of appearences.


*/


//My Solution


function solve(files) {
    var extensions = files.map(file => {
      return file.split('.').pop();
    });
    var extensionCounter = extensions.reduce((acc, extension) => {
      if (acc[extension]) {
        acc[extension]++;
      } else {
        acc[extension] = 1;
      }
      return acc;
    }, {});
    var sortedExtensions = Object.entries(extensionCounter).sort((x, y) => y[1] - x[1]);
    var result = [];
    sortedExtensions.forEach(extension => {
      if (extension[1] == sortedExtensions[0][1]) {
        result.unshift('.' + extension[0]);
      }
    });
    return result.sort();
}


//OR


/*
function solve(files) {
    const map = new Map()
    let mostCommon = []
    let maxCount = 0

    files.forEach(file => {
        const extension = file.substring(file.lastIndexOf('.'))
        const count = (map.get(extension) || 0) + 1
        
        map.set(extension, count)
        
        if (maxCount < count) {
            maxCount = count
            mostCommon = [extension]
        } else if (maxCount == count)
            mostCommon.push(extension)
    })

    mostCommon.sort()

    return mostCommon
}
*/