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
const newArray = [];

for (i = 0; i < alphabeticalOrder.length; i++) {
  if (alphabeticalOrder[i] !== alphabeticalOrder[i + 1]) {
    newArray.push(alphabeticalOrder[i])
  }
}

console.log(newArray)







