const throwAwayBtn = document.getElementById('throw-away-btn');
const userInput = document.getElementById('user-input');
const problemOutput = document.getElementById('problem-output');

throwAwayBtn.addEventListener('click', () => {
    const userText = userInput.value;
    if (userText.trim() === '') return;

    problemOutput.textContent = userText;
    problemOutput.classList.remove('hidden');

    // Shrink and disappear effect
    problemOutput.style.fontSize = '24px';
    problemOutput.style.opacity = '1';

    setTimeout(() => {
        problemOutput.style.fontSize = '0px';
        problemOutput.style.opacity = '0';
    }, 100);

    // Hide after animation
    setTimeout(() => {
        problemOutput.classList.add('hidden');
        userInput.value = '';  // Clear input after animation
    }, 5000);
});