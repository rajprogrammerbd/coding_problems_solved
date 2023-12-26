export default function optimalSortedSquredArray(arr: number[]): number[] {
    const array = new Array(arr.length).fill(0);

    let first = 0, last = arr.length - 1;
    let step = arr.length - 1;

    while (first <= last) {
        const first_val = Math.abs(arr[first]);
        const last_val = Math.abs(arr[last]);

        if (first_val > last_val) {
            array[step] = first_val * first_val;
            
            first++;
        } else {
            array[step] = last_val * last_val;

            last--;
        }

        step--;
    }

    return array;
}
