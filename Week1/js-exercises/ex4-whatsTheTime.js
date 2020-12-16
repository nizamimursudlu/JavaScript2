<<<<<<< HEAD
/**
 
 ** Exercise 4: What 's the time? **
 
 Why wear a watch when you can check the time, live in your webpage ?

  1. Create a basic HTML file
  2. in the HTML file Include a script tag and link the JavaScript file
  3. Inside the JS file, write a function that adds the current time to the webpage. Make sure it 's written in the HH:MM:ss notation (hour, minute, second). Hint: use `setInterval()` to make sure the time stays current
  4. Have the function execute when it 's loading in the browser

 */

let currentTime = document.getElementById("current-time")

function displayCurrentTime() {
  // your code goes in here

=======
let currentTime = document.getElementById("current-time")
function displayCurrentTime() {
>>>>>>> a1a506e799c6d2a123d05e9f776384aba1db3171
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  // let timeOutput = `${h}:${m}:${s}`;
  m = m < 10 ? "0" + m : m
  s = s < 10 ? "0" + s : s
  currentTime.innerHTML = `${h}:${m}:${s}`;
  // currentTime.innerHTML = timeOutput;
}
setInterval(displayCurrentTime, 1000);
