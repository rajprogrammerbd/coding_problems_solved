
function targetedSum(arr: number[], target: number): number[] {
    const res: number[] = [];
    const hash = new Map();

    for (let i = 0; i < arr.length; i++) {
        const addition = target - arr[i];

        if (hash.has(addition)) {
            const found = hash.get(addition);
            
            res.push(found);
            res.push(i);
            break;
        } else {
            hash.set(arr[i], i);
        }
    }

    return res;
}

export default targetedSum;
