
// Optimal Solution.
function validationSubsequent(arr1: number[], arr2: number[]): boolean {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[0]) {
            arr2.shift();
        }
    }

    return (arr2.length === 0) ? true : false;
}

export default validationSubsequent;