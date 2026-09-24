// isValidScore(score) — rejects non-numbers, NaN, and anything outside 0–100
function isValidScore(score) {
    return (
        typeof score === "number" && !Number.isNaN(score) && score >= 0 && score <= 100
    )
}


// letterGrade(score) — A–F using the five bands
function letterGrade(score) {
    if (score > 100 || score < 0){
        return "Invalid"
    } else if (score >= 90) {
        return "A"
    } else if (score >= 80) {
        return "B"
    } else if (score >= 70) {
        return "C"
    } else if (score >= 60) {
        return "D"
    } else {
        return "F"
    }
}

// isPassing(score, passMark = 60) — boolean, with a working default
function isPassing(score, passMark = 60) {
    return score >= passMark
}

// isAtRisk(student) — score below 60 or attendance below 70
function isAtRisk(student) {
  return student.score < 60 || student.attendance < 70;
}

// average(numbers) — returns 0 for an empty array (guard clause, no divide-by-zero)
function average(numbers) {
    let total = 0
    for (const score of numbers) {
        total += score
    }
    return total / numbers.length
}

// highest(students) / lowest(students) — return the student object, found with a loop, no Math.max
function highest(numbers) {
  let highestNumber = numbers[0];
  for (const number of numbers) {
    if (number > highestNumber) {
      highestNumber = number;
    }
  }
  return highestNumber;
}

function lowest(numbers) {
  let lowestNumber = numbers[0];
  for (const number of numbers) {
    if (number < lowestNumber) {
      lowestNumber = number;
    }
  }
  return lowestNumber;
}

// countByGrade(students) — returns an object like { A: 2, B: 1, C: 0, D: 1, F: 1 }
function countByGrade(grades) {
    const counts = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0
  };
  for (const grade of grades) {
    counts[grade]++
  }
  return counts
}

// formatRow(student) — one aligned string using padEnd / padStart
function formatRow(student, grade, status) {
  return `${student.name.padEnd(13)}${String(student.score).padEnd(10)}${String(student.attendance).padEnd(15)}${grade.padEnd(10)}${status}`;
}



const students = [
    { 
        name: "Ahmed",
        score: 95,
        attendance: 90 
    },
    { 
        name: "Ali",
        score: 85,
        attendance: 95
    },
    { 
        name: "Omar",
        score: 75,
        attendance: 80
    },
    {
        name: "Mona",
        score: 65,
        attendance: 90
    },
    {
        name: "Sara",
        score: 55,
        attendance: 85
    },
    {
        name: "Youssef",
        score: 92,
        attendance: 75
    },
    {
        name: "Nour",
        score: 88,
        attendance:68
    },
    {
        name: "Hassan",
        score: 72,
        attendance: 95
    },
    {
        name: "Menna",
        score: 61,
        attendance: 80
    },
    {
        name: "Karim",
        score: 45,
        attendance: 60
    },
    {
        name: "Broken Score",
        score: "bad",
        attendance: 90
    },
    null
];


console.log(
  `${"Student".padEnd(13)}${"Score".padEnd(10)}${"Attendance".padEnd(15)}${"Grade".padEnd(10)}Status`
);

console.log("-".repeat(58));



let skipped = 0;

const validStudents = [];
const validScores = [];
const grades = [];
let atRiskCount = 0;

for (const student of students) {
    if (student === null) {
        skipped++;
        continue;
    }

    if (typeof student.score !== "number") {
        skipped++;
        continue;
    }
    const grade = letterGrade(student.score)
    const status = isAtRisk(student) ? "At Risk" : "OK"

    validStudents.push(student)
    validScores.push(student.score)
    grades.push(grade)

    if (isAtRisk(student)) {
        atRiskCount++
    }

    console.log(formatRow(student, grade, status))

    
}


const gradeCounts = countByGrade(grades);
const avg = average(validScores);

const highestScore = highest(validScores);
const lowestScore = lowest(validScores);

const highestStudent = validStudents.find(
  (student) => student.score === highestScore
);

const lowestStudent = validStudents.find(
  (student) => student.score === lowestScore
);

console.log("Summary");
console.log("-------");
console.log("A:", gradeCounts.A);
console.log("B:", gradeCounts.B);
console.log("C:", gradeCounts.C);
console.log("D:", gradeCounts.D);
console.log("F:", gradeCounts.F);
console.log("Average:", avg.toFixed(1));
console.log("Highest:", highestStudent.name);
console.log("Lowest:", lowestStudent.name);
console.log("At risk:", atRiskCount);
console.log("Skipped:", skipped);