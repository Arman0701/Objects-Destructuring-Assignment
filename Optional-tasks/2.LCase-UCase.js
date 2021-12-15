'use strict'

// Write a function that creates an object with each (key, value) pair being the (lower case, upper case)
// versions of a letter, respectively.

function mapping(arr){
    let obj = {};
    for (let i=0; i<arr.length; i++){
        obj[arr[i]] = arr[i].toUpperCase();
    }
    return obj;
}

console.log(mapping(["p", "s"])); // ➞ { "p": "P", "s": "S" }
console.log(mapping(["a", "b", "c"])); // ➞ { "a": "A", "b": "B", "c": "C" }
console.log(mapping(["a", "v", "y", "z"])); // ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }