/* finds the largest number in an array.
You are given an array of integers. Write a program that finds the largest number in the array and returns it. 
The program should take the array as an input and output the largest number.
For example, if the array is [4, 6, 8, 2, 10], the program should output 10 as it is the largest number in the array. 
Make sure your program works for arrays of any size and contains only positive integers.
*/

const numbers = [4, 6, 8, 2, 10];
const empty = [];
const negative = [4, 6, -8, 2, 10];
const random = ['what',4]

const findMax = numberArray => {
    if(numberArray.length === 0) return 'Array is empty'
    let max=0;
    numberArray.forEach(num => {
        if (typeof num != 'number'){
            max =  'Array contains non-integer value';
            return max;
        }
        if (num < 0){
            max = 'Array contains negative integers';
            return max;
        }
        if (num > max) max = num;
    });
    return max;
}

console.log(Math.max(...numbers));
console.log(findMax(numbers));
console.log(findMax(empty));
console.log(findMax(negative));
console.log(findMax(random));