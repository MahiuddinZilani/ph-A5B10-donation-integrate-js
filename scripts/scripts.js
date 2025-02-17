function donate(inputAmountId, currentAmountId) {
  console.log(inputAmountId, currentAmountId);

  // let newDonation = parseInt(getValueById(inputAmountId));
  let newDonation = getValueById(inputAmountId);

  if (newDonation > 0 && typeof newDonation === "number") {
    addDonation(currentAmountId, newDonation);
  } else alert("Please input a valid input!");

  clearText(inputAmountId);
}

// // console.log("hello from js");

// document.getElementById("donate-feni").addEventListener("click", function () {
//   let donatedLocation = document.getElementById("donated-amount-feni");
//   let donatedAmount = parseInt(donatedLocation.value);

//   if (donatedAmount > 0) {
//     updateBalance(donatedAmount);
//     addDonation(donatedAmount, "donation-in-feni");
//   } else alert("Please donate with valid input.");
// });

// function updateBalance(donatedAmount) {
//   let currentTotalAmount = parseInt(
//     document.getElementById("total-balance").innerText.replace(/,/g, "")
//   );

//   let newTotalBalance = currentTotalAmount - donatedAmount;

//   document.getElementById("total-balance").innerText =
//     newTotalBalance.toLocaleString();
// }

// function addDonation(donatedAmount, str) {
//   console.log(donatedAmount);
//   let donatedLocation = document.getElementById(str).innerText;
//   let currentAmount = parseInt(donatedLocation);
//   let newDonationAmount = currentAmount + parseInt(donatedAmount);
//   document.getElementById(str).innerText = newDonationAmount.toLocaleString();

//   console.log(currentAmount, newDonationAmount);
// }
