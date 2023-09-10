/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function(nums) {
    const sum = [];
    nums.forEach((num,key) => {
        if(!key) sum[key] = num; 
        if(key) sum[key] = num + sum[key-1];
    })
    return  sum;
};