
const bill = document.getElementById("bill");
const dropdown = document.getElementById("dropdown");
const sharingBill = document.getElementById("sharing-bill");
const calculate = document.getElementById("calculate");
const modalBtn = document.getElementById("modal-btn");
const modalBg = document.querySelector(".modal-bg");
const container = document.getElementById("container")


calculate.addEventListener("click", function () {
  if (bill.value === "" || dropdown.value === "Choose an option" || sharingBill.value === "") {
    modalBg.classList.add("bg-active");
    container.style.backgroundColor = "rgb(0, 0, 0, 0.01)";
    bill.style.backgroundColor = "rgb(0, 0, 0, 0.01)";

  } else {
    var money = parseFloat(dropdown.options[dropdown.selectedIndex].value)
    const finalBill = (parseFloat(bill.value) + (bill.value / 100) * money) / (parseFloat(sharingBill.value))
    total.value = `TIP AMOUNT $ ${finalBill} EACH`

  }
})


modalBtn.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
  container.style.backgroundColor = "white";
})






//document.querySelector("#app").innerText = "Tip Calculator";