/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
const up = [];
const low = [];
const space = [];
const message = readline();
console.error(message);
for (let i = 0 ; i < message.length ; i++) {
    const char = message[i];
    console.error('char:',char)
    if(char === ' ') space.push(char);
    else if(char === char.toUpperCase()) up.push(char);
    else low.push(char);
    console.error('up:',up)
    console.error('low:',low)
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
const output = up.sort().join('').trim() + space.join('') + low.sort().reverse().join('').trim(); 
console.log(output.trim());