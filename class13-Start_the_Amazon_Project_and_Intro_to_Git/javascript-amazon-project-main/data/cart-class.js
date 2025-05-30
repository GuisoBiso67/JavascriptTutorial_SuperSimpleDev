class Cart{
  cartItems;
  localStorageKey;

  constructor(localStorageKey){
    this.localStorageKey = localStorageKey;
    this.loadFromStorage();
  }

  loadFromStorage(){
    this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey)); // 'this' points to cartItems, no matter what name 'cartItems' has or if it changes; 

    if (!this.cartItems){
      this.cartItems = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: 'i1',
      }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: 'i2',
      }];
    }
  }

  saveToStorage(){
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
  }

  addToCart(productId){
    const productQuantity = document.querySelector(`.js-quantity-selector-${productId}`);
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if(productId === cartItem.productId){ // cartItem is the index of product in cart.js;
        matchingItem = cartItem;
      }
    });

    if(matchingItem){
      matchingItem.quantity += Number(productQuantity.value);
    }else{
      this.cartItems.push({
        productId: productId,
        quantity: Number(productQuantity.value),
        deliveryOptionId: 'i1',
      });
    }
    this.saveToStorage();
  }

  removeFromCart(productId){
    const newCart = [];

    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    });
    this.cartItems = newCart;
    this.saveToStorage();
  }

  calculateCartQuantity(){
    let cartQuantity = 0;
    this.cartItems.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
    return cartQuantity;
  }

  updateQuantity(productId, newQuantity){
    let matchingItem;
    this.cartItems.forEach((cartItem) => {
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });
    matchingItem.quantity = newQuantity;
    this.saveToStorage();
  }

  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });
    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveToStorage();
  }
};

// each object here is a 'instance';
const cart = new Cart('cart-oop'); // 'new' generates a new object with the class;
const businessCart = new Cart('cart-business'); // the parameter here is inside the constructor;

console.log(cart);
console.log(businessCart);
console.log(cart instanceof Cart);
console.log(businessCart instanceof Cart);