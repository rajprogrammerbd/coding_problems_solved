// Brute force approch.
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

export default averageOfSubArrayOfSizeK;
