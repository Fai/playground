/**
 *  add even, odd num function
 *  < use left num
 *  > use right num
 */

const input1 = ["1", "2", "3", "4", "5", "14", "32", "77", "91"]
const input2 = ["1", "2", "3", "4", "5", "<", "32", "<", "7"]
const input3 = ["1", "2", "3", "4", "5", ">", "32", ">", "7"]
const input4 = ["1", "2", "<", "4", "5", "<", "32", ">", "7"]
const input5 = ["1","2","<","<","5","<","6",">",">","7"]

function shiftLeft (array, index) {
    if (array[index-1] != '<')
        return array[index-1];
    else 
        return shiftLeft (array, index-1)
}

function shiftRight (array, index) {
    if (array[index+1] != '>')
        return array[index+1];
    else 
        return shiftRight (array, index+1)
}

function replaceValue (arrayN) {
    let result = arrayN;
    while (result.includes('<') || result.includes('>')) {
        result = result.map((value, index) => {
            if(value === '<') {
                return shiftLeft(result, index);
            }
            if(value === '>') {
                return shiftRight(result, index);
            }
            return value;
        })
    }
    return result;
}

function calculateEven (arrayN) {
    return replaceValue(arrayN).reduce((prev, curr) => {
        if(curr % 2 === 0) {
            return prev+parseInt(curr);
        }
        else {
            return prev;
        }
    },0);
}

function calculateOdd (arrayN) {
    return replaceValue(arrayN).reduce((prev, curr) => {
        if(curr % 2) {
            return prev+parseInt(curr);
        }
        else {
            return prev;
        }
    },0);
}
console.log(calculateEven(input1),calculateOdd(input1));
console.log(calculateEven(input2),calculateOdd(input2));
console.log(calculateEven(input3),calculateOdd(input3));
console.log(calculateEven(input4),calculateOdd(input4));
console.log(calculateEven(input5),calculateOdd(input5));