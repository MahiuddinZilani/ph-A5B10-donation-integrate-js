document.getElementById("donate-btn").addEventListener("click", function () {
  showSection("donations-container", "donate-btn");
});

document.getElementById("history-btn").addEventListener("click", function () {
  showSection("history-container", "history-btn");
});

function showSection(id, btn) {
  document.getElementById("donations-container").classList.add("hidden");
  document.getElementById("history-container").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");

  document.getElementById("donate-btn").classList.remove("bg-green-400");
  document.getElementById("history-btn").classList.remove("bg-green-400");
  document.getElementById(btn).classList.add("bg-green-400");
}
