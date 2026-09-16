// 3.1 Five bands, not three
console.log("'''''Five bands, not three'''''")
let score = 95
if (score > 100 || score < 0) { // we define if it's valid or not
    console.log("Invalid score")
}else if (score >= 90) {
    console.log("A")
}else if (score >= 80) {
    console.log("B")
}else if (score >= 70) {
    console.log("C")
}else if (score >= 60) {
    console.log("D")
}else { // if it's not in the dedicated range of grades
    console.log("F")
}

console.log("///////////////////////////////////////////////")

// 3.2 The same logic as a ternary
console.log("'''''The same logic as a ternary'''''")
let mark = 80
let passOrFail = mark >= 60 ? "pass" : "fail"
console.log(passOrFail)
//I would not write the five-band version as a nested ternary,
//because it's would be a bit hard or complicated to read,
//and that's why the if condition is existed and more clear
//  for these cases

console.log("///////////////////////////////////////////////")

// 3.3 switch — and breaking it on purpose
console.log("'''''switch — and breaking it on purpose'''''")
let letter = "A" // the thing that we switch
switch(letter) {
    case "A": // each case has a different result according to the grade
        console.log("you are an Excellent student")
        break; // this is to stop it from going into another case
    case "B":
        console.log("you are a very good student")
        break;
    case "C":
        console.log("you are a good student")
        break;
    case "D":
        console.log("you are a fair student")
        break;
    case "F":
        console.log("you are a very bad student")
        break;
    default: // this is the default case that occures when nothing match the cases
        console.log("Invalid grade")
}

console.log("////////////////////////////////////////")

// 3.4 Logical operators
console.log("'''''Logical operators'''''")
let theScore = 65
let attendance = 35
if (theScore >= 70 && attendance >= 80) { // the first condition
    console.log("Certificate awarded")
}else if (theScore < 60 || attendance < 50) { // the second condition
    console.log("Review needed")
}else { // I added this cause the required conditions doesn't include all the possible conditions
    console.log("no decision")
}