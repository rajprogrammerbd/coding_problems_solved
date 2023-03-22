
function repeatedString(s: string, n: number): number {
    if (s === 'a') {
        return n;
    }

    let aInStr = 0;
    let rest, totalDivs;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a") {
            aInStr++;
        }
    }

    rest = n % s.length;

    totalDivs = (n - rest) / s.length;

    if (rest === 0) {
        return aInStr * totalDivs;
    }

    let slice = s.slice(0, rest);

    const filtered = slice.split('').filter((txt: string) => {
        if (txt === 'a') {
            return txt;
        }
    })

    return filtered.length + (aInStr * totalDivs);
}

export default repeatedString;
