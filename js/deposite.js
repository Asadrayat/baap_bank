// add event listener to deposite button
document.getElementById('button_deposite').addEventListener('click', function () {
    // get deposit amount
const depositeField = document.getElementById('deposite_field');
const newDepositeAmountString = depositeField.value;
const newDepositeAmount = parseFloat(newDepositeAmountString);
//get current dipposite amount 
const depositeTotalField = document.getElementById('deposite_total');
const previousDepositTotalString = depositeTotalField.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);
// add total 
const currentDepositeTotal = previousDepositTotal + newDepositeAmount;
// set deposite total
depositeTotalField.innerText = currentDepositeTotal;
// get current total balance amount 
const balanceTotalElement = document.getElementById('balance_total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
const currentBalanceTotal =   previousBalanceTotal + newDepositeAmount;
// set total balance 
balanceTotalElement.innerText = currentBalanceTotal;
// clear deposit 
depositeField.value = '';
})