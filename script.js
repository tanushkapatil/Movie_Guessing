// Variables to store movie and guess
let favMovie = "";
let isMovieSet = false;

// Get DOM elements
const setupDiv = document.getElementById('setup');
const guessingDiv = document.getElementById('guessing');
const movieInput = document.getElementById('movie');
const guessInput = document.getElementById('guess');
const messagePara = document.getElementById('message');
const setMovieBtn = document.getElementById('setMovieBtn');
const guessBtn = document.getElementById('guessBtn');
const quitBtn = document.getElementById('quitBtn');

// Function to set the favorite movie
setMovieBtn.addEventListener('click', () => {
    favMovie = movieInput.value.trim().toLowerCase();
    if (favMovie) {
        // Hide setup section and show guessing section
        setupDiv.style.display = 'none';
        guessingDiv.style.display = 'block';
    } else {
        alert('Please enter a movie name!');
    }
});

// Function to handle guessing
guessBtn.addEventListener('click', () => {
    const guess = guessInput.value.trim().toLowerCase();
    
    if (guess === favMovie) {
        messagePara.textContent = "CONGRATS!! You guessed it right!";
        messagePara.classList.remove('fail');
        messagePara.classList.add('success');
    } else {
        messagePara.textContent = "Wrong guess. Try again!";
        messagePara.classList.remove('success');
        messagePara.classList.add('fail');
    }
});

// Function to quit the game
quitBtn.addEventListener('click', () => {
    messagePara.textContent = "Game over! You chose to quit.";
    messagePara.classList.remove('success');
    messagePara.classList.add('fail');
    guessInput.disabled = true;
    guessBtn.disabled = true;
});
