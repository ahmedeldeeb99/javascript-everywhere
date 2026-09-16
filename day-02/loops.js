// 4.1–4.5 One problem per loop type
console.log("'''''One problem per loop type'''''")
//for — printed 1 to 20, but "Fizz" for every multiple of 3
console.log("'''for — printed 1 to 20, but 'Fizz' for every multiple of 3'''")
for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        console.log("Fizz")
    }else {
        console.log(i)
    }
}

console.log("////////////////////////////////////////")
//for...of — printed 6+ track names, each with its position
console.log("'''for...of — printed 6+ track names, each with its position'''")
let tracks = ["frontend", "backend", "mobile", "desktop", "cyber_security", "data_analysis", "embded_systems"]
let position = 1
for (const track of tracks) {
    console.log(`${position} - ${track}`)
    position++
}

console.log("////////////////////////////////////////")
//for...in — printed every key: value pair of an object with 5+ keys
console.log("'''for...in — printed every key: value pair of an object with 5+ keys'''")
let skills = {
    first : "html",
    second : "css",
    third : "javascript",
    fourth : "react",
    fifth : "tailwind",
    sixth : "git & github"
}
for (const key in skills) {
    console.log(`${key} : ${skills[key]} `)
}

console.log("////////////////////////////////////////")
// while — started at 100 and halved until below 1, printing each step
console.log("'''while — started at 100 and halved until below 1, printing each step'''")
let num = 100
while (num >= 1) {
    console.log(num)
    num /= 2
}

console.log("////////////////////////////////////////")
// do...while — condition false from the start, proved it still runs once
console.log("'''do...while — condition false from the start, proved it still runs once'''")

do {
    console.log("do_while_profe")
}while (false)

console.log("////////////////////////////////////////")
console.log("////////////////////////////////////////")

// 4.6 break and continue
console.log("'''''break and continue'''''")

const scores = [84, 94, 37, 95, 74, 99, 73]
for (const score of scores) {
    if (score < 50) {
        continue;
    } else if (score > 95) {
        break;
    }
    console.log(score)
}
// 84, 94, 95, 74 were printed because they are higher than 50 and lower than 95
// 37 wasn't printed because it's lower than 50
// 99 wasn't printed as it stopped the entire loop when the break happened
// 73 wasn't printed as it came after 99

console.log("////////////////////////////////////////")

// 4.7 Sum and max without built-ins
console.log("'''''Sum and max without built-ins'''''")
//sum
let numbers = [48, 74, 38, 95, 55, 60, 85, 59]
let sum = 0
for (let number of numbers) {
    sum += number // we are adding every number we are walking through to (sum)
}
console.log(sum)

// average
let average = sum / numbers.length // we used the division onn the sum that we have already calculated
console.log(average)

// highest
let highest = numbers[0];
for (let big of numbers) {
    if (big > highest) { // we set the highest as the first number and checked if there is higher then add it instead
        highest = big
    }
} 
console.log(highest)

// lowest
let lowest = numbers[0];
for (let small of numbers) {
    if (small < lowest) { // here we made the same operation above but this is about adding the lowest instead
        lowest = small
    }
} 
console.log(lowest)