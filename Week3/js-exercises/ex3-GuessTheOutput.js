/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/



let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();

// The output is going to be 12, because variable "a" is not being created,
// three is no 'var' or 'let' in front of it. So its the same variable that was created in line 13,
// and its value is going to be overwritten to 12.