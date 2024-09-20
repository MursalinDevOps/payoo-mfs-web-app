// ADD MONEY FORM INIT
const addMoneyForm = document.getElementById("add-money-form");
const BtnAddMoney = document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    addMoneyForm.classList.remove("hidden");
  });
// WITHDRAW FORM INIT
const withdrawForm = document.getElementById("withdraw-form");
const btnWithdraw = document
  .getElementById("btn-withdraw")
  .addEventListener("click", function (event) {
    withdrawForm.classList.remove("hidden");
  });

// MAIN OPERATIONS
document.getElementById('add-money-btn').addEventListener('click', function(event){
  event.preventDefault();
  // INITIAL BALANCE
  const availableBalanceStr = document.getElementById('available-balance').innerText;
  const availableBalance = parseFloat(availableBalanceStr); // Converted string to number
  // ADD MONEY AMOUNT
  const addMoneyAmountStr = document.getElementById('add-money-amount').value;
  const addMoneyAmount = parseFloat(addMoneyAmountStr);
  
// PIN
  const addMoneyPin = document.getElementById('add-money-pin').value;
// VALIDATION
if (addMoneyPin === '9332') {
  // NEW/UPDATED BALANCE
  const newBalance = availableBalance + addMoneyAmount;
  document.getElementById('available-balance').innerText = newBalance;
 
} else {
  alert('Your Pin is incorrect :( Try again.')
}
})
