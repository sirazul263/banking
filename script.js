let balance = 2300;
document.getElementById("totalAmount").innerText = balance;
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const logArea = document.getElementById("login-area");
  logArea.style.display = "none";
  const transArea = document.getElementById("transaction-area");
  transArea.style.display = "block";
});
//Deposit
const btnDeposit = document.getElementById("deposit");
btnDeposit.addEventListener("click", function () {
  const depositAmount = Number(document.getElementById("depositAmount").value);
  const currentDeposit = Number(
    document.getElementById("deposit-balance").innerText
  );
  const total = depositAmount + currentDeposit;
  document.getElementById("deposit-balance").innerText = total;
  balance += depositAmount;
  document.getElementById("totalAmount").innerText = balance;
});

//Withdraw
const btnWithdraw = document.getElementById("withdraw");
btnWithdraw.addEventListener("click", function () {
  const withdrawAmount = Number(
    document.getElementById("withdrawAmount").value
  );
  const currentWithdraw = Number(
    document.getElementById("withdraw-balance").innerText
  );
  const totalWithdraw = withdrawAmount + currentWithdraw;
  document.getElementById("withdraw-balance").innerText = totalWithdraw;
  balance -= withdrawAmount;
  document.getElementById("totalAmount").innerText = balance;
});
