

function validPalindrome(str: string): boolean {
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

export default validPalindrome;
