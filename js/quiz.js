// quiz.js
function checkAnswer(correctAnswer) {
    const selected = document.querySelector('input[name="quiz"]:checked');
    const result = document.getElementById('quiz-result');
    
    if (!selected) {
        result.textContent = "Please select an option!";
        result.style.color = "orange";
        return;
    }

    if (selected.value === correctAnswer) {
        result.textContent = "Correct!";
        result.style.color = "lightgreen";
    } else {
        result.textContent = `Incorrect! The correct answer is ${correctAnswer}.`;
        result.style.color = "red";
    }
}
