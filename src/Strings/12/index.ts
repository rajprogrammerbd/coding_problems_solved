type IObject = {
    [key: string]: number;
}

function encryptString(S: string): string {
    const hash: IObject = {}

    for (let i = 0; i < S.length; i++) {
        const currentCharacter = S[i];
        const check = hash[currentCharacter];

        if (check === undefined) {
            hash[currentCharacter] = 1;
        } else {
            hash[currentCharacter] = hash[currentCharacter] + 1;
        }
    }

    let result = '';
    const keys = Object.keys(hash);
    for (let j = keys.length - 1; j >= 0; j--) {
        const currentCharacter = keys[j];
        const currentValue = hash[currentCharacter];
        const convertedHexValue = currentValue.toString(16);
        result += (convertedHexValue + currentCharacter);
    }

    return result;
}

export default encryptString;
