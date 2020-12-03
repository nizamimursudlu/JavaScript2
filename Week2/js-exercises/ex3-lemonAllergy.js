function takeOutLemons(basket) {
  const arrayNoLemons = basket.filter(fruit => fruit !== 'Lemon');
  return "My mom bought me a fruit basket, containing " + arrayNoLemons + "!"
}
const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];
console.log(takeOutLemons(fruitBasket));