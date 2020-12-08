let currentTime = document.getElementById("current-time")
function displayCurrentTime() {
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
