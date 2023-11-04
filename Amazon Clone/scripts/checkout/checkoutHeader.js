import { cartQuantity } from "../../data/cart.js";

export function renderCheckoutHeader() {
  const quantity = cartQuantity();
  let html = `
  Checkout (<a class="return-to-home-link" href="amazon.html">${quantity} items</a>)
  `;

  document.querySelector(".checkout-header-middle-section").innerHTML = html;
}
