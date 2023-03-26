function sum(num: number): number {
    let total = 0;
    const str = num.toString().split('');
    
    for (let i = 0; i < str.length; i++) {
        let number = Number(str[i]);
        total += number * number;
    }
    
    return total;
}


function happyNumber(num: number): boolean {
    let slow = num, fast = num;
    
    do {
        slow = sum(slow);
        fast = sum(sum(fast));
    } while (slow !== fast);

    return slow === 1;
}

export default happyNumber;
