var balance = 500.00;
// var checkBalance = true;
// var isActive = true;
let exitATM = false;

function makeDeposit() {
    var deposit = parseFloat(prompt("Please enter your deposit"));
    if (isNaN(deposit) || deposit === '') {
        alert("Please enter a real number.");
        makeDeposit();
    }
    balance += deposit;
    atm();
}

function makeWithdrawl() {
    var withdrawl = parseFloat(prompt("How much would you like to withdraw?"));
    if (isNaN(withdrawl) || withdrawl === '') {
        alert("Please enter a real number.");
        makeWithdrawl();
    }
    balance -= withdrawl;
    atm();
}

// It was not being viewed as a function when I named it checkBalance(), but this is fine...
function viewBalance() {
    alert("Current Balance is " + balance.toFixed(2));
    atm();
}

// TODO finish this function
function exitTransaction() {
    exitATM = true;
    if (exitATM) {
        window.close();
    } else {
        alert("Improper exit attempted. Returning to main menu.");
        atm();
    }
}

// I don't have a system to use previously-created booleans. Gonna have to keep this simple
function atm() {
    var atmInteraction = parseFloat(prompt(
        "Please choose between:\n1. Check Balance\n2. Deposit\n3. Withdrawl\n4. Exit\n(Please input a number associated with your desired action"));
    if (atmInteraction < 1 || atmInteraction > 4) {
        alert("Please select a valid option.");
        atm();
    } else if (atmInteraction === 1) {
        viewBalance();
    } else if (atmInteraction === 2) {
        makeDeposit();
    } else if (atmInteraction === 3) {
        makeWithdrawl();
    } else {
        exitTransaction();
    }
}
// var bool = 'Depot' = 'depot';
// console.log(bool);

atm();

// Original
// if (!checkBalance) {
//   console.log("Thank you. Have a nice day");
// } else if (isActive && balance > 0){
//     console.log("Your balance is $" + balance.toFixed(2) + ".");
// } else if (!isActive) {
//     console.log("Your account is no longer active.");
// } else if (balance === 0){
//     console.log("Your account is empty.");
// } else {
//     console.log("Your balance is negative. Please contact bank.");
// }