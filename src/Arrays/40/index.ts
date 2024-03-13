type IProp = [number, number][];

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

function conflictingAppointments(arr: IProp): boolean {
    const sort = bubbleSort(arr);

    let current = sort[0];

    for (let i = 1; i < sort.length; i++) {
        if (current[0] <= sort[i][0] && current[1] >= sort[i][0]) {
            return false;
        }
    }

    return true;
}

export default conflictingAppointments;
