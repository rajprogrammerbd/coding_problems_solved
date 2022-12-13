function findMinSubArray(arr: number[], sum: number): number {
    if (arr.length === 1) {
        return arr[0] >= sum ? 1 : 0;
    }

    let ans = 0;
    let total = 0;

    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        // Check the firstPointer is grater than sum parameter.
        if (arr[i] >= sum) {
            return 1;
        }

        // Adding each value of the array to the total variable.
        total += arr[i];
        index++;

        // Check if the total variable value is being greater than sum or not, if it is, then run the block,
        if (total >= sum) {
            // Update the total.
            if (ans === 0) {
                ans = index;
            } else {
                ans = Math.min(total, index);
            }

            let slice = arr.slice(0, (i + 1));
            total -= arr[slice.length - index];
            index--;
        }
    }

    return ans - 1;
}

export default findMinSubArray;
