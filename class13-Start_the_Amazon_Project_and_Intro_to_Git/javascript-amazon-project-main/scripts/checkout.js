import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
//import '../data/cart-class.js'; // runs all the code inside a file;
//import '../data/backend-practice.js';
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

async function loadPage(){ // async make a function return a promise;
  console.log('load page');

  await loadProductsFetch(); // await lets us write asynchronous code like normal code, so we don't need to use 'then'. Await con only be used inside an async, if another function is inside async, we can't use await inside this other function;

  const value = await new Promise((resolve) => {
    loadCart(() => {
      resolve('value3');
    });
  }) 

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();

  //return 'value2'; // equals to resolve('value2');
}
loadPage();

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),

]).then((values) => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/

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
