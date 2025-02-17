function donate(inputAmountId, currentAmountId, donationTitleId) {
  console.log(inputAmountId, currentAmountId);

  let newDonation = getValueById(inputAmountId);

  if (newDonation > 0 && typeof newDonation === "number") {
    let donation = addDonation(currentAmountId, newDonation);

    let donationFor = document.getElementById(donationTitleId).innerText;
    addTransactionInHistory(donation, donationFor);
  } else alert("Please input a valid input!");

  clearText(inputAmountId);
}
