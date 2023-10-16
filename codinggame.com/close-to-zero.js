/**
 * Temperatures
 * analyze records of temperature to find the closest to zero
 * https://www.codingame.com/ide/puzzle/temperatures
 */

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
let r = n === 0 ? 0 : null;
var inputs = readline().split(' ');
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
    if (r === null || Math.abs(t) < Math.abs(r) || (Math.abs(t)===Math.abs(r) && t > 0) ) r = t;
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(r);
