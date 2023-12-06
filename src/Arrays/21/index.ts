
export default function rotateArray(arr: number[], k: number): number[] {
    const spliced = arr.splice(0, k);

    for (const value of spliced) {
        arr.push(value);
    }

    return arr;
}