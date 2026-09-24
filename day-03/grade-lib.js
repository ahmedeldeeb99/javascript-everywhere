// // isPassing(score, passMark = 60) — boolean, with a working default
// function isPassing(score, passMark = 60) {
//     return score >= passMark
// }
// console.log(isPassing(students[4].score, 60))
// console.log(isPassing(students[5].score, 50))


// //isAtRisk(student) — score below 60 or attendance below 70
// function isAtRisk(student) {
//     return student.score < 60 || student.attendance < 70
// }
// console.log(isAtRisk(students))


// // average(numbers) — returns 0 for an empty array (guard clause, no divide-by-zero)
// function average(numbers) {
//     if (numbers.length === 0) {
//         return 0
//     }
//     let total = 0
//     for (const number of numbers) {
//         total += number
//     }
//     return total / numbers.length
// }
// console.log(average([80, 90, 70]))


// // highest(students) / lowest(students) — return the student object, found with a loop, no Math.max
// function highest(students) {
//     let highest = students[0]
//     for (const student of students) {
//         if (student.score > highest.score) {
//             highest = student
//         }
//     }
//     return highest
// }
// console.log(highest(students))

// function lowest(students) {
//     let lowestStudent = students[0]

//     for (const student of students) {
//         if (student.score < lowestStudent.score) {
//             lowestStudent = student
//         }
//     }

//     return lowestStudent
// }
// console.log(lowest(students))


// // countByGrade(students) — returns an object like { A: 2, B: 1, C: 0, D: 1, F: 1 }
// function countByGrade(students) {
//     let grade;
//     // let A = 0
//     // let B = 0
//     // let C = 0
//     // let D = 0
//     // let F = 0
//     const histogram = {
//         A: 0,
//         B: 0,
//         C: 0,
//         D: 0,
//         F: 0
//     };
//     for (const student of students) {
//          if (student.score > 100 || student.score < 0) {
//             grade = "Invalid"
//         } else if (student.score >= 90) {
//             grade = "A"
//             A++
//             histogram.A++;
//         } else if (student.score >= 80) {
//             grade = "B"
//             B++
//             histogram.B++;
//         } else if (student.score >= 70) {
//             grade = "C"
//             C++
//             histogram.C++;
//         } else if (student.score >= 60) {
//             grade = "D"
//             D++
//             histogram.D++;
//         } else {
//             grade = "F"
//             F++
//             histogram.F++;
//         }
//     }
//     return histogram
// }
// console.log(countByGrade(students))


// // formatRow(student) — one aligned string using padEnd / padStart
// function formatRow(student) {
//     return `${"Student".padEnd(15)}${"Name".padEnd(13)}${"Score".padEnd(10)}${"Attendance".padEnd(15)}${"Grade".padEnd(10)}${"Status"}`
// }
// console.log(formatRow())





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