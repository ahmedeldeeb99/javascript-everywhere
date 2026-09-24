// 3.1 Three levels
let globalScoped = "global scoped variable";

function functionScope() {
  let functionScoped = "function scoped variable";

  if (true) {
    let blockScoped = "block scoped variable";

    console.log(globalScoped);
    console.log(functionScoped);
    console.log(blockScoped);
}

// console.log(blockScoped);
}

// console.log(functionScoped);

functionScope();
// blockScoped is not defined
// functionScoped is not defined

console.log("///////////////////////////")

// 3.2 var leaks
if (true) {
    let letVariable = "let variable"
    var varVariable = "Var variable"
}
// console.log(letVariable)
console.log(varVariable)
// the var variable escaped and run, bucause it's function scoped while let is a block scoped
// that can cause problems because when the code gets bigger we can define the same variable, and it escapes its block so it can cause problems and errors

console.log("//////////////////////////////")

// 3.3 Shadowing

let theStatus = "global status"
function localTest() {
    let theStatus = "local status"
    console.log(theStatus)
}
localTest()
console.log(theStatus)
// the local status wins inside the function, because JavaScript looks for a variable in the current scope first, then searches the outer scopes if it doesn't find it.

console.log("/////////////////////////////")

// 3.4 Hoisting, demonstrated
console.log(funDeclaration())
function funDeclaration() {
    return "this is test"
}

console.log(preVar)
var preVar = "preVar"

// console.log(preLet)
// let preLet = "preLet"
// ReferenceError: Cannot access 'preLet' before initialization

// console.log(arrowFun())
// let arrowFun = () => "arrow function"
// ReferenceError: Cannot access 'arrowFun' before initialization

// function declaration are safe to call before they are defined
// var is not safe to call as it gives undefined, because it hoists the declaration not the assigning
// let and const are not safe to use before the initialization as it gives reference error because of the TDZ
// Arrow functions are not safe to call before initialization using call and let, but with var it will give undefined due to hoisting

// 3.5 The loop classic
const fns = [];
for (var i = 0; i < 3; i++)
fns.push(() => i);
fns.forEach((f) => console.log(f()));

// now the same with let

// const fns = [];
// for (let i = 0; i < 3; i++) fns.push(() => i);
// fns.forEach((f) => console.log(f()));

// var uses the same i for all functions, while let creates a separate i for each loop