/**
 * You will be given a starting number start and a closing number end. You must find the number of numbers in between start and end (both inclusive) that apply to the following condition:
 * ⇨ The sum of its digits should be greater than or equal to the product of its digits.
 * For Example: If start = 50 and end = 60, there are three numbers that apply to the condition.
 * They are 50 ( product = 0, sum = 5 ), 51 ( product = 5, sum = 6 ) and 60 ( product = 0, sum = 6 )
 */
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const start = parseInt(inputs[0]);
const end = parseInt(inputs[1]);
let count = 0;
for (let i = start; i <= end; i++) {
    const num = i.toString();
    let product = 1;
    let sum = 0;
    for(let j = 0; j < num.length; j++) {
        let current = parseInt(num[j])
        product *= current;
        sum += current;
    }
    console.error(count, num, sum, product)
    if (sum >= product) count++;
}

console.log(count);
