'use strict'

let person = { name: "Sarah", country: "Nigeria", job: "Developer" };
// let name, country, job; 
const { name, country, job } = person;
console.log(name);

/**
 * There is no need to declare variables separately and try to use them in the expression of destructuring
 * because {} literals can be perceived by the JS engine as a block of code. 
 * In addition, the JS engine, reading the literal after the announcement keyword, 
 * realizes that there is an expression of destructiveness written there.
 */