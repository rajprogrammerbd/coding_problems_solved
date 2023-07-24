
function diagonalDifference(arr: number[][]): number {
    let total = 0;

    let maxGone = arr.length - 1, leftCount = 0;
    let level = 0, i = 0;
    let switches = false, count = 0;

    while (i >= 0) {
        if ( i <= maxGone && !switches) {
            count += arr[level][i];

            i++;
            level++;
        } else {
            if (!switches) {
                leftCount = count;
                count = 0;
                switches = true;
                level = 0;
                i--;
            }
        }
        
        if (switches) {
            count += arr[level][i];

            level++;
            i--;
        }
    }

    total = Math.max(leftCount, count) - Math.min(leftCount, count);

    return total;
}

export default diagonalDifference;
