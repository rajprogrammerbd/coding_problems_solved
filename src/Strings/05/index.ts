function isMatch(s: string, p: string): boolean {
    let i = 0, j = 0;
    
    while (s.length > i && p.length > j) {
        if (p[j] === '?') {
            i++;
            j++;
        } else if (p[j] === '*') {
            return true;
        } else {
            if (s[i] === p[j]) {
                i++;
                j++;
            } else {
                return false;
            }
        }
    }

    return false;
};

export default isMatch;
