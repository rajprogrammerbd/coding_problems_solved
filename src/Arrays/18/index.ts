import mergeSort from "../../Algorithms/mergeSort";

function maxPairwiseProduct(arr: number[]): number {
    let total = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const multiply = arr[i] * arr[j];

            if (multiply > total) {
                total = multiply;
            }
        }
    }

    return total;
}

export function optimizedSolutionForMaxPairwiseProduct(arr: number[]): number {
    let total = 0;

    const sorted = mergeSort(arr);

    if (sorted.length <= 1) {
        return total;
    }

    total = sorted[(sorted.length - 1)] * sorted[(sorted.length - 1) - 1];

    return total;
}

export default maxPairwiseProduct;
