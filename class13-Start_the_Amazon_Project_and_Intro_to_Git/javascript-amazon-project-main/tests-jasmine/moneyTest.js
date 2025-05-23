import {formatCurrency} from '../scripts/utils/money.js';

describe('test suit: formatCurrency', () => {
  it('converts cents into dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('works with zero(0)', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('rounds up to the nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });

  it('rounds down to the nearest cent', () => {
    expect(formatCurrency(2000.4)).toEqual('20.00');
  });
});

/*

console.log('works with zero (0)');
if(formatCurrency(0) === '0.00'){
  console.log('passed');
}else{
  console.log('failed');
}

console.log('rounds up to the nearest cent');
if(formatCurrency(2000.5) === '20.01'){
  console.log('passed');
}else{
  console.log('failed');
}

console.log('rounds down to the nearest cent');
if(formatCurrency(2000.4) === '20.00'){
  console.log('passed');
}else{
  console.log('failed');
}

*/