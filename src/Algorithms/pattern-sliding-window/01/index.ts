
function maximumSum(arr: number[], k: number): number {
    let total = 0;
    let max = 0;
    let c = k - 1;

    for (let i = 0; i < arr.length; i++) {
        if (i < c) {
            total += arr[i];
        } else if (i === c) {
            total += arr[i];

            max = Math.max(max, total);
        } else {
            total += arr[i];
            total -= arr[i - k];

            max = Math.max(max, total);
        }
    }

    return max;
}

export default maximumSum;
