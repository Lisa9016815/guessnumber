let secretNumber = Math.floor(Math.random() * 20) + 1;
let attemptsLeft = 5;
let gameOver = false;


function checkGuess() {
    if (gameOver) {
        return; // se il gioco è finito, esci dalla funzione
    }

    document.getElementById("start-gif").style.display = "none";

    let guessInput = document.getElementById("guess")
    let resultDiv = document.getElementById("result");
    let gifContainer = document.getElementById("gif-container");
    let gifCorrect = document.getElementById("gif-correct");
    let gifClose = document.getElementById("gif-close");
    let gifNear = document.getElementById("gif-near");
    let gifLose = document.getElementById("gif-lose");
    // let gifIntro = document.getElementById("start-gif")
    let attemptsDiv = document.getElementById("attempts");
    let attemptsWonDiv = document.getElementById("attempts-won");
    let startBtn = document.getElementById("start-btn");
    let restartBtn = document.getElementById("restart-btn");


    const userGuess = parseInt(guessInput.value);
    const differenze = Math.abs(userGuess - secretNumber);

    attemptsLeft--;
    attemptsDiv.textContent = `Tentativi rimasti: ${attemptsLeft}`;

    if (attemptsLeft === 0 && (isNaN(userGuess) || userGuess < 1 || userGuess > 20)) {
        resultDiv.textContent = "Hai esautiro i tentativi. Ritenta";
        gifLose.style.display = "block";
        gifClose.style.display = "none";
        gifCorrect.style.display = "none";
        gifNear.style.display = "none";
        startBtn.style.display = "none";
        gifContainer.style.display = "block";
        document.getElementById("restart-btn").style.display = "block";
        document.getElementById("guess").disabled = true;
        gameOver = true; // imposta il gioco come finito   


    } else if (isNaN(userGuess) || userGuess < 1 || userGuess > 20) {
        resultDiv.textContent = "Inserisci un numero valido tra 1 e 20";

        gifClose.style.display = "block";
        gifContainer.style.display = "block";

        // Nascondi le GIF
        gifCorrect.style.display = "none";
        gifNear.style.display = "none";
        gifLose.style.display = "none";

        // Reset dell'input
        guessInput.value = '';


    } else if (userGuess === secretNumber) {
        resultDiv.textContent = "Congratulazioni! hai indovinato"
        gifCorrect.style.display = "block"
        gifContainer.style.display = "block";

        // nascondo le altre gif
        gifClose.style.display = "none";
        gifNear.style.display = "none";
        gifLose.style.display = "none";
        startBtn.style.display = "none";
        restartBtn.style.display = "block";


        // mostro il numero di tentativi quando si vince
        attemptsDiv.style.display = "none";
        attemptsWonDiv.textContent = `Hai vinto con ${5 - attemptsLeft} tentativi!`;
        attemptsWonDiv.style.display = "block";
        gameOver = true; // imposta il gioco come finito

    } else if (attemptsLeft === 0 && differenze <= 2) {
        resultDiv.textContent = "Hai esautiro i tentativi. Ritenta";
        gifLose.style.display = "block";
        gifClose.style.display = "none";
        gifCorrect.style.display = "none";
        gifNear.style.display = "none";
        startBtn.style.display = "none";
        gifContainer.style.display = "block";
        document.getElementById("restart-btn").style.display = "block";
        document.getElementById("guess").disabled = true;
        gameOver = true; // imposta il gioco come finito   

    } else if (differenze <= 2) {
        resultDiv.textContent = "Calma, ti stai avvicinando";
        gifNear.style.display = "block";
        gifContainer.style.display = "block";

        // Nascondi le GIF
        gifClose.style.display = "none";
        gifCorrect.style.display = "none";
        gifLose.style.display = "none";

        // Reset dell'input
        guessInput.value = '';



    } else if (attemptsLeft === 0) {
        resultDiv.textContent = "Hai esautiro i tentativi. Ritenta più tardi";
        gifLose.style.display = "block";
        gifClose.style.display = "none";
        gifCorrect.style.display = "none";
        gifNear.style.display = "none";
        startBtn.style.display = "none";
        gifContainer.style.display = "block";
        document.getElementById("restart-btn").style.display = "block";
        document.getElementById("guess").disabled = true;
        gameOver = true; // imposta il gioco come finito

    } else {
        resultDiv.textContent = "Sbagliato. Prova di nuovo!";
        gifClose.style.display = "block";
        gifContainer.style.display = "block";

        // Nascondi le GIF
        gifCorrect.style.display = "none";
        gifNear.style.display = "none";
        gifLose.style.display = "none";

        // Reset dell'input
        guessInput.value = '';
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
}

function playAgain() {
    location.reload(); // ricarica la pagina
}
console.log(secretNumber);