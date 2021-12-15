'use strict'

// Create a function that returns the frequency distribution of an array. 
// This function should return an object, where the keys are the unique elements 
// and the values are the frequency in which those elements occur.

function getFrequencies(arr) {
    let obj = {}; 
    
    for (let i=0; i<arr.length; i++){
        let element = arr[i]; 
        if (obj[element] !== undefined){
            obj[element] += 1;
        } else {
            obj[element] = 1; 
        }
    }
    return obj
}

console.log(getFrequencies(["A", "B", "A", "A", "A"])); // ➞ { A: 4, B: 1 }
console.log(getFrequencies([1, 2, 3, 3, 2])); // ➞ { "1": 1, "2": 2, "3": 2 }
console.log(getFrequencies([true, false, true, false, false])); // ➞ { true: 2, false: 3 }
console.log(getFrequencies([])); // ➞ {}