function isPalindrome(str: string): boolean {
    const splitedStr = str.split('').reverse().join('');

    return splitedStr === str;
}

function symmetricalString(str: string): string {
    let result = '';

    const arr = str.split('').sort();
    let i = 0;
    const middle_point = Math.floor(arr.length / 2);
    while (i <= middle_point) {
        const first_item = arr.shift();
        arr.push(first_item as string);
        const join = arr.join('');
        const check = isPalindrome(join);

        if (check) {
            result = join;
            break;
        }
        i++;
    }

    return result;
}

export default symmetricalString;
