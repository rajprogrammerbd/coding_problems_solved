console.clear();
function chunk(array: number[], size: number): number[][] {
    const result = [];
    let temp = [];

    for (let i = 0; i < array.length; i++) {
        if (temp.length < size) {
            temp.push(array[i]);
        } else {
            result.push(temp);

            temp = [];

            temp.push(array[i]);
        }
    }

    if (temp.length > 0) {
        result.push(temp);
    }

    return result;
}

const value = chunk([1, 2, 3, 4, 5], 2);

console.log(value);

export default chunk;
