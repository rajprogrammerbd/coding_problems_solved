// This problemset has two probable solution which are mentioned down below,

// Brute Force Solution 
export function mostContainerWaterBruteForce(arr: number[]): number {
    let count = 0;

    if (!arr.length) return count;
    if (arr.length === 1) return count;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const lowValue = Math.min(arr[i], arr[j]);
            const step = j - i;

            count = Math.max((lowValue * step), count);
        }
    }

    return count;
}

// Optimal Solution
export function mostContainerWaterOptimalSolution(height: number[]): number {
    let count = 0;

    let firstPointer = 0;
    let lastPointer = height.length - 1;

    while (firstPointer < lastPointer) {
        const lowValue = Math.min(height[firstPointer], height[lastPointer]);

        const space = lastPointer - firstPointer;

        count = Math.max((lowValue * space), count);

        if (height[firstPointer] > height[lastPointer]) {
            lastPointer--;
        } else {
            firstPointer++;
        }
    }

    return count;
}
