const submit = document.getElementById("submitButton");
const answer = document.getElementById("answer")
const question = document.getElementById("question")
const correct = document.getElementById("correct")
const wrong = document.getElementById("wrong")
const answerContainer = document.getElementById("answerContainer")
const cAns = document.getElementById("correctAnswer")

submit.addEventListener("click", (e) => {
    var q = question.innerHTML;
    var a = answer.value;
    var cA = cAns.innerHTML;
    var aSplit = a.split(' ');
    var cASplit = cA.split(' ');
    var ansCounter = 0;
    if (cASplit.length > 1) {
        if (aSplit.length > 1) {
            aSplit.forEach((s) => {
                console.log(s.toLowerCase())
                let lowerA = cA.toLowerCase();
                if (lowerA.includes(s.toLowerCase()) && s.toLowerCase() != '') {
                    ansCounter += 1;
                }
            });
        } else {
            console.log(cA.toLowerCase());
            console.log(a.toLowerCase());
            let lowerA = cA.toLowerCase();
            if (lowerA.includes(a.toLowerCase())) {
                ansCounter += 1;
            }
        }
        if (ansCounter >= 1) {
            wrong.classList.add("hidden")
            correct.classList.remove("hidden");
            answerContainer.classList.remove("hidden")
        } else {
            correct.classList.add("hidden")
            wrong.classList.remove("hidden");
            answerContainer.classList.remove("hidden")
        }
    } else {
        console.log("1 word comparison")
        if (cA.toLowerCase === a.toLowerCase) {
            wrong.classList.add("hidden")
            correct.classList.remove("hidden");
        } else {
            correct.classList.add("hidden")
            wrong.classList.remove("hidden");
        }
    }
})