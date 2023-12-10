
// Two ways to solve defined below,

// 1. Brute Force Solution
type ResultTypeArr = [number, number];
type ResultType = ResultTypeArr | null;
type IObject = {
    [type: string]: boolean;
}

export function twoSumBruteForce(arr: number[], sum: number): ResultType {
    let result: ResultType = null;

    for (let i = 0; i < arr.length - 1; i++) {
        const current = arr[i];
        const left = sum - current;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === left) {
                result = [current, arr[j]];

                return result;
            }
        }
    }

    return result;
}

// Optimal Solution
export function twoSumOptimal(arr: number[], sum: number): ResultType {
    let result: ResultType = null;
    const hash: IObject = {};

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const left = sum - current;

        if (!hash[left]) {
            hash[arr[i]] = true;
        } else {
            result = [left, current];
            return result;
        }
    }

    return result;
}