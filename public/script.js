const throwAwayBtn = document.getElementById('throw-away-btn');
const userInput = document.getElementById('user-input');
const problemOutput = document.getElementById('problem-output');

throwAwayBtn.addEventListener('click', () => {
    const userText = userInput.value.trim();

    if (userText === '') return;  // Do nothing if the input is empty

    // Set the text content and make it visible at the center
    problemOutput.textContent = userText;
    problemOutput.style.visibility = 'visible';  // Ensure visibility

    // Hide the input and button while the animation is running
    userInput.style.visibility = 'hidden';
    throwAwayBtn.style.visibility = 'hidden';

    // Add the shrinking class after 1.5 seconds of being visible
    setTimeout(() => {
        problemOutput.classList.add('shrinking');
    }, 1500);  // 1.5-second delay before shrinking begins

    // Reset after the animation ends (explosion included)
    setTimeout(() => {
        problemOutput.textContent = '';  // Clear the text
        problemOutput.classList.remove('shrinking');  // Remove the shrinking class
        problemOutput.style.visibility = 'hidden';  // Hide the output again

        // Make the input and button visible again
        userInput.style.visibility = 'visible';
        throwAwayBtn.style.visibility = 'visible';

        // Clear the input field for the next interaction
        userInput.value = '';
    }, 6000);  // Match the duration of the entire animation (5s + 1s explosion)
});