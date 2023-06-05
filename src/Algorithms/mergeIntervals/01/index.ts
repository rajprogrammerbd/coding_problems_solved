type Array_type = [number, number];
type IParam = Array_type[];

function mergeIntervals(matrix: IParam): IParam {
    let result: IParam = [];

    const checkOverflow = (arr1: Array_type, arr2: Array_type): Array_type | false => {
        let left_leftElement = arr1[0];
        let left_rightElement = arr1[1];
        let current_leftElement = arr2[0];

        if (left_leftElement < current_leftElement && left_rightElement > current_leftElement) {
            // finding the min and max number.
            const total = arr1.concat(arr2);
            const min = Math.min(...total);
            const max = Math.max(...total); 

            return [min, max];
        } else return false;
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix.length; j++) {
            const current = matrix[i];
            const rightElement = matrix[j];

            const isOverflowing = checkOverflow(current, rightElement);

            if (isOverflowing) {
                result.push(isOverflowing);
            } else {
                result.push(rightElement);
            }
        }
    }

    return result;
}

export default mergeIntervals;
