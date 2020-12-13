
const bill = document.getElementById("bill");
const dropdown = document.getElementById("dropdown");
const person = document.getElementById("person");
const calculate = document.getElementById("calculate-btn");
const modalBtn = document.getElementById("modal-btn");
const modalBg = document.querySelector(".modal-bg");
const container = document.getElementById("container")
const tipAmount = document.getElementById("tip-amount")

calculate.addEventListener("click", function () {
  if (bill.value === "" || dropdown.value === "Choose an option" || person.value === "") {
    modalBg.classList.add("bg-active");
    container.style.backgroundColor = "rgb(0, 0, 0, 0.01)";
    bill.style.backgroundColor = "rgb(0, 0, 0, 0.01)";
  } else {
    var money = parseFloat(dropdown.options[dropdown.selectedIndex].value)
    const finalBill = (parseFloat(bill.value) + (bill.value / 100) * money) / (parseFloat(person.value))
    if (person.value == 1) {
      tipAmount.innerHTML = `TIP AMOUNT<br>
      $ ${finalBill}`
    } else {
      tipAmount.innerHTML = `TIP AMOUNT<br>
      $ ${finalBill} <br>
      EACH`}
  }
})
modalBtn.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
  container.style.backgroundColor = "white";
})






//document.querySelector("#app").innerText = "Tip Calculator";