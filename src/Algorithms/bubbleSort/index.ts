
function bubbleSort(arr: number[]): number[] {
    
    for (let m = 0; m < arr.length; m++) {
        for (let n = 0; n < arr.length; n++) {
            if (arr[n] !== undefined && arr[n + 1] !== undefined) {
                if (arr[n] > arr[n + 1]) {
                    [arr[n], arr[n + 1]] = [arr[n + 1], arr[n]];
                }
            }
        }
    }

    return arr;
}

export default bubbleSort;
