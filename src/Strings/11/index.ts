type IAgrs = [string[], string[]];

function maxArrayList(arr1: string[], arr2: string[]): string[] {
    const first_len = arr1.length;
    const second_len = arr2.length;

    if (first_len > second_len) {
        return arr1;
    }

    return arr2;
}

function getSequence(arr: IAgrs) {
    let i = 0, j = 0;
    const arr1 = arr[0];
    const arr2 = arr[1];

    while (i < arr1.length || j < arr2.length) {
        let currentArr1 = arr1[i];
        let currentArr2 = arr2[j];

        if (currentArr1 !== undefined) {
            const find = arr2.findIndex((v) => v === currentArr1);

            if (find !== -1) {
                arr1.splice(i, 1);
                arr2.splice(find, 1);
            } else {
                i++;
            }
        }

        currentArr1 = arr1[i];
        currentArr2 = arr2[j];

        if (currentArr2 !== undefined) {
            const find = arr1.findIndex((v) => v === currentArr2);

            if (find !== -1) {
                arr2.splice(j, 1);
                arr1.splice(find, 1);
            } else {
                j++;
            }
        }
    }

    const maxArr = maxArrayList(arr1, arr2);
    let z = 0;
    let deletedCount = 1;
    let deletedCharacter: string | undefined;
    while (z < maxArr.length) {
        if (deletedCharacter === undefined) {
            deletedCharacter = maxArr[z];
            maxArr.splice(z, 1);
            deletedCount--;
        } else {
            if (deletedCharacter === maxArr[z]) {
                maxArr.splice(z, 1);
            } else {
                z++;
            }
        }
    }

    return (maxArr.length > 0) ? [false] : [true];
}

export default getSequence;
