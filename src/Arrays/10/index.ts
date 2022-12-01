
// Kadanes algorithms.
function kadanes(nums: number[]): number {
    let total = 0;
    let current = 0;

    for (let i = 0; i < nums.length; i++) {
        current = Math.max(0, current);

        current += nums[i];

        total = Math.max(current, total);
    }

    return total;
}

export default kadanes;
 