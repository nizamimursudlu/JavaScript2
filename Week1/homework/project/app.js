const objectWithQuotes = [{
  quote: "Life is what happens when you're busy making other plans.",
  author: "- John Lennon"
},
{
  quote: "The way to get started is to quit talking and begin doing.",
  author: "- Walt Disney"
},
{
  quote: "If life were predictable it would cease to be life, and be without flavor.",
  author: "- Eleanor Roosevelt"
},
{
  quote: "It is during our darkest moments that we must focus to see the light.",
  author: "- Aristotle"
},
{
  quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
  author: "- Benjamin Franklin"
},
{
  quote: "Whoever is happy will make others happy too.",
  author: "- Anne Frank"
}]

const newQuoteBtn = document.getElementById("new-quote-btn");
const chosenQuote = document.querySelector("#new-quote");
const chosenAuthor = document.querySelector("#author > input");
function quotePicker() {
  const quoteNum = Math.floor((Math.random()) * 6)
  const newQuote = objectWithQuotes[quoteNum]
  chosenQuote.value = newQuote.quote
  chosenAuthor.value = newQuote.author
}
newQuoteBtn = addEventListener("click", quotePicker)
