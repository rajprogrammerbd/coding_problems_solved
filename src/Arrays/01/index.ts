
function subArraysSum(arr: number[], s: number): boolean | number[] {
    const total: number[] = [];
    let current: number;

    for (let i = 0; i < arr.length - 1; i++) {
        current = arr[i];

        for (let z = i + 1; z < arr.length; z++) {
            current += arr[z];
            if (current === s) {

                total.push(i + 1, z + 1);
                return total;
            }

            if (current > s) {
                break;
            }
        }
    }

    return false;
}

export default subArraysSum;
