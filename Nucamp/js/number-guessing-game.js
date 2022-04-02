function runGame() {
    //generate random number
    const randomNumber = Math.random() * 100;
    //convert random number to integer
    const randomInteger = Math.floor(randomNumber);
    //because Math.floor rounds down, add 1 to ensure random number is between 1 and 100
    const target = randomInteger + 1;

    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;

    //prompt the user for their guess
    do {
        guessString = prompt('I am thinking of a number in the range 1 to 100.\n\nWhat is the number?');
        guessNumber = +guessString;
        numTries += 1;
        correct = checkGuess(guessNumber, target);
    } while (!correct);  //this loop will run as long as the value of correct is not true

    alert('You got it! The number was ' + target + '.\n\nIt took you ' + numTries + ' tries to guess correctly.');
}

function checkGuess(guessNumber, target) {
    let correct = false;
    
    //check if user input is a number
    if (isNaN(guessNumber)) {
        alert('You have not entered a number.\n\nPlease enter a number in the 1-100 range.');
    }
    //check if user input is within the range we want (1-100)
    else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert('Please enter an integer in the 1-100 range.');
    }
    //check if user input is greater than the random number generated
    else if (guessNumber > target) {
        alert('Your number is too large!');
    }
    //check if user input is less than the random number generated
    else if (guessNumber < target) {
        alert('Your number is too small!');
    }
    //the user input matches the random number generated
    else {
        correct = true;
    }
    //send the value of correct back to the runGame function
    return correct;
}