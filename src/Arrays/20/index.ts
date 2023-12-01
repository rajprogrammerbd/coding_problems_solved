
export default function findingAverage(arr: number[], k: number): number[] {
    let first_pointer: number = 0, last_pointer: number = 0;
    let result: number[] = [];
    let counted = 0;
    let step = 0;

    while (true) {
        if (arr[first_pointer] === undefined || arr[last_pointer] === undefined) {
            break;
        }

        if (step <= k) {
            // it would start counting the value.
            if (step === k) {
                const value = counted / k;
    
                step++;
                result.push(value);
            } else if (first_pointer === last_pointer) {
                counted = arr[first_pointer];

                last_pointer++;
                step++;
            } else {
                counted += arr[last_pointer];

                last_pointer++;
                step++;
            }
        } else {
            const first_value = arr[first_pointer];

            counted -= first_value;
            counted += arr[last_pointer];

            const value = counted / k;
            result.push(value);
            first_pointer++;
            last_pointer++;
        }
    }

    return result;
}