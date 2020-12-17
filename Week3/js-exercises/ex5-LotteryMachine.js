
status = "noPause"
function threeFive(startIndex, stopIndex, threeCallBack, fiveCallBack) {
  const numbers = [];
  for (i = startIndex; i <= stopIndex; i++) {
    numbers.push(i)
  }
  console.log(numbers)
  function five() {
    numbers.map(function (number) {
      if (number % 5 === 0 && status === "pause") {
        fiveCallBack(number)
        status = "noPause"
      }
      else
        if (number % 5 === 0 && status === "noPause") {
          setTimeout(function () { fiveCallBack(number) }, 1000)
          status = "pause"

        }
    })
  } five()
  function three() {
    numbers.map(function (number) {
      if (number % 3 === 0) {
        threeCallBack(number)
      }
    })
  } three()
}
function sayThree(number) {
  console.log("sayThree")
}
function sayFive(number) {
  console.log("sayFive")
}
threeFive(10, 15, sayThree, sayFive)