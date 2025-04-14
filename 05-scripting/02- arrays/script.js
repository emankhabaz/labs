let array1= [
    [2,3],
    [34,89],
    [55,101,34],
    [34,89,34,99]
]

/*const flatten = (array) */

array1.sort((a,b) => (a<b ? -1 : a> b? 1:0));

console.log(array1);



