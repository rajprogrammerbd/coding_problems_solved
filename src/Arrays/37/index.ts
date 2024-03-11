type IProps = [number, number][];

function mergeInterval(arr: IProps): IProps {
    const result: IProps = [];

    let current = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (current[0] < arr[i][0] && current[1] > arr[i][0]) {
            const min = Math.min(current[0], arr[i][0]);
            const max = Math.max(current[1], arr[i][1]);

            current = [min, max];
        } else {
            result.push(current);
            result.push(arr[i]);
        }
    }

    return result;
}

export default mergeInterval;
