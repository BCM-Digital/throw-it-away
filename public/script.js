const throwAwayBtn = document.getElementById('throw-away-btn');
const userInput = document.getElementById('user-input');
const problemOutput = document.getElementById('problem-output');

throwAwayBtn.addEventListener('click', () => {
    const userText = userInput.value.trim();

    if (userText === '') return;  // Do nothing if the input is empty

    // Set the text content and make the problem output visible
    problemOutput.textContent = userText;
    problemOutput.style.visibility = 'visible';

    // Hide the input and button while the animation is running
    userInput.style.visibility = 'hidden';
    throwAwayBtn.style.visibility = 'hidden';

    // Trigger the shrinking and fading animation
    problemOutput.classList.add('shrinking');

    // Reset after 5 seconds (once animation is done)
    setTimeout(() => {
        problemOutput.textContent = '';  // Clear the text
        problemOutput.classList.remove('shrinking');  // Remove the shrinking class
        problemOutput.style.visibility = 'hidden';  // Hide the output again

        // Make the input and button visible again
        userInput.style.visibility = 'visible';
        throwAwayBtn.style.visibility = 'visible';

        // Clear the input field for the next interaction
        userInput.value = '';
    }, 5000);  // Match the duration of the CSS animation
});