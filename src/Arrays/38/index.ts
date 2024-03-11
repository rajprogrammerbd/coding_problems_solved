type IProp = [number, number][];
type Single = IProp[0];

const sort = (arr: IProp, single: Single): IProp => {
    for (let i = 0; i < arr.length; i++) {
        if (single[0] < arr[i][0]) {
            arr.splice(i, 0, single);
            
            break;
        }
    }
    
    return arr;
}

function insertInterval(arr: IProp, single: Single): IProp {
    const sortedArr = sort(arr, single), result = [];

    let current = sortedArr[0];
    for (let i = 1; i < sortedArr.length; i++) {
        if (current[1] >= sortedArr[i][0]) {
            const min = current[0], max = Math.max(current[1], sortedArr[i][1]);

            const element: [number, number] = [min, max];
            
            current = element;
        } else {
            result.push(current);

            current = sortedArr[i];
        }
    }

    result.push(current);

    return result;
}

export default insertInterval;
