function happyNumber(num: number): boolean {
    const set = new Set();
    let current = num;

    do {
        let split = current.toString().split('');
        let total = 0;

        for (let i = 0; i < split.length; i++) {
            const current_num = Number(split[i]);

            total += (current_num * current_num);
        }
        if (total === 1) {
            return true;
        } else if (set.has(total)) {
            break;
        } else {
            set.add(total);

            current = total;
            split = current.toString().split('');
        }

        total = 0;
    } while (true);

    return false;
}

export default happyNumber;
