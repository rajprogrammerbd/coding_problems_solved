// Brute force approch.
console.clear();
/*
function averageOfSubArrayOfSizeK(k: number, arr: number[]): number[] {
    let myArr: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        let total = 0;

        for (let j = i; j < (i + k) && arr[j] !== undefined; j++) {
            total += arr[j];
        }

        myArr.push(total / k);
    }

    return myArr;
}
*/


// Optimized solution
function averageOfSubArrayOfSizeK(k: number, arr: number[]): number[] {
    const result: number[] = [];
    const limit = arr.length - k;
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i < limit) {
            total += arr[i];
        } else if (i === limit) {
            total += arr[i];
            result.push(total / k);
        } else {
            total = total - arr[i - k];
            total = total + arr[i];
            
            result.push(total / k);
        }
    }

    return result;
}

export default averageOfSubArrayOfSizeK;
