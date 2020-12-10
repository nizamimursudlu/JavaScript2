/**
 
 ** Exercise 2: The lottery machine **
 Write a function called removeDuplicates. This function accept an array as an argument
 does not return anything but removes any duplicate elements from the array.

 The function should remove duplicate elements. So the result should be:
 ['a', 'b', 'c', 'd', 'e', 'f']

 */



// WRITE YOUR FUNCTION HERE

const letters = ['a', 'b', 'b', 'c', 'd', 'a', 'e', 'f', 'f', 'c', 'b'];
const alphabeticalOrder = letters.sort()

function removeDuplicates(letters) {
  for (let i = 1; i < letters.length; i++) {
    let newArr = letters.filter(letter => letter !== letters[i++])
    return newArr
  }
}
console.log(removeDuplicates(letters))






