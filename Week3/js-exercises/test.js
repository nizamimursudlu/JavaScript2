function useCallBack(callBack) {

  callBack("Hack");


  setTimeout(function () {
    callBack("Your");
  }, 2000)
  setTimeout(function () {
    callBack("Furure");
  }, 3000)
}

function printSentense(sentense) {
  console.log(sentense)
}
useCallBack(printSentense)