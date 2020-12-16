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
const ulElement = createBookList(books);
const arrImages = ["https://www.booktopia.com.au/http_coversbooktopiacomau/big/9781853261589/0000/the-little-prince.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/411YxgRv1bL._SX324_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51vPf2CfSEL.jpg"]

function createBookList(books) {
  let li = document.createElement('li');
  li.textContent = books;
  return li
}

for (i = 0; i < 3; i++) {
  const image = document.createElement("img");
  image.src = arrImages[i]
  const paragraph = document.createElement("p")
  paragraph.innerHTML = `${books[i].title} by ${books[i].author} `
  book.appendChild(createBookList(books[i]).appendChild(paragraph)).appendChild(image)
  if ((books[i].alreadyRead) === true) {
    paragraph.style.cssText = "background-color:green;"
  } else {
    paragraph.style.cssText = "background-color:red;"
  }
}

book.style.cssText = "display: flex; flex-direction: row; justify-content: space-between;text-align: center;"