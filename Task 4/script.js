$(document).ready(function() {
    let userScore = 0;
    let computerScore = 0;

    function playGame(userChoice) {
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        if (!choices.includes(userChoice)) {
            alert("Invalid choice. Please choose rock, paper, or scissors.");
            return;
        }

        let result;
        if (userChoice === computerChoice) {
            result = 'Tie!';
        } else if (userChoice === 'rock') {
            if (computerChoice === 'scissors') {
                result = 'You Win!';
                userScore++;
            } else {
                result = 'You Lose!';
                computerScore++;
            }
        } else if (userChoice === 'paper') {
            if (computerChoice === 'rock') {
                result = 'You Win!';
                userScore++;
            } else {
                result = 'You Lose!';
                computerScore++;
            }
        } else if (userChoice === 'scissors') {
            if (computerChoice === 'paper') {
                result = 'You Win!';
                userScore++;
            } else {
                result = 'You Lose!';
                computerScore++;
            }
        }

        $('#result-text').text(result);
        $('#user-score').text(`User: ${userScore}`);
        $('#computer-score').text(`Computer: ${computerScore}`);
    }

    $('#rock').click(function() {
        playGame('rock');
    });

    $('#paper').click(function() {
        playGame('paper');
    });

    $('#scissors').click(function() {
        playGame('scissors');
    });
});

