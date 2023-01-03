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


function checkPalindrome(str: string): boolean {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

export function almostPalindromeImplementation(str: string): boolean {

    if (str.length <= 2) {
        return true;
    }

    let start = 0;
    let end = str.length - 1;

    let ans = false;

    while (start <= end) {
        if (str[start] !==str[end]) {
            let splited: any[] = str.split('');
            splited[start] = undefined;
            const started = splited.join('');

            splited = str.split('');
            splited[end] = undefined;
            const ended = splited.join('');

            if ( checkPalindrome(started) || checkPalindrome(ended) ) {
                ans = true;
                break;
            }

        }

        start++;
        end--;
    }

    return ans;
}