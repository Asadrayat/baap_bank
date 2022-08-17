// add event listener to withdraw button
document.getElementById('button_withdraw').addEventListener('click', function () {
    // get Withdraw amount
const withdrawField = document.getElementById('withdraw_field');
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);
//get current dipposite amount 
const withdrawTotalField = document.getElementById('withdraw_total');
const previousWithdrawTotalString = withdrawTotalField.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
// add total 
const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
// set withdraw total
withdrawTotalField.innerText = currentWithdrawTotal;
// get current total balance amount 
const balanceTotalElement = document.getElementById('balance_total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
const currentBalanceTotal =   previousBalanceTotal - newWithdrawAmount;
// set total balance 
balanceTotalElement.innerText = currentBalanceTotal;
// clear Withdraw 
withdrawField.value = '';
})