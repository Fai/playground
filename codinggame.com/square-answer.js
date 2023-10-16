/**
 * FYI, some phrases inspired by: https://techvify-software.com/35-best-coding-programming-quotes/
 * Input 
 * 123456789
 * Expected output
 * 12345
 * 23456
 * 34567
 * 45678
 * 56789
 **/

const input = readline();

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
// console.log('square-answer');
const half = Math.round(input.length/2);
for(let i=0;i< half;i++) {
    console.log(input.substring(i, half+i));
}
