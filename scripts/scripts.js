function donate(inputAmountId, currentAmountId, donationTitleId) {
  let newDonation = getValueById(inputAmountId);

  if (newDonation > 0 && typeof newDonation === "number") {
    updateTotalBalance(currentAmountId, newDonation, donationTitleId);
  } else alert("Please input a valid input!");

  clearText(inputAmountId);
}
