let score = 0; // Initialize score variable

// Function to check the user's answer and update the score
function checkAnswer(questionNumber, selectedOption) {
  const correctAnswers = {
    1: 'A',  // Correct answer for Question 1
    2: 'B',  // Correct answer for Question 2
    3: 'C',  // Correct answer for Question 3
    4: 'B',  // Correct answer for Question 4
    5: 'B',  // Correct answer for Question 5
  };

  const feedbackElement = document.getElementById('feedback' + questionNumber);
  
  if (selectedOption === correctAnswers[questionNumber]) {
    feedbackElement.innerHTML = "Correct!";
    feedbackElement.style.color = "green";
    score++; // Increment score if answer is correct
  } else {
    feedbackElement.innerHTML = "Incorrect. Try again.";
    feedbackElement.style.color = "red";
  }

  // Update score dynamically after each answer
  document.getElementById('score').innerHTML = `Score: ${score}/5`;
}

// Function to display final score when quiz is submitted
function showFinalScore() {
  alert("Your final score is: " + score + "/5");
}
