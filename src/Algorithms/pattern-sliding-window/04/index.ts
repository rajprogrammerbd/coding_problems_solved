function countValue(obj: Record<string, number>): number {
    let total = 0;
    for (const value in obj) {
        total += obj[value];
    }

    return total;
}

function fruitsIntoBaskets(arr: string[]): number {
    let count = 0;
    let left = 2;
    let obj: Record<string, number> = {};
    let firstPointer = 0, lastPointer = 0;

    while (firstPointer < arr.length) {
        if (obj[arr[lastPointer]]) {
            obj[arr[lastPointer]] = obj[arr[lastPointer]] + 1;
            lastPointer++;
        } else {
            if (left > 0) {
                obj[arr[lastPointer]] = 1;
                lastPointer++;
                left--;
            } else {
                const total = countValue(obj);

                count = Math.max(count, total);

                if (arr[lastPointer] === undefined) return count;
                
                firstPointer++;
                lastPointer = firstPointer;
                left = 2;
                obj = {};
            }
        }
    }

    return count;
}

export default fruitsIntoBaskets;
