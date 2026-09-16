// 2.1 One of each
console.log("'''One of each'''")
const name = "Sara"
const age = 25
const status = true
const city = null
let job;
const friends = {
    Mariam : "frontend web developer",
    Hadeer : "backend web developer",
    walaa : "flutter developer"
}
const skills = ["html", " css", " javascript", " tailwind-css", " react"]

console.log(`name => "${name}" => ${typeof name}`)
console.log(`age => "${age}" => ${typeof age}`)
console.log(`status => "${status}" => ${typeof status}`)
console.log(`city => "${city}" => ${typeof city}`)
console.log(`job => "${job}" => ${typeof job}`)
console.log(`friends => "${friends}" => ${typeof friends}`)
console.log(`skills => "${skills}" => ${typeof skills}`)

console.log("///////////////////////////////////////////////")

// 2.2 The typeof traps
console.log("'''The typeof traps'''")
// after a bit of research, I found out that null is not actually an object,
// but it returns to the beginning of designing js, it made null was represented
// by mistake as an object, and they didn't fix it yet to not ruin or break a major
// javascript code
console.log(typeof null)

// it's concidered as a special kind of object
console.log(typeof [])

// correct way to detect an array
console.log(Array.isArray())

console.log("///////////////////////////////////////////////")

// 2.3 Convert on purpose
console.log("'''Convert on purpose'''")
console.log(typeof Number("42"))
console.log(typeof String(42))

let hello = Number("hello")
console.log(Number(hello))
console.log(typeof Number(hello))

let parsePix = parseInt("42px")
let numPix = Number("42px")
console.log(parsePix)
console.log(numPix)

console.log("///////////////////////////////////////////////")

// 2.4 Falsy roll call
console.log("'''Falsy roll call'''")

let falsyArr = [false, 0, -0, 0n, "", null, undefined, NaN, [], {}, "0"]
for (let i = 0; i < falsyArr.length; i++) {
    console.log(`${falsyArr[i]} => ${Boolean(falsyArr[i])} `)
}

console.log("///////////////////////////////////////////////")

// 2.5 || vs ??
console.log("'''2.5 || vs ??'''")

let theNum = 0
console.log(theNum || "fallback")
console.log(theNum ?? "fallback")// this is when (0) is a valid value
