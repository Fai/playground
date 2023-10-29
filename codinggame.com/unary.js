// https://www.codingame.com/ide/puzzle/unary
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const INPUTS = readline();
console.error(INPUTS);

let BINARYINPUT = '';
for(let n = 0; n < INPUTS.length; n++) {
    const INPUT = INPUTS.charAt(n);
    const ZERO = '0'
    let BINARY = INPUT.charCodeAt(0).toString(2);
    if(BINARY.length != 7) BINARY = ZERO.repeat(7-BINARY.length) + BINARY;
    BINARYINPUT += BINARY
    console.error(BINARYINPUT);
}

let BLOCK = 0;
let BLOCKMESSAGE = [];
let FIRST = [];
let code = '';

for (let i = 0 ; i < BINARYINPUT.length ; i++) {
    const now = BINARYINPUT[i];
    const next = BINARYINPUT[i+1];
    console.error(now,next,FIRST,BLOCKMESSAGE)
    if(!next) {
        if(now == '1') FIRST.push('0');
        else FIRST.push('00');
        if(BLOCKMESSAGE[BLOCK]) BLOCKMESSAGE[BLOCK] += '0';
        else BLOCKMESSAGE[BLOCK] = '0';
        break;
    }

    if(now === next) {
        if(BLOCKMESSAGE[BLOCK]) BLOCKMESSAGE[BLOCK] += '0';
        else BLOCKMESSAGE[BLOCK] = '0';
    } else {
        if(now == '1') FIRST.push('0');
        else FIRST.push('00');
        if(BLOCKMESSAGE[BLOCK]) BLOCKMESSAGE[BLOCK] += '0';
        else BLOCKMESSAGE[BLOCK] = '0';
        BLOCK++;
    }
}

for (let i = 0 ; i < BINARYINPUT.length -1 ; i++) {
    const B1 = FIRST.shift();
    if (B1) code += B1;
    else break;
    code += ' '
    B2 = BLOCKMESSAGE.shift();
    if (B2) code += B2;
    else break;
    code += ' '
}
console.log(code.trim());