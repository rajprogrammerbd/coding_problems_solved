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
