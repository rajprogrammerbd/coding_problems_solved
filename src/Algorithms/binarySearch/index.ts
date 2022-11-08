
function binarySearch(arr: number[], searchValue: number): number | boolean {
    let start = 0;
    let end = arr.length;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== searchValue && start <= end) {
        if (arr[middle] > searchValue) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }

        middle = Math.floor((start + end) / 2);
    }

    if (arr[middle] === searchValue) {
        return arr[middle];
    } else return false;
}

export default binarySearch;
