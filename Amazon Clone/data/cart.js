export let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
function getProduct(productId) {
  let matchingItem;

  cart.forEach(cartItem => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    }
  });

  return matchingItem;
}
export function addToCart(productId, quantityNum) {
  let matchingItem = getProduct(productId);

  if (matchingItem) {
    matchingItem.quantity += quantityNum;
  } else {
    cart.push({
      productId,
      quantity: quantityNum,
      deliveryOptionId: "1",
    });
  }

  saveCartToLocalStorage();
}

export function removeFromCart(productId) {
  const newCart = cart.filter(cartItem => cartItem.productId !== productId);

  cart = newCart;

  saveCartToLocalStorage();
}

export function cartQuantity() {
  let cartQuantity = 0;

  cart.forEach(cartItem => {
    cartQuantity += cartItem.quantity;
  });

  return cartQuantity;
}

export function calculateCartQuantity(title) {
  if (title === "cart") {
    let cartQuantity = 0;

    cart.forEach(cartItem => {
      cartQuantity += cartItem.quantity;
    });

    document.querySelector(".return-to-home-link").innerHTML =
      cartQuantity + " items";
  } else {
    let cartQuantity = 0;

    cart.forEach(cartItem => {
      cartQuantity += cartItem.quantity;
    });

    document.querySelector(".cart-quantity").innerHTML = cartQuantity;
  }
}

export function updateQuantity(productId, newQuantity) {
  let matchingItems = getProduct(productId);
  matchingItems.quantity = newQuantity;
  saveCartToLocalStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem = getProduct(productId);

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveCartToLocalStorage();
}
