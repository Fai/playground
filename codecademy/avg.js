const sum = numArray => {
    return numArray.reduce((acc, value) => acc+value,0);
}

const avg = numArray => {
    return sum(numArray) / numArray.length;
}

const testNumbers = [1,2,3,4,5];
console.log(avg(testNumbers))