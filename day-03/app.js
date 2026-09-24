// pure logic
function isValidScore(score) {
    return typeof score === "number" && !Number.isNaN(score) && score >= 0 && score <= 100;
}


function letterGrade(score) {
    if (score >= 90) {
        return "A";
    }

    if (score >= 80) {
        return "B";
    }

    if (score >= 70) {
        return "C";
    }

    if (score >= 60) {
        return "D";
    }

    return "F";
}


function average(scores) {
    if (scores.length === 0) {
        return 0;
    }

    let total = 0;

    for (const score of scores) {
        total += score;
    }

    return total / scores.length;
}





// DOM handling
const students = [];

const nameInput = document.querySelector("#studentName");
const scoreInput = document.querySelector("#studentScore");
const addButton = document.querySelector("#addButton");
const clearButton = document.querySelector("#clearButton");
const studentList = document.querySelector("#studentList");
const summary = document.querySelector("#summary");

function render() {
    studentList.innerHTML = "";

    for (const student of students) {
        const li = document.createElement("li");

        li.textContent = `${student.name} - ${student.score} - ${letterGrade(student.score)}`;

        studentList.appendChild(li);
    }

    const scores = [];

    for (const student of students) {
        scores.push(student.score);
    }

    summary.textContent = `Students: ${students.length} | Average: ${average(scores).toFixed(1)}`;
}

function handleAdd() {
    const name = nameInput.value.trim();
    const score = Number(scoreInput.value);

    if (name === "") {
        alert("Please enter a student name.");
        return;
    }

    if (scoreInput.value.trim() === "") {
        alert("Please enter a score.");
        return;
    }

    if (!Number.isFinite(score)) {
        alert("Please enter a valid number.");
        return;
    }

    if (!isValidScore(score)) {
        alert("Please enter a score between 0 and 100.");
        return;
    }

    students.push({
        name: name,
        score: score
    });

    console.log(students);

    render();
}

function handleClear() {
    students.length = 0;
    render();
}

addButton.addEventListener("click", handleAdd);
clearButton.addEventListener("click", handleClear);