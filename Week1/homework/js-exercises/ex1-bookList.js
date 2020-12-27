
const books = [{
  title: 'The Little Prince',
  author: 'Antoine De Saint-Exupéry',
  alreadyRead: true
},
{
  title: 'Veronica Decides To Die',
  author: 'Paulo Coelho',
  alreadyRead: false
},
{
  title: 'Anna Karenina',
  author: 'Leo Tolstoy',
  alreadyRead: true
}
];
const book = document.querySelector("#bookList")

const arrImages = ["https://www.booktopia.com.au/http_coversbooktopiacomau/big/9781853261589/0000/the-little-prince.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/411YxgRv1bL._SX324_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51vPf2CfSEL.jpg"]

const ul = document.getElementById("ul")

const paragraphOne = document.getElementById("paragraph-one")

for (let i = 0; i < books.length; i++) {
  const li = document.createElement("li")
  ul.appendChild(li)
  const paragraph = document.createElement("p")
  li.appendChild(paragraph)
  paragraph.innerHTML = `${books[i].title} by ${books[i].author} `
  const image = document.createElement("img");
  paragraph.appendChild(image)
  image.src = arrImages[i]

  if ((books[i].alreadyRead) === true) {
    li.style.cssText = "background-color:green;"
  } else {
    li.style.cssText = "background-color:red;"
  }
}
