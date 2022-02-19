function computerPlay() {
    const data = [
        ['rock', 1],
        ['paper', 1],
        ['scissors', 1],
    ];

    let total = 0;
    for (let i = 0; i < data.length; i++) {
        total += data[i][1];
    }

    const threshold = Math.random() * total;
    console.log(threshold);
    total = 0;
    for (let i = 0; i < data.length - 1; i++) {
        total += data[i][1];

        if (total >= threshold) {
            return data[i][0];
        }
    }

    return data[data.length - 1][0];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    do {
        playerSelection = window.prompt("Rock, Paper, Scissors?").toLowerCase();
    }
    while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors");
    

    if (playerSelection == "scissors" & computerSelection == "rock") {
        result = "You Lose!";
    } else if (playerSelection == "rock" & computerSelection == "paper") {
        result = "You Lose!"
    } else if (playerSelection == "rock" & computerSelection == "scissors") {
        result = "You Win!";
    } else if (playerSelection == "paper" & computerSelection == "rock") {
        result = "You Win!";
    } else if (playerSelection == "scissors" & computerSelection == "paper") {
        result = "You Win!";
    } else if (playerSelection == "paper" & computerSelection == "scissors") {
        result = "You Lose!";
    } else {
        result = "Tie!";
    };

    console.log(computerSelection);
    return result;
    
}

function game() {
    let score = 0;
    let tieScore = 0;
    let winner = "You Win!";
    let loser = "You Lose!";
    let tie = "Tie!";

    for (let i = 0; i < 5; i++) {
        playRound()
        if (result == "You Win!") {
            score = score + 1;
            console.log(result);
        } else if (result == "Tie!") {
            tieScore = tieScore + 1;
            console.log("Tie!");
        } else {
            console.log(result);
        }
    }
    if (score >= 3) {
        return winner;
    } else if (tieScore > 2) {
        return tie;
    } else if (tieScore == 2 & score < 2) {
        return tie;
    } else {
        return loser;
    }
    
}