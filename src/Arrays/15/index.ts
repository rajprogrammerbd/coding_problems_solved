
function sortedSequreArray(arr: number[]): number[] {
    const array: number[] = [];
    
    for (let i = 0; i < arr.length; i++) {
        array.push(arr[i] * arr[i]);
    }

    return array;
}

export default sortedSequreArray;
