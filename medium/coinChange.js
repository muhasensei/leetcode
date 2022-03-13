/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function(coins, amount) {
    const amounts = new Array(amount+1).fill(Infinity);
    amounts[0] = 0;
    coins.forEach((coin) => {
        for (let i = 0; i < amounts.length; i++) {
            if (coin <= i) {
                let idx = i - coin;
                let potential = amounts[idx] + 1;
                amounts[i] = Math.min(potential, amounts[i]);
            }
        }
    })

    return amounts[amounts.length - 1] === Infinity ? -1 : amounts[amounts.length - 1];
};

console.log(coinChange([1,2,5], 11))