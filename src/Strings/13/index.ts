function commonChild(s1: string, s2: string): number {
    let prevRow;

    for (const char1 of s1) {
        const curRow = [];
        let last = 0;
        let ind = 0;
        for (const char2 of s2) {
            let length;
            if (char1 === char2) {
                length = (prevRow?.[ind - 1] ?? 0) + 1;
            } else {
                length = Math.max(
                    last,
                    prevRow?.[ind] ?? 0
                );
            }
            curRow.push(length);
            last = length;
            ind++;
        }
        prevRow = curRow;
    }

    return prevRow?.pop() ?? 0;
}

const result = commonChild('WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS', 'FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC');
console.log(result);

export default commonChild;
