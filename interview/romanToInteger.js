const romanValue = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
}

const romanToInteger = (s) => {
    let num = [];
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        const character = s[i];
        const nextCharacter = s[i + 1];
        console.error(character, nextCharacter, sum);
        if (character === nextCharacter) {
            num.push(romanValue[character]);
        }
        if (romanValue[character] < romanValue[nextCharacter]) {
            sum -= num.pop();
            sum -= romanValue[character];
        }
        if (romanValue[character] > romanValue[nextCharacter]) {
            sum += romanValue[character];
        }
        if (nextCharacter === undefined) {
            sum += romanValue[character];
            sum += num.reduce((a, b) => a + b, 0);
        }
    }
    return sum;
}

const test = 'IIV';
console.log(romanToInteger(test));