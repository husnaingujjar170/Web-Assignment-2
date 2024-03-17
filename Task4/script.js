$(document).ready(function() {
    let userScore = 0;
    let computerScore = 0;
    let continueGame = true;

    function playGame(userChoice) {
        if (!continueGame) return;

        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        if (!choices.includes(userChoice)) {
            alert("Invalid choice. Please choose rock, paper, or scissors.");
            return;
        }

        let result;
        if (userChoice === computerChoice) {
            result = 'Tied';
        } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
                   (userChoice === 'paper' && computerChoice === 'rock') ||
                   (userChoice === 'scissors' && computerChoice === 'paper')) {
            result = 'User Wins';
            userScore++;
        } else {
            result = 'Computer Wins';
            computerScore++;
        }

        $('#result-text').text(result);
        $('#user-score').text(`User: ${userScore}`);
        $('#computer-score').text(`Computer: ${computerScore}`);

        if (userScore >= 5 || computerScore >= 5) {
            continueGame = false;
            $('#continue-msg').show();
            $('#continue-msg').html('Do you want to continue? <button id="yes">Yes</button><button id="no">No</button>');
        }
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

    $(document).on('click', '#yes', function() {
        $('#continue-msg').hide();
        if (!continueGame) {
            userScore = 0;
            computerScore = 0;
            $('#result-text').text(''); 
            $('#user-score').text(`User: ${userScore}`);
            $('#computer-score').text(`Computer: ${computerScore}`);
            continueGame = true;
        }
    });

    $(document).on('click', '#no', function() {
        window.close();
    });
});
