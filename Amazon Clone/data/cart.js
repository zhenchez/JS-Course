export const cart = [];

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
}
