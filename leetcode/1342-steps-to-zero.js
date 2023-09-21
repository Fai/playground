/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = function(num) {
    let step = 0;
    while(num){
        if(num%2) num -= 1;
        else num /= 2;
        step+=1;
    }
    return step;
};