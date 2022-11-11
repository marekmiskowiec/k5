function playGame(playerInput) {
    clearMessages();
    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    function displayResult(argComputerMove, argPlayerMove) {
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('Przegrywasz!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
            printMessage('Remis!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Przegrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Wygrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
            printMessage('Remis!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Przegrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Wygrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
            printMessage('Remis!');
        } else {
            printMessage("Nie znam takiego ruchu :(");
        }
    }
    //let playerMove = 'nieznany ruch';
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    let computerMove = getMoveName(randomNumber);
    let playerMove = getMoveName(playerInput);
    displayResult(computerMove, playerMove);



}


document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
});