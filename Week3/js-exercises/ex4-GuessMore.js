/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

// x = 9, besauce console.loxg(x) is located outside of the function block,
// so it doesnt see that the value has changed in there.
// When the line: const x = 9 is located on the global scope,
// vabiables from the global scope are accessible for any other scope.


const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

// x: 10, because in this case in the first line 'y' get value of x: 9 in a block as well,
// so when you concole.log(y) js uses the nearest value of y it can find


