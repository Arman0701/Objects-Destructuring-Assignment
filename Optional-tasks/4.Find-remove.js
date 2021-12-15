'usue strict'

// You receive an object with nested objects with strings as values.
// Convert their values to number and return an object without the entries that evaluate to NaN.

function findAndRemove(object){
    let { bedroom } = object;
    let arr = Object.entries(bedroom);
    let mainArr = [];
    let mainObj = {};
    
    for (let i=0; i<arr.length; i++){
        if (!isNaN(arr[i][1])){
            mainArr.push(arr[i]);
        }
    }
    mainObj.bedroom = Object.fromEntries(mainArr);
    return mainObj;
}

console.log(findAndRemove(
    {
        bedroom: {
            slippers: "10000",
            piano: "550",
            call: "vet",
            travel: "world",
        },
    }
));
// => OUTPUT
// {
// bedroom: {
// slippers: 10000,
// piano: 5500,
// },
// }