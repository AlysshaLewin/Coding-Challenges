/*
You get a string with the content of a csv-file. The columns are separated by semicolons.
The first line contains the names of the columns.
Write a method that sorts the columns by the names of the columns alphabetically and incasesensitive.

An example:

Before sorting:
As table (only visualization):
|myjinxin2015|raulbc777|smile67|Dentzil|SteffenVogel_79|
|17945       |10091    |10088  |3907   |10132          |
|2           |12       |13     |48     |11             |

The csv-file:
myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n
17945;10091;10088;3907;10132\n
2;12;13;48;11

----------------------------------

After sorting:
As table (only visualization):
|Dentzil|myjinxin2015|raulbc777|smile67|SteffenVogel_79|
|3907   |17945       |10091    |10088  |10132          |
|48     |2           |12       |13     |11             |

The csv-file:
Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79\n
3907;17945;10091;10088;10132\n
48;2;12;13;11
There is no need for prechecks. You will always get a correct string with more than 1 line und more than 1 row. All columns will have different names.
*/


//My Solution


function sortCsvColumns(csvFileContent) {
    let arr = []
    csvFileContent = csvFileContent.split(`\n`).map( el => el.split(`;`))
    for (let i = 0; i < csvFileContent[0].length; i++){
      let tempArr = []
      for (let j = 0; j < csvFileContent.length; j++){
        tempArr.push(csvFileContent[j][i])
      }
      arr.push(tempArr)
    }
    arr.sort((a, b)=>a[0].localeCompare(b[0])) 
    let arr2 = []
    for (let i = 0; i < arr[0].length; i++){
      let temp = []
      for (let j = 0; j < arr.length; j++){
        temp.push(arr[j][i])
      }
      arr2.push(temp)
      }
    return arr2.map(el => el.join(`;`)).join(`\n`)
}