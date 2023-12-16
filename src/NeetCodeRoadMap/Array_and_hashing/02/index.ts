export default function isAnagram(s: string, t: string): boolean {
    const hash: { [type: string]: number } = {};

    // add all element of t
    for (let i = 0; i < t.length; i++) {
        if (hash[t[i]] === undefined) {
            hash[t[i]] = 0;
        } else {
            hash[t[i]] = hash[t[i]] + 1;
        }
    }

    for (let j = 0; j < s.length; j++) {
        if (hash[s[j]] === undefined) {
            return false;
        } else {
            if (hash[s[j]] > 0) {
                hash[s[j]] = hash[s[j]] - 1;
            } else {
                delete hash[s[j]];
            }
        }
    }

    return (Object.keys(hash).length  > 0) ? false : true;
};