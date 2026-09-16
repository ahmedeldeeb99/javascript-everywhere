const students = [
    {
        name: "Ahmed",
        score: 95,
        attendance: 90,
    },
    {
        name: "Sara",
        score: 85,
        attendance: 88,
    },
    {
        name: "Omar",
        score: 75,
        attendance: 82,
    },
    {
        name: "Lina",
        score: 65,
        attendance: 76,
    },
    {
        name: "Youssef",
        score: 55,
        attendance: 85,
    },
    {
        name: "Mona",
        score: 92,
        attendance: 65,
    },
    {
        name: "Karim",
        score: 48,
        attendance: 60,
    },
    {
        name: "Broken", // the broken record
        score: 88,
    },
    {
        name: "Nour",
        score: 78,
        attendance: 95,
    },    
]

// const score = 95
let A = 0
let B = 0
let C = 0
let D = 0
let F = 0
let validStudents = 0
let grade;
let atRisk = 0
let invalidRecord = 0
// console.log(`${"Student".padEnd(10)}${"Name".padEnd(13)}${"Score".padEnd(12)}${"Attendance".padEnd(17)}${"Grade".padEnd(14)}${"Status"}`);
console.log(
  `${"Student".padEnd(15)}${"Name".padEnd(13)}${"Score".padEnd(10)}${"Attendance".padEnd(15)}${"Grade".padEnd(10)}${"Status"}`,
);
console.log(`-------------------------------------------------------------`)
for (const student of students) {
    if (student.name === undefined || student.score === undefined || student.attendance === undefined) {
        console.log("Invalid record"); // here we check if anyone of the entries is undefined it prits ("Invalid record")
        invalidRecord++
        continue;
    }else {
        validStudents++
        if (student.score > 100 || student.score < 0){
            grade = "Invalid"
        } else if (student.score >= 90) {
            grade = "A"
            A++
        } else if (student.score >= 80) {
            grade = "B"
            B++
        } else if (student.score >= 70) {
            grade = "C"
            C++
        } else if (student.score >= 60) {
            grade = "D"
            D++
        } else {
            grade = "F"
            F++
        }
    }


    let status;
    if (student.score < 60 || student.attendance < 70) {
        status = "At risk";
        atRisk++
    } else {
        status = "OK";
    }
// console.log(`${"Student".padEnd(10)}${"Name".padEnd(13)}${"Score".padEnd(12)}${"Attendance".padEnd(17)}${"Grade".padEnd(14)}${"Status"}`);

//     console.log(`student : ${student.name.padEnd(10)} - ${String(student.score).padStart(3)} - ${String(student.attendance).padStart(3)} - ${grade.padEnd(5)} - ${status}`);


console.log(
  `${"student".padEnd(15)}${student.name.padEnd(13)}${String(student.score).padEnd(10)}${String(student.attendance).padEnd(15)}${grade.padEnd(10)}${status}`,
);
}

console.log("/////////////////////////////////////")

// 5.2 The summary block
console.log("'''''The summary block'''''")
// How many students in each of the five bands
console.log(`A : ${A}`) // we added each student to the related variable we created above so we can see the amount of students at each category
console.log(`B : ${B}`)
console.log(`C : ${C}`)
console.log(`D : ${D}`)
console.log(`F : ${F}`)

// The class average, to one decimal place
let total = 0
for (const student of students) {
    total += student.score // we calculated the total
}
const average = total / validStudents // we calculated the average by dividing the total on students amount
console.log(`average : ${average.toFixed(2)}`)


// The highest and lowest scoring student by name — found with a loop, not Math.max
let highest = null // we set the highest and lowest to null considering if it's invalid number
let lowest = null
for (const student of students) {
    if (highest === null|| student.score > highest.score) { // we put the other condition to add this number instead, if it's higher than (highest)
        highest = student
    }
}
for (const student of students) {
    if (lowest === null|| student.score < lowest.score) { // the same thing here, but if the number is lower than (lowest)
        lowest = student
    }
}
console.log(`highest : ${highest.name}`)
console.log(`lowest : ${lowest.name}`)

// How many students are at risk
console.log(`At risk : ${atRisk}`) // we made a variable and each student that its score is lower than 60 or its attendance is lower than 70 we add it to (atRisk)

// How many records were skipped as invalid
console.log(`records that are skipped as invalid : ${invalidRecord}`) // we made a variable and add in it each invalid record that we skipped, that its name, score or attendance is undefined

console.log("/////////////////////////////////////")
// 5.3 Make it readable