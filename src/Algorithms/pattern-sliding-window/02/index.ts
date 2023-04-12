function smallestSubArray(arr: number[], S: number): number {
    let max = 0;
    let temp = 0;
    let count = 0;

    let firstPointer = 0;
    let secondPointer = 0;

    while (firstPointer < arr.length && secondPointer < arr.length) {
        if (arr[secondPointer] >= S) {
            return 1;
        }
        
        if (temp < S) {
            temp += arr[secondPointer];
            secondPointer++;
            count++;
        } else {
            if (max === 0) {
                max = Math.max(max, count);
            } else {
                max = Math.min(max, count);
            }

            firstPointer++;
            secondPointer = firstPointer;
            count = 0;
            temp = 0;
        }
    }

    return max;
}

export default smallestSubArray;