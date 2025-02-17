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

// <!-- Open the modal using ID.showModal() method -->

{
  /* <button class="btn" onclick="my_modal_5.showModal()">open modal</button> */
}
