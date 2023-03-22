
export default function kadanesAlgo(arr: number[]): number {
    let count = 0;
    let current = 0;

    for (let i = 0; i < arr.length; i++) {
        current += arr[i];

        current = Math.max(0, current);

        count = Math.max(count, current);
    }

    return count;
}
