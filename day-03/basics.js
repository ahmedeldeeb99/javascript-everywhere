// 2.1 The same function, three ways
function celsiusToF(cel) {
    return (cel * 9) / 5 + 32;
}

const celsiusToFExpression = function(celsius) {
    return (celsius * 9) / 5 + 32;
}

const celsiusToFArrow = (celsius) => (celsius * 9) / 5 + 32;

console.log(celsiusToF(25))
console.log(celsiusToFExpression(25))
console.log(celsiusToFArrow(25))

console.log("///////////////////////////////////////")

// 2.2 Return, not log
function addLog(a, b)  {
    console.log(a + b)
}

function addReturn(a, b)  {
    return a + b
}

const doubledLog = addLog(1, 2) * 2
console.log(doubledLog)

const doubledReturn = addReturn(1, 2) * 2
console.log(doubledReturn)
// addLog will give NaN because it prints the sum but returns undefined

console.log("///////////////////////////////////////")

// 2.3 Defaults
function greet(name = "guest", greeting = "Hello") {
    return `${greeting} - ${name}`
}
console.log(greet())
console.log(greet("Mohammed"))
console.log(greet("Mohammed", "how are you"))
console.log(greet(null, "how are you"))
// because null is an explicit value not undefined

console.log("///////////////////////////////////////")

// 2.4 Rest parameters
function sumAll(...numbers) {
    let total = 0
    for (const number of numbers) {
        total += number // we are adding each number to tatal
    }
    return total
}
console.log(sumAll())
console.log(sumAll(1))
console.log(sumAll(0, 1, 2, 3, 4, 5))

function describe(label, ...values) {
    // return `${label}: ${v1}, ${v2}, ${v3}`
    let result = `${label} `
    for (const value of values) {
        result += `${value}, ` // we are adding each value off the values to result
    }
    return result
}
console.log(describe("theLabel", 45, 65, 95))

console.log("///////////////////////////////////////")

// 2.5 Guard clauses
function safeDivide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "enter a valid number" // we are extracting the invalid entries
    }

    if (b === 0) {
        return "can't divide by 0" // we are also eleminating 0, because we can't divide by it
    }

    return a / b // if it escaped the guard clauses above, then it returns this
}
console.log(safeDivide(8, 2))
console.log(safeDivide("hello", 2))
console.log(safeDivide(8, 0))