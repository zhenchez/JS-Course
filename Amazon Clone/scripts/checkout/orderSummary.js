import {
  cart,
  removeFromCart,
  calculateCartQuantity,
  updateQuantity,
  updateDeliveryOption,
} from "../../data/cart.js";
import { products, getProduct } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import {
  deliveryOptions,
  getDeliveryOption,
} from "../../data/deliveryOptions.js";
import { renderPaymentSummary } from "./paymentSummary.js";

export function renderHTML() {
  let cartSummaryHTML = "";

  function deliveryOptionsHTML(cartItem) {
    let html = "";

    deliveryOptions.forEach(deliveryOption => {
      const today = dayjs();
      const deliveryDate = today.add(deliveryOption.deliveryDays, "day");
      const dateString = deliveryDate.format("dddd, MMMM D");
      const priceString =
        deliveryOption.priceCents === 0
          ? "FREE"
          : `$${formatCurrency(deliveryOption.priceCents)}`;
      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

      html += `
      <div class="delivery-option"
      data-product-id="${cartItem.productId}"
      data-delivery-option-id="${deliveryOption.id}">
        <input
          type="radio"
          ${isChecked ? "checked" : ""}
          class="delivery-option-input"
          name="delivery-option-${cartItem.productId}"
        />
        <div>
          <div class="delivery-option-date">${dateString}</div>
          <div class="delivery-option-price">${priceString} - Shipping</div>
        </div>
      </div>
      `;
    });
    return html;
  }

  cart.forEach(cartItem => {
    const productId = cartItem.productId;

    const matchingProduct = getProduct(productId);

    const deliveryOptionId = cartItem.deliveryOptionId;

    const deliveryOption = getDeliveryOption(deliveryOptionId);

    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, "day");
    const dateString = deliveryDate.format("dddd, MMMM D");

    cartSummaryHTML += `
      <div class="cart-item-container js-cart-item-container-${
        cartItem.productId
      }">
        <div class="delivery-date">Delivery date: ${dateString}</div>
  
        <div class="cart-item-details-grid">
          <img
            class="product-image"
            src=${matchingProduct.image}
          />
  
          <div class="cart-item-details">
            <div class="product-name">
              ${matchingProduct.name}
            </div>
            <div class="product-price">$${formatCurrency(
              matchingProduct.priceCents
            )}</div>
            <div class="product-quantity">
              <span> Quantity: <span class="quantity-label quantity-label-${
                cartItem.productId
              }">${cartItem.quantity}</span> </span>
              <span class="update-quantity-link link-primary" data-product-id="${
                cartItem.productId
              }">
                Update
              </span>
              <input type="number" class="quantity-input quantity-input-${
                cartItem.productId
              }" value>
              <span class="save-quantity-link link-primary" data-product-id="${
                cartItem.productId
              }">Save</span>
              <span class="delete-quantity-link link-primary" data-product-id="${
                cartItem.productId
              }">
                Delete
              </span>
            </div>
          </div>
  
          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            ${deliveryOptionsHTML(cartItem)}
            
          </div>
        </div>
      </div>
    `;
  });

  document.querySelector(".order-summary").innerHTML = cartSummaryHTML;

  document.querySelectorAll(".delete-quantity-link").forEach(link => {
    link.addEventListener("click", () => {
      const { productId } = link.dataset;
      removeFromCart(productId);
      document.querySelector(`.js-cart-item-container-${productId}`).remove();
      calculateCartQuantity("cart");
      renderPaymentSummary();
    });
  });

  document.querySelectorAll(".update-quantity-link").forEach(link => {
    link.addEventListener("click", () => {
      const { productId } = link.dataset;
      document
        .querySelector(`.js-cart-item-container-${productId}`)
        .classList.add("is-editing-quantity");
    });
  });

  document.querySelectorAll(".save-quantity-link").forEach(link => {
    link.addEventListener("click", () => {
      const { productId } = link.dataset;
      const value = Number(
        document.querySelector(`.quantity-input-${productId}`).value
      );
      if (value < 0 || value > 100) {
        alert("Quantity must be between 0 and 100");
        return;
      }
      const quantityLabel = document.querySelector(
        `.quantity-label-${productId}`
      );
      document
        .querySelector(`.js-cart-item-container-${productId}`)
        .classList.remove("is-editing-quantity");

      quantityLabel.innerHTML = value;
      updateQuantity(productId, value);
      calculateCartQuantity("cart");
      renderPaymentSummary();
    });
  });

  document.querySelectorAll(".delivery-option").forEach(element => {
    element.addEventListener("click", () => {
      const { productId, deliveryOptionId } = element.dataset;
      updateDeliveryOption(productId, deliveryOptionId);
      renderHTML();
      renderPaymentSummary();
    });
  });

  calculateCartQuantity("cart");
}
