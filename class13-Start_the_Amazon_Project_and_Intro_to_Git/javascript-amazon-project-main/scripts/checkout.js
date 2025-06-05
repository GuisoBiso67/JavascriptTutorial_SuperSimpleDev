import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
//import '../data/cart-class.js'; // runs all the code inside a file;
//import '../data/backend-practice.js';
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";

Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve('value1');
    });

  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),

]).then((values) => {
  console.log(values);
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});

/*
// use promises instead of callbacks. Promises keep our code more flat;
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });

}).then((value) => {
  console.log(value); // runs resolve above

  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
loadProducts(() => {
  loadCart(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/
