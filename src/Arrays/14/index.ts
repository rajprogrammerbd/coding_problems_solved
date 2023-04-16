function validateSubsequence(arr1: number[], arr2: number[]): boolean {
    let firstPointer = arr1.length - 1,
    lastPointer = arr2.length - 1;

    while (firstPointer  >= 0 && lastPointer >= 0) {
        const search = arr2[lastPointer];

        if (arr1[firstPointer] === search) {
            firstPointer--;
            lastPointer--;
        } else {
            firstPointer--;
        }
    }

    return (lastPointer === -1) ? true : false;
}

export default validateSubsequence;
