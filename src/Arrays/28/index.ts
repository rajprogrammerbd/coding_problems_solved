export default function validateSubsequence(arr1: number[], arr2: number[]): boolean {
    let first = 0;
    let last = 0;

    while (true) {
        if (arr1[first] === undefined || arr2[last] === undefined) {
            break;
        }

        if (arr1[first] === arr2[last]) {
            first++;
            last++;
        } else {
            first++;
        }
    }

    return (last === arr2.length) ? true : false;
}