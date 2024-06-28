const btn = document.querySelectorAll('button');
const playerchoice = document.querySelector('.playerchoice');
const computerchoice = document.querySelector('.compchoice');
const pp = document.querySelector('.player');
const cp = document.querySelector('.comp');
const score = document.querySelector('#scores');
let playerSelection='', computerSelection='';
var p = 0, c = 0;

const div1 = document.querySelector('#pc');
const div2 = document.querySelector('#cc');

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
    };
};


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    playerchoice.textContent = `Player Chooses: ${playerSelection}`;
    computerchoice.textContent = `Computer Chooses: ${computerSelection}`;
    if (playerSelection == computerSelection) {
        winstatement.textContent = "The round is a tie";
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

    if(playerSelection=="rock"){
        div1.src = './img/Rock.png';
    }
    else if(playerSelection=="paper"){
        div1.src = './img/Paper.png';
    }
    else if(playerSelection=="scissors"){
        div1.src = './img/Scissors.png';
    }

    if(computerSelection=="rock"){
        div2.src = './img/crock.png';
    }
    else if(computerSelection=="paper"){
        div2.src = './img/cpaper.png';
    }
    else if(computerSelection=="scissors"){
        div2.src = './img/cscissors.jpg';
    }
    cp.textContent = `Computer: ${c}`;
    pp.textContent = `Player: ${p}`;
    winstatement.style.cssText = "display: flex; justify-content: center; color: white; font-size: 25px";
    document.body.appendChild(winstatement);
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
            p = 0;
            c = 0;
            alert(`Player Wins`);
        }
        else if(c==5 && p<5){
            p = 0;
            c = 0;
            alert(`Computer Wins`);
        }
        else if(c==5 && p==5){
            p = 0;
            c = 0;
            alert(`It's a Tie`);
        }
    });        
    console.log(playerSelection);
    console.log(computerSelection);
});