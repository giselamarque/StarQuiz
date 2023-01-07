const form = document.getElementById("quiz-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let score = 0;
  // Check the answers to the first question
  const q1 = form.elements.q1;
  for (let i = 0; i < q1.length; i++) {
    if (q1[i].checked && q1[i].value == "Paris") {
      score++;
    }
  }
  // Check the answers to the second question
  const q2 = form.elements.q2;
  for (let i = 0; i < q2.length; i++) {
    if (q2[i].checked && q2[i].value == "Rome") {
      score++;
    }
  }
    // Check the answers to the third question
    const q3 = form.elements.q3;
    for (let i = 0; i < q3.length; i++) {
        if (q3[i].checked && q3[i].value == "London") {
            score++;
        }
    }
    // Check the answers to the fourth question
    const q4 = form.elements.q4;
    for (let i = 0; i < q4.length; i++) {
        if (q4[i].checked && q4[i].value == "Berlin") {
            score++;
        }
    }
    // Check the answers to the fifth question
    const q5 = form.elements.q5;
    for (let i = 0; i < q5.length; i++) {
        if (q5[i].checked && q5[i].value == "Paris") {
            score++;
        }
    }
  // Add checks for the rest of the questions
  // Display the results
  const results = document.getElementById("results");
  results.style.display = "block";
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = `You scored ${score} out of 5`;
});

