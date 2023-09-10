/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const answer=[];
    for(let i = 1; i <= n ; i++){
        !(i % 3) && !(i % 5) ? answer[i-1]='FizzBuzz' : 
        !(i%3) ? answer[i-1]='Fizz' :
        !(i%5) ? answer[i-1]='Buzz' : 
            answer[i-1]= `${i}`;
    };
    
    return answer;
};