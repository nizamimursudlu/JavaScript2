
const bill = document.getElementById("bill");
const dropdown = document.getElementById("dropdown");
const sharingBill = document.getElementById("sharing-bill")
const calculate = document.getElementById("calculate")




calculate.addEventListener("click", calculation)

if (bill.value == 3) {
  console.log("it works")
}


function calculation() {
  var money = parseFloat(dropdown.options[dropdown.selectedIndex].value)
  const tips = (bill.value / 100) * money
  total.value = (parseFloat(bill.value) + tips) / (parseFloat(sharingBill.value)) + " EACH"

}










//document.querySelector("#app").innerText = "Tip Calculator";