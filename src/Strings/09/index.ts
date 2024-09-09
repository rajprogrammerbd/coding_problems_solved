function rules() {

}

function convertRomanNumberToIntegers(roman: string): number {
    const romanMap: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    // Loop through each character in the Roman numeral string
    for (let i = roman.length - 1; i >= 0; i--) {
        const currentValue = romanMap[roman[i]];

        // If current value is less than the previous one, subtract it
        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            // Otherwise, add it to the total
            total += currentValue;
        }

        prevValue = currentValue;
    }

    return total;
}

export default convertRomanNumberToIntegers;
