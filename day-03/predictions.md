// 1
console.log(a);
var a = 1; // undefined : undefined

// 2
console.log(b);
let b = 2; // reference error : ReferenceError: Cannot access 'b' before initialization
Because b is in the Temporal Dead Zone (TDZ) until its let declaration is initialized

// 3
hello();
function hello() { console.log("hi"); } // the function will run : h1

// 4
bye();
const bye = () => console.log("bye"); // reference error : ReferenceError: Cannot access 'bye' before initialization
Because bye is in the Temporal Dead Zone (TDZ) until its const declaration is initialized.

// 5
function f() { return; 42; }
console.log(f()); // the function will run : undefined
it will give undefined because return has stopped the function and the value came after it


// 6
const g = (x) => { x * 2 };
console.log(g(5)); // the function will run : undefined
because the braces is a block body and requires return

// 7
const h = (x) => { value: x };
console.log(h(5)); // I think it will give an error as it requires () : undefined
it's treated as a block not as an object, if we want it to return an object we put it in ()

// 8
function k(a, b) { return a + b; }
console.log(k(1)); // it will give NaN as it adds a number to undefined : NaN

// 9
function m(x = 10) { return x; }
console.log(m(null), m(undefined), m(0)); // null, 10, 0 : null 10 0

// 10
let n = "outer";
function p() { let n = "inner"; return n; }
console.log(p(), n); // inner, outer : inner outer

// 11
for (var i = 0; i < 3; i++) {}
console.log(i); // undefined, as it deals with "var" as a global variable : 3
as it deals with "var" as a global variable

// 12
for (let j = 0; j < 3; j++) {}
console.log(j); // reference error, as we did't set return at the function : ReferenceError: j is not defined

// 13
function counter() { let c = 0; return () => ++c; }
const q = counter();
console.log(q(), q(), counter()()); // 1, 1, 0 : 1 2 1
because q kept the old value while counter created a new one 

// 14
const nums = [1, 2, 3];
console.log(nums.map((x) => x * 2)); // [2, 4, 6] as map applies a condition on the elements : [ 2, 4, 6 ]

// 15
function r() { console.log("ran"); }
console.log(r); // it will give the function name or definition, but it will not call the function : [Function: r]