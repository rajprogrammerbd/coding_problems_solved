
// Brute Force Solution
function findTwoSum(arr: number[], target: number) {
    if (arr.length <= 1) return null;

    for (let i = 0; i < (arr.length - 1); i++) {
        for (let z = i + 1; z < arr.length; z++) {
            if ((arr[i] + arr[z]) === target) {
                return [i, z];
            }
        }
    }

    return null;
}

export default findTwoSum;