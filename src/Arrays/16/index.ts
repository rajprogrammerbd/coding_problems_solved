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

export default chunk;
