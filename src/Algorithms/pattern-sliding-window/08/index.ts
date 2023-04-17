type HashStructure = Record<string, 0 | 1>;

function isDone(obj: HashStructure): boolean {
    for (const keys in obj) {
        if (obj[keys] === 0) {
            return false;
        }
    }

    return true;
}

function windowContainSubstring(str: string, pattern: string): string {
    let smallest: string = '';
    let tempString: string = '';
    let firstPointer = 0, lastPointer = 0;

    const hash: HashStructure = {};

    for (let i = 0; i < pattern.length; i++) {
        hash[pattern[i]] = 0;
    }

    let tempHash: HashStructure = structuredClone(hash);

    while (true) {
        const check = tempHash[str[lastPointer]];

        if (check !== undefined) {
            if (!check) {
                tempHash[str[lastPointer]] = 1;
                tempString += str[lastPointer];

                lastPointer++;

                if (isDone(tempHash)) {
                    smallest = (smallest.length < tempString.length) ? tempString : smallest;
                }

            } else {
                tempHash = structuredClone(hash);
                tempString = '';

                firstPointer = lastPointer;
            }
        } else {
            const hasStarted = tempHash[Object.keys(tempHash)[0]] > 0 ? true : false;

            if (hasStarted) {
                tempString += str[lastPointer];
                lastPointer++;
            } else {
                firstPointer++;
                lastPointer = firstPointer;
                tempString = '';
            }
        }

        if (str[lastPointer] === undefined) break;
    }

    return smallest;
}

export default windowContainSubstring;
