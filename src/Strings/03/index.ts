function commonReplaceFunctionality(str: string): string {
    return str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
}

function validPalindrome(str: string): boolean {
    str = commonReplaceFunctionality(str);
    
    if (str.length <= 1) {
        return true;
    }

    let leftPointer = 0;
    let rightPointer = str.length - 1;
    
    while (leftPointer <= rightPointer) {
        if (str[leftPointer] !== str[rightPointer]) {
            return false;
        }

        leftPointer++;
        rightPointer--;
    }

    return true;
}

// Another functionality test way to solve the coding issue.
export function validPalindromeMiddle(str: string): boolean {
    str = commonReplaceFunctionality(str);
    const length = str.length;

    if (length <= 1) {
        return true;
    }

    const shouldHaveTwoPointer = length % 2;
    const mid = Math.floor(length / 2);

    let left = mid;
    let right = shouldHaveTwoPointer === 0 ? mid - 1 : mid;

    while (0 <= left && right <= length) {
        if (str[left] !== str[right]) {
            return false;
        }
        
        left--;
        right++;
    }

    return true;
}

export function validPalindromeDouble(str: string): boolean {
    str = commonReplaceFunctionality(str);

    if (str.length <= 1) {
        return true;
    }

    const reversed = str.split('').reverse().join('');

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== reversed[i]) {
            return false;
        }
    }

    return true;
}

export default validPalindrome;
