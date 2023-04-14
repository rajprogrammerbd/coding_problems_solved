function longestSubStringReplacement(str: string, n: number): number {
    let count = 0;
    let hash: Record<string, number> = {};
    let firstIdx = 0, lastIdx = 0;
    let nextPointer: number | undefined;
    const nVal = n;

    while (true) {
        if (hash[str[lastIdx]]) {
            hash[str[lastIdx]] = hash[str[lastIdx]] + 1;
            lastIdx++;
        } else {
            const isHashEmpty = Object.keys(hash).length;
            
            if (isHashEmpty === 0) {
                hash[str[lastIdx]] = 1;
                lastIdx++;
            } else {
                if (n > 0) {
                    hash[str[firstIdx]] = hash[str[firstIdx]] + 1;
                    n--;

                    if (!nextPointer) {
                        nextPointer = lastIdx;
                    }
                } else {
                    if (nextPointer) {
                        firstIdx = nextPointer;
                        lastIdx = nextPointer;

                        nextPointer = undefined;
                    } else {
                        firstIdx++;
                        lastIdx = firstIdx;

                        nextPointer = undefined;
                    }

                    for (const keys in hash) {
                        count = Math.max(count, hash[keys]);
                    }
                    
                    hash = {};
                    n = nVal;
                    continue;
                }

                lastIdx++;
            }
        }
        
        for (const keys in hash) {
            count = Math.max(count, hash[keys]);
        }
        
        if (str[lastIdx] === undefined) break;
    }
    
    return count;
}

export default longestSubStringReplacement;
