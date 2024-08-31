document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guessInput');
 const submitBtn = document.getElementById('submitGuess');
    const feedback = document.getElementById('feedback');
 const attempts = document.getElementById('attempts');
    const restartBtn = document.getElementById('restartGame');

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attemptCount = 0;

    function resetGame() {
     randomNumber = Math.floor(Math.random() * 100) + 1;
        attemptCount = 0;
        feedback.textContent = '';
 attempts.textContent = 'Attempts: 0';
 guessInput.value = '';
        restartBtn.classList.add('hidden');
    submitBtn.disabled = false;
    }

    function validateInput(guess) {
        if (!guess) {
          feedback.textContent = 'Please enter a number!';
      return false;
        } else if (guess < 1 || guess > 100) {
         feedback.textContent = 'Guess must be between 1 and 100!';
         return false;
        }
        return true;
    }

    function handleGuess() {
        const userGuess = parseInt(guessInput.value, 10);

        if (!validateInput(userGuess)) return;

        attemptCount++;
        attempts.textContent = `Attempts: ${attemptCount}`;

  if (userGuess === randomNumber) {
            feedback.textContent = `Correct! You guessed the number in ${attemptCount} attempts.`;
            submitBtn.disabled = true;
            restartBtn.classList.remove('hidden');
 } else if (userGuess < randomNumber) {
            feedback.textContent = 'Too low, try again';
      } else {
              feedback.textContent = 'Too high, try again';
        }
    guessInput.value = '';
        guessInput.focus();
    }

 submitBtn.addEventListener('click', handleGuess);
    restartBtn.addEventListener('click', resetGame);

    guessInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleGuess();
    });
});