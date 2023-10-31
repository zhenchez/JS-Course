export let cart = JSON.parse(localStorage.getItem("cart")) || [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
  },
];

function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId, quantityNum) {
  let matchingItem;

  cart.forEach(cartItem => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += quantityNum;
  } else {
    cart.push({
      productId,
      quantity: quantityNum,
    });
  }

  saveCartToLocalStorage();
}

export function removeFromCart(productId) {
  const newCart = cart.filter(cartItem => cartItem.productId !== productId);

  cart = newCart;

  saveCartToLocalStorage();
}
