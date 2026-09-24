# Day 03 Notes

### Parameter vs Argument
parameter is the variable written in the function definition that receives a value, but argument is the actual value I pass to the function when I call it


### Function declaration vs expression vs arrow
function declaration uses the "function" keyword with a function name, I would pick it when I want a traditional function that can be called before its initialization

function expression makes a variable with an anonymous function, I would pick it when I want the function to be treated like a value

An arrow function uses "=>" and is a shorter way to write a function, I would pick it when I want a short function syntax


### return vs console.log
they are not interchangeable because "return" is used so the function gives a value but not print it and we can call it, but "console.log" prints the value or the function in console, it doesn't send the value back from the function


### Guard clause
A guard clause checks for a condition that should stop the function and return, it also make it easier to read instead of the else if


### Global vs function vs block scope
global scope can be reached from any where
function scope is only accessed inside the function and it comes over the global scope if they carry the same name
block scope is the scope between block and it is also accessed inside it only, and this for let and const only


### scope chain
the scope chain is how javascript searches for the variable from its current scope first then to the outside until it finds it or goes to the global scope


### What hoisting actually moves
Hoisting is therefore about declarations being processed during scope creation

"function" : the function declaration is available before its line in the code, so I can call the function before its definition

"var": the variable declaration is hoisted and initialized with undefined. The assignment happens when execution reaches the assignment line

"let": the declaration is hoisted/created, but it is not initialized. It stays in the Temporal Dead Zone (TDZ) until the declaration is reached, so accessing it before then causes a ReferenceError

"const": works like let regarding hoisting. The declaration is created but not initialized, so accessing it before its declaration causes a ReferenceError because it is in the TDZ


### Temporal Dead Zone (TDZ)
The TDZ is the time between entering a scope and reaching the let or const declaration

The variable exists, but I cannot use it before its declaration. If I try, JavaScript gives a ReferenceError instead of undefined, which helps me catch the mistake early


### Closure
A function can remember and access variables from the scope where it was created, even after that outer function has finished running

### Passing fn vs fn()
Passing "fn" passes the function itself so another function can call it later
Passing "fn()" calls the function immediately and passes its return value instead, and it gives undefined if we are calling a function inside another function for example

### the one-place change
Changing the passing mark from 60 to 70 now requires changing one value in "isPassing()" instead of editing three places

## 5.3 
Day 02 line count: 501
Day 03 total: 829

### One bug I hit today
one bug I hit was using console.log inside a function when I needed the function to return a value, this caused the function to print the result but return undefined, so the value could not be used by other code
I fixed it by replacing console.log with return, so the function gives the result back to the code that called it