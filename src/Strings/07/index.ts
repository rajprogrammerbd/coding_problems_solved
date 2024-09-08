
function reverseString(str: string): string {
    const reverse = str.split(' ').reverse().join(' ');

    return reverse;
}

export default reverseString;
