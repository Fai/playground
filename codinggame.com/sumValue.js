/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

function LTN(letter) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet.indexOf(letter.toUpperCase()) + 1;
}

const a = readline();
const regexnum = /^(?=.*\d).+$/
const regexlower = /^(?=.*[a-z]).+$/
const regexupper = /^(?=.*[A-Z]).+$/
let answer = 0;
console.error(a);
for(let i=0; i<a.length ; i++){
    const char = a[i]
    if (regexnum.test(char)) answer += parseInt(char);
    if (regexlower.test(char)) answer += parseInt(LTN(char)) * 2;
    if (regexupper.test(char)) answer += parseInt(LTN(char)) * 3;
}
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(answer);
