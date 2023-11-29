
export default function printThePattern(n: number): string {
    let result = '';

    for (let i = n; i >= 1; i--) {
        let temp = '';

        for (let j = n; j >= 1; j--) {
            temp += `${j} `;
            temp = temp.repeat(i);

            result += temp;
            temp = '';
        }

        result += '$'
    }

    return result;
}