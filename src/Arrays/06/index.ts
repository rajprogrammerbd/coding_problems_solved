import mergeSort from "../../Algorithms/mergeSort";

// Brute Force Approch.
/*
function sortedSquaredArray(arr: number[]): number[] { // O(n log n)
    const array: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        array.push(arr[i] * arr[i]);
    }

    
    
    return mergeSort(array);
}
*/

function isFloat(value: number): boolean {
    if (value < 0) {
        return true;
    }

    return false;
}

// Optimal Way
function sortedSquaredArray(arr: number[]): number[] {
    const array: number[] = [];
    let firstPointer = 0;
    let secondPointer = arr.length - 1;
    let firstValue: number, secondValue: number;

    while (firstPointer <= secondPointer) {
        firstValue = isFloat(arr[firstPointer]) ? (arr[firstPointer] * -1) : arr[firstPointer];
        secondValue = isFloat(arr[secondPointer]) ? (arr[secondPointer] * -1) : arr[secondPointer];

        if (firstValue > secondValue) {
            array.unshift(firstValue * firstValue);
            firstPointer++;
        } else {
            array.unshift(secondValue * secondValue);
            secondPointer--;
        } 
    }

    return array;
}


export default sortedSquaredArray;
