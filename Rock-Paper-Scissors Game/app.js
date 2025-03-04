let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Generate computer choice.
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    // Select options randomly.
    const randomIdx =  Math.floor(Math.random() * 3);         // Math.floor = To omit no.s after decimal point.     Math.random() * 3 = Randomly chooses index no. between 0 - 2.
    return options[randomIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win :) Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose :( ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const drawGame = () => {
    msg.innerText = "Game was a Draw!";
    msg.style.backgroundColor = "#081b31";
};

const playGame = (userChoice) => {

    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});