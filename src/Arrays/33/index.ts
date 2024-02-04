type IType = [number, number][];

function merge(arr1: IType, arr2: IType): IType {
    const result: IType = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i][0] < arr2[j][0]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

function mergeSort(arr: IType): IType {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

export default function canAttendMettings(arr: IType): boolean {
    if (arr.length <= 1) return true;
    const sorted = mergeSort(arr);
    let start = sorted[0][0], end = sorted[0][1];

    for (let i = 1; i < sorted.length; i++) {
        const current = sorted[i];

        const logic1 = start <= current[0] && end >= current[0];
        const logic2 = start <= current[1] && end >= current[1];

        const logic = logic1 || logic2;

        if (logic) {
            return false;
        } else {
            start = current[0];
            end = current[1];
        }
    }

    return true;
}
