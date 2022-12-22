interface IObject {
    [key: string]: number;
}

// Add brute force approch.
export function longestLengthSubStringBruteForce(s: string): number {
    let longest = 0;

    for (let i = 0; i < s.length; i++) {
        const obj: IObject = {};

        for (let j = i; j < s.length; j++) {
            if (obj[s[j]] === undefined) {
                obj[s[j]] = j;
            } else {
                break;
            }
        }

        longest = Math.max(longest, Object.keys(obj).length);
    }

    return longest;
}

// Add optimal Solution.
function longestLengthSubString(s: string): number {
    let longest = 0;

    for (let i = 0; i < s.length; i++) {
        const obj: IObject = {};

        for (let j = i; j < s.length; j++) {
            if (obj[s[j]] === undefined) {
                obj[s[j]] = j;
            } else {
                break;
            }
        }

        longest = Math.max(longest, Object.keys(obj).length);
    }

    return longest;
}

export default longestLengthSubString;