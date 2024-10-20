// Write a function to calculate the total cost of items in a shopping cart, where each item is represented as an object with a price and a quantity field.

function totalShopping(cart) {
  return cart.reduce((acc, cur) => {
    return cur.price * cur.quantity + acc;
  }, 0);
}

const cart = [
  { price: 10, quantity: 2 }, // 20
  { price: 15, quantity: 1 }, // 15
  { price: 5, quantity: 5 }, // 25
];

console.log(totalShopping(cart));
