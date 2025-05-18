import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

function isWeekend(date){
  if (date.format('dddd') === 'Saturday' || date.format('dddd') === 'Sunday'){
    console.log(date.format('dddd'));
    console.log('Weekend');
  }else{
    console.log(date.format('dddd'));
    console.log('Not weekend');
  }
}

export default isWeekend;