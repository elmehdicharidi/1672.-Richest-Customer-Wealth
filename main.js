/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0
    accounts.forEach(account => {
        currentWealth = account.reduce((a,b) => a+b)
        maxWealth = Math.max(currentWealth, maxWealth)
    })
    return maxWealth
};
