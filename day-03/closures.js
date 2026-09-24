// 4.1 A counter that remembers
function makeCounter() {
    let count = 0
    return function() {
        count++
        return count
    }
}
const counter1 = makeCounter()
const counter2 = makeCounter()

console.log(counter1())
console.log(counter1())
console.log(counter2());
console.log(counter1());
console.log(counter2());
// count still exists because the other function needs it and if makeCounter stopped it will give an error

console.log("///////////////////////////////")

// 4.2 A function factory
function makeMultiplier(factor) {
    return function(number) {
        return number * factor
    }
}
const double = makeMultiplier(2)
const triple = makeMultiplier(3)
const half = makeMultiplier(.5)

console.log(double(8))
console.log(triple(8))
console.log(half(8))

console.log("////////////////////////////////")

// 4.3 A grader factory

function makeGrader(passMark) {
    return function(score) {
        return score >= passMark ? "Pass" : "Fail"
    }
}
const strict = makeGrader(85)
const lenient = makeGrader(60)

console.log(strict(70))
console.log(lenient(70))

console.log("////////////////////////////")

// 4.4 Write your own forEach
function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i) // they go as prameters in the function below
    }
}
const tracks = ["web", "mobile", "desktop", "cybersecurity", "data-analysis"]
myForEach(tracks, function (item, index) { // we gave the array[tracks] to array, and the function that returns item and index to callback
    console.log(`${index + 1}. ${item}`)
})

console.log("////////////////////////////")

// 4.5 Write your own map and filter
function myMap(array, callback) {
    const newArray = []
    for (let i = 0; i < array.length; i++) { // we are applying an action on every element
        newArray.push(callback(array[i])) // we are giving the function below the element that applies an action on it
    }
    return newArray
}

function myFilter(array, test) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        if (test(array[i])) { // we are applying a test to see who will pass
            newArray.push(array[i]) // add it to the new array if it pass the test
        }
    }
    return newArray
}

const scores = [45, 80, 60, 95, 30];
const doubled = myMap(scores, function(score) { // we assign the enteries and set a function that makes an action on element
    return score * 2
})
const passing = myFilter(scores, function(score) { // the same but the function is making a condition to see who passes
    return score >= 60
})
console.log(`scores : ${scores}`)
console.log(`doubled with map : ${doubled}`)
console.log(`passing with filter : ${passing}`)

console.log("///////////////////////////////////////")

// 4.6 Callback, not call
function sayHi() {
    console.log("hi")
}
function runTwice(fn) {
    fn()
    fn()
}
runTwice(sayHi)
runTwice(sayHi())
// TypeError: fn is not a function