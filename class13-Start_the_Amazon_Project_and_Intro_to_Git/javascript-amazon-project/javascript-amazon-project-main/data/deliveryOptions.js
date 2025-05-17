export const deliveryOptions = [{
  id: 'i1',
  deliveryDays: 7,
  priceCents: 0,
}, {
  id: 'i2',
  deliveryDays: 3,
  priceCents: 499,
}, {
  id: 'i3',
  deliveryDays: 1,
  priceCents: 999,
}];

export function getDeliveryOption(deliveryOptionId){
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if(option.id === deliveryOptionId){
      deliveryOption = option;
    }
  });

  return deliveryOption || deliveryOption[0];
}