function getComputerChoice() {
    let a = "Rock", b = "Paper", c = "Scissors"
    switch (Math.round(Math.random()*(3-1)+1)){
        case 1:
            return a;
            print(a);
        case 2:
            return b;
            print(b);
        case 3:
            return c;
            print(c);
    }
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "The game is a tie";
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        c = 1;
        return "Computer wins!";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        p = 1;
        return "Player wins!";
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        p = 1;
        return "Player wins!";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        c = 1;
        return "Computer wins!";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        c = 1;
        return "Computer wins!";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        p = 1;
        return "Player wins!";
    }
    else {
        return console.error();
    }
}

var p = 0, c = 0;
function playGame(numberGames) {
    let playerTAB = 0, compTAB = 0;
    for (let x = 0; x < numberGames; x++) {
        p = 0, c = 0;
        const playerSelection = prompt("Rock, Paper or Scissors; Choose!: ");
        const computerSelection = getComputerChoice();
        console.log("player chooses: " + playerSelection);
        console.log("computer chooses: " + computerSelection);
        playRound(playerSelection, computerSelection);
        if (p > c){
            playerTAB += p;
        }
        else {
            compTAB += c;
        }
    }
    console.log(compTAB);
    console.log(playerTAB);
    let comRes = "Computer: " + compTAB;
    let playRes = "Player: " + playerTAB;
    console.log(comRes);
    console.log(playRes);
    if (playerTAB>compTAB){
        alert("You win!");
    }
    else if (compTAB>playerTAB) {
        alert("You fkn' loser!");
    }
    else {
        alert("It's a tie, dammit!!!!")
    }
}

playGame(5);
