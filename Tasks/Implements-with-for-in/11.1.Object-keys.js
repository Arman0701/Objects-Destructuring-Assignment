'use strict'

function getKeysOf(obj){
    let arr = [];
    for (let key in obj){
        arr.push(key)
    }
    return arr;
}

console.log(getKeysOf({
    name: "John",
    age: 30
  }));