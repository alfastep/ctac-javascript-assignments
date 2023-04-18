const addToCartForm = document.querySelector('#addItemForm');
const displayCartButton = document.querySelector('#displayCartButton');

function initializeCart() {
  let cart = JSON.parse(localStorage.getItem('cart'));
  if (!cart) {
    cart = { items: [] };
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

function addItem(item) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  cart.items.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
}

function removeItem(itemId) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  cart.items = cart.items.filter(item => item.id !== itemId);
  localStorage.setItem('cart', JSON.stringify(cart));
}

function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart'));
  console.log(cart.items);
}

addToCartForm.addEventListener('submit', event => {
  event.preventDefault();
  const itemName = document.querySelector('#itemName').value;
  const itemPrice = document.querySelector('#itemPrice').value;
  const item = { id: Date.now(), name: itemName, price: itemPrice };
  addItem(item);
  addToCartForm.reset();
});

displayCartButton.addEventListener('click', displayCart);

initializeCart();