// https://en.wikipedia.org/wiki/Generalizations_of_Fibonacci_numbers#Tetranacci_numbers
const n = parseInt(readline());
const t = [0,0,0,1];
let sum = 1;
for(let i=5; i<=n; i++) {
    let next = 0;
    for(let j=0;j<4;j++) next+=t[j];
    sum += next;
    t.shift();
    t.push(next);
}
console.log(sum);