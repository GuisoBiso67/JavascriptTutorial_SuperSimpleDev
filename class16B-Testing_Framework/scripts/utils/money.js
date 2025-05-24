export function formatCurrency(priceCents) {
  if(priceCents < 0){
    return 0;
  }else{
    return (Math.round(priceCents) / 100).toFixed(2);
  }
}

export default formatCurrency;