const sum = numArray => {
    return numArray.reduce((acc, value) => acc+value,0);
}
const testNumbers = [1,2,3,4,5];
console.log(sum(testNumbers));
export default sum;