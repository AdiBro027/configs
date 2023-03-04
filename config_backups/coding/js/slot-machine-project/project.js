// 1. How much money the user has to play with
// 2. Determine number of lines to bet on
// 3. Collect bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user money if they won or take money of user lost
// 7. Play again or handle a situation in which the user doesnt has money


// step 1

const prompt = require("prompt-sync")();

// There are two ways of defining a function

// function deposit() {
//   do something
// }
// deposit()

// Modern Way ->

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try again.");
    } else {
      return numberDepositAmount;
    }
  }
};


const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines you want to bet on (1-3) >> ");
        const numberOfLines = parseInt(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines! Try Again!");
        } else {
            console.log("All Good");
        }
    }
    
}


const finalDepositAmount = deposit();
getNumberOfLines()
