function donate(inputAmountId, currentAmountId) {
  console.log(inputAmountId, currentAmountId);

  let newDonation = getValueById(inputAmountId);

  if (newDonation > 0 && typeof newDonation === "number") {
    addDonation(currentAmountId, newDonation);
  } else alert("Please input a valid input!");

  clearText(inputAmountId);
}
