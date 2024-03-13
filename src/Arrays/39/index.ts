type IProp = [number, number][];

const sort = (arr1: IProp, arr2: IProp): IProp => {
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j][0] > arr2[i][0]) {
                arr1.splice(j, 0, arr2[i]);
         
                break;
            }
        }
    }

    return arr1;
}

function intervalsIntersection(arr1: IProp, arr2: IProp): IProp {
    const result = [];
    const sorted = sort(arr1, arr2);
    
    let current = sorted[0];

    for (let i = 1; i < sorted.length; i++) {
        if (current[0] <= sorted[i][0] && current[1] >= sorted[i][0]) {
            // this condition means, they are mixed.
            const min = Math.max(current[0], sorted[i][0]), max = Math.min(current[1], sorted[i][1]);
            const arr: [number, number] = [min, max];

            result.push(arr);
        }

        current = sorted[i];
    }

    return result;
}

export default intervalsIntersection;