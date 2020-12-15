


// THE FIRST VERSION
// CALLS: sayThree, sayThree, sayFive, sayFive



function threeFive(startIndex, stopIndex, threeCallBack, fiveCallBack) {
  const numbers = [];
  for (i = startIndex; i <= stopIndex; i++) {
    numbers.push(i)
  }
  console.log(numbers)
  function three() {
    numbers.map(function (number) {
      if (number % 3 === 0) {
        threeCallBack(number)
      }
    })
  } three()
  function five() {
    numbers.map(function (number) {
      if (number % 5 === 0) {
        fiveCallBack(number)
      }
    })
  } five()
}
function sayThree(number) {
  console.log(number)
}
function sayFive(number) {
  console.log(number)
}
threeFive(10, 15, sayThree, sayFive)


// SECOND VERSION
// CALLS: sayFive, sayThree, sayThree


function threeFive(startIndex, stopIndex, threeCallBack, fiveCallBack) {
  const numbers = [];
  for (i = startIndex; i <= stopIndex; i++) {
    numbers.push(i)
  }
  console.log(numbers)
  numbers.map(function (number) {
    if (number % 3 === 0) {
      threeCallBack(number)
    } else if (number % 5 === 0) {
      fiveCallBack(number)
    }
  })
}
function sayThree(number) {
  console.log(number)
}
function sayFive(number) {
  console.log(number)
}
threeFive(10, 15, sayThree, sayFive)


// HELLO I WROTE TWO VERSIONS NEITHER ONE CALLS:
// sayFive, sayThree, sayThree, sayFive
// AS THE ASSINGMENT ASKS
// COULD YOU PLEASE GIVE ME A HINT