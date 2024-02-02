function merge(arr1: number[][], arr2: number[][]): number[][] {
    const result = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i][0] > arr2[i][0]) {
            result.push(arr2[j]);
            j++;
        } else {
            result.push(arr1[i]);
            i++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

function mergeSort(arr: number[][]): number[][] {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

export default function mergeInterval(arr: number[][]): number[][] {
    if (arr.length <= 1) return arr;
    const sorted = mergeSort(arr);
    const result = [];

    let start = sorted[0][0];
    let end = sorted[0][1];

    for (let i = 1; i < sorted.length; i++) {
        const current = sorted[i];

        if (start <= current[0] && current[0] <= end) {
            end = current[1];
        } else {
            result.push([start, end]);

            start = current[0], end = current[1];
        }

        if (i === sorted.length - 1) {
            result.push([start, end]);
        }
    }
    
    return result;
}
