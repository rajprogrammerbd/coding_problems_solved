
export default function maxProfit(prices: number[]): number {
    if (prices.length === 0) {
        return prices.length;
    }

    let min = prices[0];
    let max = 0;

    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);

        max = Math.max(max, (prices[i] - min));
    }

    return max;
}
