let calculation = JSON.parse(localStorage.getItem('calculation')) || {
  math: '',
}

showCalculation();

function showCalculation(){
  document.querySelector('#js-calculation')
    .innerHTML = `${calculation.math}`
}

function updateCalculation(value){
  if (value === '='){
    let result = eval(calculation.math);
    calculation.math = result;
    localStorage.setItem('calculation',JSON.stringify(calculation));
    showCalculation();
    return;
  }
  else if(value === ''){
    calculation.math = '';
    localStorage.setItem('calculation',JSON.stringify(calculation));
    showCalculation();
    return;
  }else{
    calculation.math += value;
    localStorage.setItem('calculation',JSON.stringify(calculation));
    showCalculation();
    return;
  }
}