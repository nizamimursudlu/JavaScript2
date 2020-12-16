/**
 
 ** Exercise 5: The cat walk **
 Starting with an HTML, which has a single img tag of an animated GIF of a cat walking.

 1. Create a variable to store a reference to the img.
 2. Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
 3. Create a  function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
 4. Call that function every 50 milliseconds.Your cat should now be moving across the screen from left to right.Hurrah!
 5. When the cat reaches the right - hand of the screen, restart them at the left hand side("0px").So they should keep walking from left to right across the screen, forever and ever.
 6. When the cat reaches the middle of the screen, replace the img with an image of a cat dancing(use this URL: https: //tenor.com/StFI.gif), keep it dancing for 5 seconds, and then replace the img with the original image and have it continue the walk.
 
*/

let catEl = document.getElementById("cat");
const catSize = catEl.width

function startPoint() {
  catEl.style.left = "0px";
}
startPoint();


let walkTheCat = function () {
  let position = parseFloat(catEl.style.left);

  let screenMiddle = (window.innerWidth - catEl.width) / 2;

  if (position < screenMiddle - 10 || position > screenMiddle + 10) {
    catEl.style.left = (position + 10).toString().concat("px");
  } else {
    clearInterval(interval);
    catEl.src = "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424"

    setTimeout(function () {
      catEl.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif"
      catEl.style.left = (position + 20).toString().concat("px");
      interval = setInterval(walkTheCat, 50)
    }, 5000);
  }

  if (position > window.innerWidth) {
    startPoint();
  }
}

let interval = setInterval(walkTheCat, 50);