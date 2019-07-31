var balance = 500.00;
var checkBalance = true;
var isActive = false;

var testNum = parseFloat(prompt("test: enter a number"));
if (isNaN(testNum) || testNum === '') {
    alert("Please enter a real number thank you very much");
}

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