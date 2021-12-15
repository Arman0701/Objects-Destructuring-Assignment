# Objects
---
* ### Task
```javascript
let person = { name: "Sarah", country: "Nigeria", job: "Developer" };
let name, country, job;
const { name, country, job } = person;
console.log(name);
```

[Solution](https://github.com/Arman0701/Objects-Destructuring-Assignment/blob/master/Tasks/1.Task.js)

---

* ### Get name, country and jod using destructuring
```javascript
let person = { name: "Sarah", country: "Armenia", job: "Developer" };
console.log(name); // "Sarah"
console.log(country); // "Nigeria"
console.log(job); // "Developer"
```

[Solution](https://github.com/Arman0701/Objects-Destructuring-Assignment/blob/master/Tasks/2.Get-values.js)

---

* ### Concatenate the two arrays
```javascript
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
const arr3; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

[Solution](https://github.com/Arman0701/Objects-Destructuring-Assignment/blob/master/Tasks/3.Concatenate-2-arrays.js)

---

* ### How to take arguments in sum function?
```javascript
function sum() {
    return args.reduce((sum, current) => {
        return sum + current;
    });
}

sum(1, 2); // prints 3
sum(1, 2, 3); // prints 6
```

[Solution](https://github.com/Arman0701/Objects-Destructuring-Assignment/blob/master/Tasks/4.Take-arguments.js)

---

* ### How to pass arguments in sum function?
```javascript
function sum(x, y, z) {
return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum()); // prints 6
```

[Solution](https://github.com/Arman0701/Objects-Destructuring-Assignment/blob/master/Tasks/5.Passing-arguments.js)

---

* ### Swapping Values using the Destructuring Assignment
```javascript
let a = 3;
let b = 6;
console.log(a); //6
console.log(b); //3
```

[Solution](https://github.com/Arman0701/Objects-Destructuring-Assignment/blob/master/Tasks/6.Swap-values.js)

---

* ### Upvotes and Downvotes
> Given an object containing counts of both upvotes and downvotes, return what vote count should be
> displayed. This is calculated by subtracting the number of downvotes from upvotes.
```javascript
getVoteCount({ upvotes: 13, downvotes: 0 }); // ➞ 13
getVoteCount({ upvotes: 2, downvotes: 33 }); // ➞ -31
getVoteCount({ upvotes: 132, downvotes: 132 }); // ➞ 0
```

[Solution](https://github.com/Arman0701/Objects-Destructuring-Assignment/blob/master/Tasks/7.Upvotes-downvotes.js)

---

* ### 50, 30, 20
> The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on
> needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.
> Given the after-tax income as ati, what you are supposed to do is to make a function that will return an
> object that shows how much a person needs to spend on needs, wants, and savings.
```
fiftyThirtyTwenty(10000); // ➞ { "Needs": 5000, "Wants": 3000, "Savings":
2000 }
fiftyThirtyTwenty(50000); // ➞ { "Needs": 25000, "Wants": 15000,
"Savings": 10000 }
fiftyThirtyTwenty(13450); // ➞ { "Needs": 6725, "Wants": 4035, "Savings":
2690 }
```

[Solution](https://github.com/Arman0701/Objects-Destructuring-Assignment/blob/master/Tasks/8.Strategy-50-30-20.js)

---

* ### Create a one-liner function
> Create a function that takes an object as an argument and returns a string with facts about the city. The city
> facts will need to be extracted from the object's three properties:
> 
> name
> population
> continent
> 
> The string should have the following format: X has a population of Y and is situated in Z (where X is the city
> name, Y is the population and Z is the continent the city is situated in).
```javascript
cityFacts({
    name: "Paris",
population: "2,140,526",
continent: "Europe",
}); // ➞ "Paris has a population of 2,140,526 and is situated in Europe"
cityFacts({
    name: "Tokyo",
population: "13,929,286",
continent: "Asia",
}); // ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
```

[Solution](https://github.com/Arman0701/Objects-Destructuring-Assignment/blob/master/Tasks/9.One-line-function.js)

---

* ### Create a function that takes infinite count of elements, operator and prints their sum. If there's no 5operator, then default should be +
```javascript
printSum("*", 1, 2, 3); // 9
printSum(1, 2, 3, 4, 5); // 15
printSum("-", 1, 2, 3, 6, 7); // -17
printSum("**", 2, 3, 2); // 64
```

[Solution](https://github.com/Arman0701/Objects-Destructuring-Assignment/blob/master/Tasks/10.Print-sum.js)

---

* ### Write object.keys, object.values and object.entries methods using for..in

[Solution](https://github.com/Arman0701/Objects-Destructuring-Assignment/tree/master/Tasks/Implements-with-for-in)

---


# Optional Tasks
---

* Make a Circle with methods
> Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The
> circles constructed must have two methods getArea() (PIr^2) and getPerimeter() (2PI*r) which give both
> respective areas and perimeter (circumference).
> For help with this class, I have provided you with a Rectangle constructor which you can use as a base
> example.
```javascript
let circy = new Circle(11);
circy.getArea();
// Should return 380.132711084365
let circy = new Circle(4.44);
circy.getPerimeter();
// Should return 27.897342763877365
```

[Solution](https://github.com/Arman0701/Objects-Destructuring-Assignment/blob/master/Optional-tasks/1.Make-circle.js)

---

* ### Lowercase and Uppercase
> Write a function that creates an object with each (key, value) pair being > the (lower case, upper case)
> versions of a letter, respectively.
```javascript
mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
```

[Solution](https://github.com/Arman0701/Objects-Destructuring-Assignment/blob/master/Optional-tasks/2.LCase-UCase.js)

---

* ### Frequency Distribution
>Create a function that returns the frequency distribution of an array. This function should return an object,
>where the keys are the unique elements and the values are the frequency in which those elements occur.
```javascript
getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }
getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }
getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }
getFrequencies([]) ➞ {}
```
[Solution](https://github.com/Arman0701/Objects-Destructuring-Assignment/blob/master/Optional-tasks/3.Frequency-distribution.js)

---

* ### You receive an object with nested objects with strings as values. Convert their values to number and return an object without the entries that evaluate to NaN.
```javascript
findAndRemove(
    {
        bedroom: {
            slippers: "10000",
            piano: "550",
            call: "vet",
            travel: "world",
        },
    }
);
// => OUTPUT
// {
//   bedroom: {
//     slippers: 10000,
//     piano: 5500,
//   },
// }
```
[Solution](https://github.com/Arman0701/Objects-Destructuring-Assignment/blob/master/Optional-tasks/4.Find-remove.js)

---

* ### Create a function that implements lodash get function
```
/**
* @param {object} obj
* @param {string} path
* @return {value}
*/
```
```javascript
function get(obj, path) {}
console.log(get({ a: 1 }, "a")); // 1
console.log(get({ a: { b: 2 } }, "a.b")); // 2
console.log(get({ a: 1, b: 2 }, "c", 10)); // 10
console.log(get({ a: 1, b: 2 }, "d.c", 10)); // 10
console.log(get({ a: { b: { c: "hello" } } }, "a.b.c")); // 'hello'
```
[Solution]()

---

# Literature
#### Available in russian
* [Objects](https://javascript.info/object)
* [Objects Copy](https://javascript.info/object-copy)
* [Garbage Collection](https://javascript.info/garbage-collection)
* [Object Primitive Conversion](https://javascript.info/object-toprimitive)
* [Object(.keys|.values|.entries)](https://javascript.info/keys-values-entries)
* [Destructuring Assignment](https://javascript.info/destructuring-assignment)