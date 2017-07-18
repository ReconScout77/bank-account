function BankAccount(user, balance) {
  this.user = user;
  this.balance = balance;
}

function addDeposit(balance, deposit) {
  return balance += deposit;
}

function addWithdrawal(balance, withdrawal) {
  return balance -= withdrawal;
}

var balance;


$(function() {
  $("#register").submit(function(event) {
    event.preventDefault();

    var inputName = $("#name").val();
    var inputBalance = parseInt($("#initDeposit").val());
    var newAccount = new BankAccount(inputName, inputBalance);
    balance = newAccount.balance;
    $("output").text(balance);

    $("#name").val("");
    $("#initDeposit").val("");
    
  });
  $("#deposit").submit(function(event) {
    event.preventDefault();

    var inputDeposit = parseInt($("#depositAmnt").val());

    balance = addDeposit(balance, inputDeposit);

    $("output").text(balance);

    $("#depositAmnt").val("");
  });
  $("#withdrawal").submit(function(event) {
    event.preventDefault();

    var inputWithdrawal = parseInt($("#withdrawalAmnt").val());

    balance = addWithdrawal(balance, inputWithdrawal);

    $("output").text(balance);

    $("#withdrawalAmnt").val("");
  });
});
