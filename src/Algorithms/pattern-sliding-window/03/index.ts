function longestSubstring(str: string, len: number): number {
    let count = 0;
    let char: Record<string, boolean> = {};
    let firstPointer = 0, lastPointer = 0;
    let temp = 0;
    const fixed = len;

    while (firstPointer < str.length && lastPointer < str.length) {
        if (char[str[lastPointer]]) {
            temp++;
            lastPointer++;
        } else {
            if (len > 0) {
            char[str[lastPointer]] = true;
            lastPointer++;
            temp++;
            len--;
            } else {
                count = Math.max(count, temp);

                firstPointer++;
                lastPointer = firstPointer;
                temp = 0;
                char = {};
                len = fixed;
            }
        }
    }

    return count;
}

export default longestSubstring;
