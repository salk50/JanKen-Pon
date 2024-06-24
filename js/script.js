const btn = document.querySelectorAll('button');
const playerchoice = document.querySelector('.playerchoice');
const computerchoice = document.querySelector('.compchoice');
const pp = document.querySelector('.player');
const cp = document.querySelector('.comp');
const score = document.querySelector('#scores');
let playerSelection='', computerSelection='';
var p = 0, c = 0;


const winstatement = document.createElement("p");

function getComputerChoice() {
    let a = "Rock", b = "Paper", c = "Scissors"
    switch (Math.round(Math.random()*(3-1)+1)){
        case 1:
            return a;
        case 2:
            return b;
        case 3:
            return c;
    }
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        winstatement.textContent = "The game is a tie";
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        c += 1;
        winstatement.textContent = "Computer wins!";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        p += 1;
        winstatement.textContent = "Player wins!";
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        p += 1;
        winstatement.textContent = "Player wins!";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        c += 1;
        winstatement.textContent = "Computer wins!";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        c += 1;
        winstatement.textContent = "Computer wins!";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        p += 1;
        winstatement.textContent = "Player wins!";
    }
    else {
        return console.error();
    }
    cp.textContent = `Computer: ${c}`;
    pp.textContent = `Player: ${p}`;
    playerchoice.textContent = `Player Chooses: ${playerSelection}`;
    computerchoice.textContent = `Computer Chooses: ${computerSelection}`;
    score.appendChild(winstatement);
}

btn.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(`clicked ${button.textContent} button`);
        playerSelection = button.textContent;
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(p);
        console.log(c);
        if(p==5 && c<5){
            alert(`Player Wins`);
            p = 0;
            c = 0;
        }
        else if(c==5 && p<5){
            alert(`Computer Wins`);
            p = 0;
            c = 0;
        }
        else if(c==5 && p==5){
            alert(`It's a Tie`);
            p = 0;
            c = 0;
        }
    });        
    console.log(playerSelection);
    console.log(computerSelection);
});