// Brute Force Solution
function rainWater(arr: number[]): number {
    let total = 0;
    let maxLeft = 0;
    let maxRight = 0;
    let check;

    for (let i = 0; i < arr.length; i++) {
        maxLeft = 0;
        maxRight = 0;

        // Check the left.
        for ( let j = i - 1; j >= 0; j-- ) {
            maxLeft = Math.max(maxLeft, arr[j]);
        }

        // Check the right.
        for (let k = i + 1; k < arr.length; k++) {
            maxRight = Math.max(maxRight, arr[k]);
        }

        check = Math.min(maxLeft, maxRight) - arr[i];

        if ( check >= 0 ) {
            total += check;
        }
    }

    return total;
}

export default rainWater;