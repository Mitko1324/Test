// var
// let
// const

// 1. let/const is the new way of declaring variables (ES6)
// 2. let/const have block scope while var has function scope
// 3. let and var can be reassigned while const can't
// 4. var can be redeclared

var i = 0
var i = 1 // redecleare

let a = 2 // reassign

// hoisting - hoisting is a JS' default behaviour of moving variables and function declarations to the top of the scope

// primitives are passed as value while non-primitives by reference

// == compares by value
// === compares both value and type

// closure - when inner function has access to outer function's vars

// [1, 2, 4, 5]

// number, string, boolean, null, undefined
// array, obj

// falsy -> 0, null, undefined

// a promise is an object representing the eventual completing of an async operation
// async operation => fetch('/users') => returns a promise
// then((data) => console.log(data)) when operation is complete provide callback to handle success
// catch((error) => console.log(data)) when operation is rejected  provide callback to handle error

fetch('/users').then((response) => {
    if (response.status === 200) {
        console.log('SUCCESS');
    }
}).catch((error) => {
    console.log(error);
});

let c = 1 
let b = 0

if (b) {
    // truthy
} else {

}

do {

} while (true)

for (let i = 0; i < 2; i++) {}
while (i < 10) {}
[1, 2, 3].filter((value) => value % 2 !== 0) // [1, 3]

// { active: true } 

[].forEach((value, index) => {});