function doubleEvenNumbers(numbers) {
  const newNumbers = [];
  myNumbers.forEach(function (number) {
    if (number % 2 === 0) { newNumbers.push(number * 2) }
  })
  return newNumbers;
}
const myNumbers = [1, 2, 3, 4];
console.log(doubleEvenNumbers(myNumbers));