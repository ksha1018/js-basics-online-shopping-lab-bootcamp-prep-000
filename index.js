var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
//  cart.push(item);
  
  Object.keys(getCart()[0])[0] = item;

  console.log(item +" has been added to your cart.");
  
  
  var itemPrice = Math.floor(Math.random()*100);
  getCart()[0][item] = itemPrice;
  
  return cart;
  

  
  
  
 // write your code here
}

addToCart("bananas");
console.log(cart);



function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
