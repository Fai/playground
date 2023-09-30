/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline());
const c = readline();

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

const fill = c.repeat(9+n*2);
const wall = c.repeat(n);
for (let i = 0 ; i < n ; i ++) console.log(fill);
console.log(wall+'   ___   '+wall)
console.log(wall+' _(*_*)_ '+wall)
console.log(wall+'(_  o  _)'+wall)
console.log(wall+`  /-o-\\  `+wall)
console.log(wall+` (_/ \\_) `+wall)
for (let i = 0 ; i < n ; i ++) console.log(fill);
