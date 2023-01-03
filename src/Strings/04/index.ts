export default function almostPalindrome(str: string): boolean {
    if (str.length <= 2) {
        return true;
    }

    let left = 0;
    let right = str.length - 1;
    let updated = false;

    while (left < right) {
        if (str[left] !== str[right]) {
            const nextLeft: undefined | string = str[left + 1];
            const prevRight: undefined | string = str[right - 1];

            if (updated) {
                return false;
            }

            if ( str[left] === prevRight ) {
                right--;
            } else if (str[right] === nextLeft) {
                left++;
            }

            updated = true;


        } else {
            left++;
            right--;
        }
    }
    
    return true;
}
function checkPalindromes(str: string, start: number, end: number): boolean {
    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }

        start++;
        end--;
    }

    return true;
}

export function almostPalindromeImplementation(str: string): boolean {

    if (str.length <= 2) {
        return true;
    }

    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !==str[end]) {
            return checkPalindromes(str, start + 1, end) || checkPalindromes(str, start, end - 1);
        }

        start++;
        end--;
    }

    return true;
}