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