'use strict'

// Create a function that takes infinite count of elements, operator and prints their sum. 
// If there's no perator, then default should be +

function printSum(operator, ...values){
    if (operator === '*'){
        return values.reduce((a,b)=>{return a*b});
    }
    else if (operator === '-'){
        return values.reduce((a,b)=>{return a-b});
    }
    else if (operator === '**'){
        return values.reduce((a,b)=>{return Math.pow(a,b)});
    } else {
        return values.reduce((a,b)=>{return a+b}, operator);
    }
}

console.log(printSum("*", 1, 2, 3)); // 9
console.log(printSum(1, 2, 3, 4, 5)); // 15
console.log(printSum("-", 1, 2, 3, 6, 7)); // -17
console.log(printSum("**", 2, 3, 2)); // 64