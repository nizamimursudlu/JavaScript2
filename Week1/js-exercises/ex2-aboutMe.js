/**

 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */
document.body.style.fontFamily = "Arial, sans-serif";


const myImage = document.createElement("img");
myImage.src = "decent-pic.jpeg";
document.body.appendChild(myImage);
myImage.style.width = "200px"


const lis = document.querySelectorAll("ul > li")
for (let i = 0; i < 3; i++) {
  const li = lis[i];
  li.classList.add("list-item");
}
document.getElementById("nickname").innerHTML = `${"Nizami Mursudlu"}`
document.getElementById("fav-food").innerHTML = `${"Pizza"}`
document.getElementById("hometown").innerHTML = `${"Baku"}`