
function permutationPattern(str: string, p: string): boolean {
    let lastPointer = 0;
    let obj: Record<string, number> = {};

    for (let i = 0; i < p.length; i++) {
        obj[p[i]] = (obj[p[i]] !== undefined) ? obj[p[i]] + 1 : 1;
    }

    let temp: Record<string, number> = structuredClone(obj);

    while (true) {
        if (temp[str[lastPointer]]) {
            if (temp[str[lastPointer]] > 1) {
                temp[str[lastPointer]] = temp[str[lastPointer]] - 1;
            } else {
                delete temp[str[lastPointer]];
            }

            lastPointer++;

            if (Object.keys(temp).length <= 0) {
                return true;
            }
        } else {
            temp = structuredClone(obj);
            lastPointer++;
        }

        if (str[lastPointer] === undefined) {
            break;
        }
    }

    return false;
}

export default permutationPattern;
