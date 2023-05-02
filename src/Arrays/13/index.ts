
function twoSum(arr: number[], total: number): number[] | null {
    // Hash Table
    const hash = new Map();

    for (let i = 0; i < arr.length; i++) {
        const left = total - arr[i];
        const leftD = hash.get(left);

        if (leftD) {
            return [left, arr[i]];
        } else {
            hash.set(arr[i], true);
        }
    }

    return null;
}

twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10);

export default twoSum;
