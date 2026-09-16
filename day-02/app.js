// 6.1 Score checker
const scoreInput = document.getElementById("scoreInput")
const checkBtn = document.getElementById("checkBtn")
const clearBtn = document.getElementById("clearBtn")
const theList = document.getElementById("theList")

const history = [] // there is a notice here as if we put this inside addEventListener,
                // it will create a new empty array,
                // but when we put it outside, it gives us the full history array
checkBtn.addEventListener("click", () => {
    const score = Number(scoreInput.value)
    
    if (Number.isNaN(score) || scoreInput.value === "" || score > 100 || score < 0) {
        console.log("Please enter a number between 0 and 100")
        return;
    } else {
        let grade;
        if (score >= 90) {
            grade = "A"
        } else if (score >= 80) {
            grade = "B"
        } else if (score >= 70) {
            grade = "C"
        } else if (score >= 60) {
            grade = "D"
        } else { // if it's not in the dedicated range of grades
            grade = "F"
        }

        history.push({
            score: score,
            grade: grade,
        })
        console.log(history);
        console.log(grade)

        theList.innerHTML = "";
        for (const result of history) {
            theList.innerHTML += `<li>Score: ${result.score} - Grade: ${result.grade}</li>`;
        }

        clearBtn.addEventListener("click", () => {
            history.length = 0
            theList.innerHTML = ""
        })



    }
    
    // console.log(score)


        //     theList += grade
        // }
        // console.log(theList)
    }
)
