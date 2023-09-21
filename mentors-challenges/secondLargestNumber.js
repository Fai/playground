// find second-largest number in an array
const numbers = [4,6,8,2,10];

const secondLargest = numArray => {
    const max = Math.max(...numArray);
    return Math.max(...numArray.filter(num => num != max));
};

console.log(secondLargest(numbers));