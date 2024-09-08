function findLongestPrefix(arr: string[]): string | -1 {
    let result: string | -1 = -1;
    let i = 1;

    while (true) {
        if  (i > arr[0].length) {
            break;
        }

        const currentWord = arr[0].slice(0, i);
        let match = true;

        for (let j = 1; j < arr.length; j++) {
            const slice = arr[j].slice(0, i);

            if (currentWord !== slice) {
                match = false;
                break;
            }
        }

        if (match) {
            result = currentWord;
            i++;
        } else {
            break;
        }
    }

    return result;
}

export default findLongestPrefix;
