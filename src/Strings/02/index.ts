interface IObject {
    [key: string]: boolean;
}

function longestLengthSubString(s: string): number {
    let count = 0;

    if (s.length === 0) {
        return count;
    }

    let current: string;
    let prev: string | undefined;

    let main: IObject = {};

    let i = 0;
    while (i < s.length) {
        current = s[i];
        prev = s[i - 1];

        if (main[current] === undefined) {
            main[current] = true;

            if (s[i + 1] === undefined) {
                count = Math.max(count, Object.keys(main).length);
            }
        } else {
            count = Math.max(count, Object.keys(main).length);

            main = {};

            if (current === prev) {
                main[current] = true;
            } else {
                main[prev] = true;
                main[current] = true;
            }
        }

        i++;
    }

    return count;
}

export default longestLengthSubString;