var balance = 500.00;
var checkBalance = true;
var isActive = false;

function makeDeposit() {
    var deposit = parseFloat(prompt("Please enter your deposit"));
    if (isNaN(deposit) || deposit === '') {
        alert("Please enter a real number.");
        makeDeposit();
    }
    balance += deposit;
}

function makeWithdrawl() {
    var withdrawl = parseFloat(prompt("How much would you like to withdraw?"));
    if (isNaN(withdrawl) || deposit === '') {
        alert("Please enter a real number.");
        makeWithdrawl();
    }
    balance -= withdrawl;
}

function checkBalance() {
    if (!checkBalance) {
        console.log("Thank you. Have a nice day");
    } else if (isActive) {
        alert("Current Balance is " + balance.toFixed(2));
    }
}

// I don't have a system to use previously-created booleans. Gonna have to keep this simple
function atm() {
    var atmInteraction = parseFloat(prompt(
        "Please choose between:\n1. Check Balance\n2. Deposit\n3. Withdrawl\n(Please input a number associated with your desired action"));
}
// var bool = 'Depot' = 'depot';
// console.log(bool);

atm();

// Original
if (!checkBalance) {
  console.log("Thank you. Have a nice day");
} else if (isActive && balance > 0){
    console.log("Your balance is $" + balance.toFixed(2) + ".");
} else if (!isActive) {
    console.log("Your account is no longer active.");
} else if (balance === 0){
    console.log("Your account is empty.");
} else {
    console.log("Your balance is negative. Please contact bank.");
}