
// Brute Force Solution
// I am sending indexes of the array element that equals to the target sum.
/*
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
*/

/*
function findTwoSum(arr: number[], target: number) {
    if (arr.length <= 1) return null;
    const obj: any = {};
    let substruction: number;

    for (const num of arr) {
        substruction = target - num;

        if (substruction in obj) {
            return [num, substruction];
        } else {
            obj[num] = true;
        }
    }
}
*/

function findTwoSum(nums: number[], target: number): number[] | null {
    const obj: any = {};
    let available, substraction;
    
    for (let i = 0; i < nums.length; i++) {
        available = obj[nums[i]];

        if (available >= 0) {
            return [ available, i ];
        } else {
            substraction = target - nums[i];
            obj[substraction] = i;
        }
    }

    return null;
}

export default findTwoSum;