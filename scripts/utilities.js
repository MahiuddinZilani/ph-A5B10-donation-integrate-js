function getValueById(inputId) {
  let newDonationAmount = document.getElementById(inputId).value;
  return parseInt(newDonationAmount);
}

function clearText(inputAmountId) {
  document.getElementById(inputAmountId).value = "";
}

// update balance
function updateTotalBalance(currentAmountId, newDonation, donationTitleId) {
  let totalBalance = document
    .getElementById("total-balance")
    .innerText.replace(/,/g, "");

  if (totalBalance >= newDonation) {
    let newBalance = parseInt(totalBalance) - newDonation;

    document.getElementById("total-balance").innerText =
      newBalance.toLocaleString();

    addDonation(currentAmountId, newDonation, donationTitleId);

    document.getElementById("my_modal_5").showModal();
  } else {
    alert("Your donation is exceeded the current necessary amount");
  }
}

// add donation
function addDonation(currentAmountId, donation, donationTitleId) {
  let currentAmount = parseInt(
    document.getElementById(currentAmountId).innerText
  );

  let newAmount = currentAmount + donation;
  document.getElementById(currentAmountId).innerText =
    newAmount.toLocaleString();

  let donationFor = document.getElementById(donationTitleId).innerText;
  addTransactionInHistory(donation, donationFor);
}

// add transaction in history
function addTransactionInHistory(donation, donationFor) {
  console.log("New history is added: ", donation);

  let time = new Date();

  let newTransaction = document.createElement("div");
  newTransaction.classList.add(
    "max-w-screen-lg",
    "m-4",
    "px-8",
    "py-4",
    "border",
    "border-gray-400",
    "rounded-lg",
    "lg:mx-auto"
  );
  newTransaction.innerHTML = `<h2 class="text-lg font-semibold">${donation.toLocaleString()} Tk:  ${donationFor}</h2>
          <p>Date: ${time}</p>`;

  document.getElementById("history-container").appendChild(newTransaction);
  console.log(newTransaction);
}
