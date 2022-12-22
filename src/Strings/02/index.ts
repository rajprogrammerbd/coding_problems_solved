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
    let left = 0;

    const obj: IObject = {};

    for (let right = 0; right < s.length; right++) {
        const value = s[right];
        const available = obj[value];

        if (available >= left) {
            left = available + 1;
        }

        obj[value] = right;

        longest = Math.max(longest, (right - left) + 1);
    }

    return longest;
}

export default longestLengthSubString;