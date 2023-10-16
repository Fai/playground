// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    let multiply = 0;
    const size = A.length;
    for(let index = 0; index < size ; index = index +1) {
        let num = A[index];
        if(index % 2){
            if(num != 0) multiply += 1;
        }
        if(index % 4 === 0) {
            if(num === 0) return -1;
            if(num < 0) multiply += 1;
        }
        if(index % 4 === 2) {
            if(num === 0) return -1;
            if(num > 0) multiply +=1;
        }
    }
    return multiply;
}

console.log(solution([1,0,3,4,5,0,6]));
console.log(solution([7,4,-3,0,5,1,0]));
console.log(solution([-5,0,3,0]));
