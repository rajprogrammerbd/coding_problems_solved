console.clear();

function noRepeatSubString(str: string): number {
    let count = 0;
    let obj: Record<string, boolean> = {};

    let firstPointer = 0, lastPointer = 0;

    while (firstPointer < str.length || lastPointer < str.length) {
        if (obj[str[lastPointer]]) {
            count = Math.max(count, (lastPointer - firstPointer));

            obj = {};
            firstPointer = lastPointer;
        } else {

            if (str[lastPointer] === undefined) return count;
            obj[str[lastPointer]] = true;
            lastPointer++;
        }
    }

    return count;
}

const value = noRepeatSubString('abccde');
console.log(value); // 3

export default noRepeatSubString;
