import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import isSatSun from './isWeekend.js';

// 15a
let date1 = dayjs().add(5, 'day');
console.log(date1.format('MMMM D'));

// 15b
let date2 = dayjs().add(1, 'month');
console.log(date2.format('MMMM D'));

// 15c
let date3 = dayjs().subtract(1, 'month');
console.log(date3.format('MMMM D'));

// 15d
let date4 = dayjs().add(1, 'day');
console.log(date4.format('MMMM dddd'));

// 15e
let date5 = dayjs().add(7, 'day');

isSatSun(date4);
isSatSun(date3);
isSatSun(date5);