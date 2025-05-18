import { calculateCartQuantity } from "../../data/cart.js";

export function renderCheckoutHeader(){
  function checkoutHeaderHTML(){
    const checkoutHeaderHTML = `
    <div class="header-content">
      <div class="checkout-header-left-section">
        <a href="amazon.html">
          <img class="amazon-logo" src="../../images/amazon-logo.png">
          <img class="amazon-mobile-logo" src="../../images/amazon-mobile-logo.png">
        </a>
      </div>

      <div class="checkout-header-middle-section">
        Checkout (<a class="return-to-home-link js-return-to-home-link" href="amazon.html">${calculateCartQuantity()} items</a>)
      </div>

      <div class="checkout-header-right-section">
        <img src="../../images/icons/checkout-lock-icon.png">
      </div>
    </div>
    `;

    return checkoutHeaderHTML;
  };
  
  document.querySelector('.js-checkout-header').innerHTML = checkoutHeaderHTML();

  function updateCartQuantity(){
    document.querySelector('.js-return-to-home-link').innerHTML = `${calculateCartQuantity()} items`;
  };
  updateCartQuantity();
}