/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function(accounts) {
    let wealth = 0;
    for(let i in accounts){
        if ( wealth < accounts[i].reduce((acc, total) => acc+total))
            wealth =  accounts[i].reduce((acc, total) => acc+total);

    }
    return wealth;
};