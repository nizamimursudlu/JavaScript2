const app = () => {
  const playStop = document.querySelector(".play")
  const stop = document.querySelector(".stop")
  const pause = document.querySelector(".pause")
  const arrowUp = document.querySelector(".arrow-up")
  const arrowDowm = document.querySelector(".arrow-down")
  // const seconds = document.querySelector(".seconds")
  let minutes = document.querySelector(".minutes")
  const timeDisplay = document.querySelector("#time-display")
  let setTime = document.querySelector(".set-time")
  let interval = null;
  let status = "stopped";
  let time = 0;
  //
  let seconds = "00"
  //timeDisplay.innerHTML = `${minutes}:${seconds}`
  //minutes = parseFloat(setTime.innerHTML)



  arrowUp.addEventListener("click", function () {
    if (status === "stopped") {
      setTime.innerHTML++
      time = parseFloat(setTime.innerHTML) * 60
      const minutes = parseFloat(setTime.innerHTML)
      timeDisplay.innerHTML = `${minutes}:${seconds}`
      seconds.innerHTML = `${"00"}`

    }
  })
  arrowDowm.addEventListener("click", function () {
    if (status === "stopped") {
      setTime.innerHTML--
      time = parseFloat(setTime.innerHTML) * 60
      const minutes = parseFloat(setTime.innerHTML);
      timeDisplay.innerHTML = `${minutes}:${seconds}`
      seconds.innerHTML = `${00}`

    }
  })
  countDown = () => {
    if (minutes === 0 && seconds === "00") {
      clearInterval(interval)
      timeDisplay.textContent = `${"Time's up!"}`

    }
    else {
      minutes = Math.floor(time / 60);
      seconds = Math.floor(time % 60);
      seconds = seconds < 10 ? "0" + seconds : seconds
      timeDisplay.innerHTML = `${minutes}:${seconds}`
      time--;
    }
  }
  playStop.addEventListener("click", function startStop() {
    if (status === "stopped") {
      time = parseFloat(setTime.innerHTML) * 60
      const minutes = parseFloat(setTime.innerHTML);
      interval = window.setInterval(countDown, 1000);
      playStop.innerHTML = "&#9634;"
      status = "started"


    }
    else {
      clearInterval(interval)
      minutes = 25;
      seconds = "00"
      timeDisplay.innerHTML = `${minutes}:${seconds}`
      status = "stopped"


    }
  })

  pause.addEventListener("click", function pausePlay() {
    if (status === "started") {
      window.clearInterval(interval);
      status = "paused"
      pause.style.color = "gray"
    } else {

      interval = window.setInterval(countDown, 1000);
      status = "started"
      pause.style.color = "white"
    }
  });
};
app()