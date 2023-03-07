console.clear();

const array = [10, 5, 6, 2, 0, 3, 4, 1, 9, 7, 8];

function recursive(arr: number[]): number[] | undefined {
    console.log('array', arr);
    if (arr.length === 1) return arr;

    arr.pop();
    recursive(arr);
}

function bubbleSort(arr: number[]): number[] {

    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] !== undefined && arr[j + 1] !== undefined) {
                if ( arr[j] > arr[j + 1] ) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
    }
    
    return arr;
}

function selectionSort(arr: number[]): number[] {

    for (let i = 0; i < arr.length; i++) {
        let smallest = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[smallest] > arr[j]) {
                smallest = j;
            }
        }

        if (arr[smallest] !== undefined) {
            [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        }
    }

    return arr;
}

function insertionSort(arr: number[]): number[] {

    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            } else break;
        }
    }
    
    return arr;
}

function merge(arr1: number[], arr2: number[]): number[] {
    const array: number[] = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            array.push(arr1[i]);
            i++;
        } else {
            array.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        array.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        array.push(arr2[j]);
        j++;
    }

    return array;
}

function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const first = mergeSort(arr.slice(0, mid));
    const last = mergeSort(arr.slice(mid));

    return merge(first, last);
}

const value = mergeSort(array);

function binarySearch(arr: number[], num: number): boolean {
    let start = 0;
    let end = arr.length;
    let middle = Math.floor((start + end) / 2);
    
    while (start <= end) {
        if (arr[middle] === num) {
            return true;
        }

        if (arr[middle] > num) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }

        middle = Math.floor((start + end) / 2);
    }

    return false;
}

const search = binarySearch(value, 20);
console.log('binarySearch ', search);