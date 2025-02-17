function getValueById(inputId) {
  let newDonationAmount = document.getElementById(inputId).value;
  return parseInt(newDonationAmount);
}

function addDonation(currentAmountId, donation) {
  let currentAmount = parseInt(
    document.getElementById(currentAmountId).innerText
  );

  let newAmount = currentAmount + donation;

  document.getElementById(currentAmountId).innerText = newAmount;

  updateTotalBalance(donation);

  return donation;
}

function updateTotalBalance(donation) {
  let totalBalance = document
    .getElementById("total-balance")
    .innerText.replace(/,/g, "");

  if (totalBalance >= donation) {
    let newBalance = parseInt(totalBalance) - donation;

    document.getElementById("total-balance").innerText =
      newBalance.toLocaleString();

    document.getElementById("my_modal_5").showModal();
  } else {
    alert("Your donation is exceeded the current necessary amount");
  }
}

function clearText(inputAmountId) {
  document.getElementById(inputAmountId).value = "";
}

function addTransactionInHistory(donation, donationFor) {
  console.log("New history is added: ", donation);

  let time = new Date();

  let newTransaction = document.createElement("div");
  newTransaction.classList.add(
    "max-w-screen-lg",
    "mx-auto",
    "px-8",
    "py-4",
    "border",
    "border-gray-400",
    "rounded-lg"
  );
  newTransaction.innerHTML = `<h2>${donation} Tk:  ${donationFor}</h2>
          <p>Date: ${time}</p>`;

  document.getElementById("history-container").appendChild(newTransaction);
  console.log(newTransaction);
}
