type IProp = [number, number][];
type SingleValueType = IProp[0][0];

const bubbleSort = (arr: IProp): IProp => {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j][0] > arr[j + 1][0]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

function minimumMeetingRooms(arr: IProp): SingleValueType {
    const sort = bubbleSort(arr);
    let totalNum = 1;
    const set = new Set();

    let current = sort[0];
    set.add(sort[0][1]);

    for (let i = 1; i < sort.length; i++) {
        const currentElement = sort[i];

        if (current[0] <= currentElement[0] && current[1] >= currentElement[0]) {
            // this means, overlapping existed.
            
            if (!set.has(currentElement[0])) {
                totalNum++;
            }
        }

        set.add(currentElement[1]);
        current = sort[i];
    }

    return totalNum;
}

export default minimumMeetingRooms;
