import mergeSort from "../../Algorithms/mergeSort";

function countTriplets(arr: number[]): number {
    let count = 0;
    let current: number;
    let totalAddition: number[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        current = arr[i];

        for (let z = i + 1; z < arr.length; z++) {
            totalAddition.push(current + arr[z]);
        }
    }

    const sorted = mergeSort(totalAddition);

    for (let i = 0; i < sorted.length; i++) {
        if (arr.indexOf(sorted[i]) !== -1) {
            count++;
        }
    }

    return count;
}

export default countTriplets;