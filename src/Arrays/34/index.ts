
abstract class Utils {
    protected isEven(total: number): boolean {
        return (total % 2 === 0);
    }
}

class MedianOfString extends Utils {
    private nums: number[];

    constructor () {
        super();

        this.nums = [];
    }

    insertNum(num: number) {
        let contains = false;

        for (let i = 0; i < this.nums.length; i++) {
            if (this.nums[i] > num) {
                this.nums.splice(i, 0, num);
                contains = true;

                break;
            }
        }

        if (!contains) {
            this.nums.push(num);
        }
    }

    findMedian(): number {
        const isEven = this.isEven(this.nums.length);
        
        if (!isEven) {
            return this.nums[Math.floor(this.nums.length / 2)];
        } else {
            const probable_middle_idx = Math.floor((this.nums.length / 2));
            const first_num = this.nums[probable_middle_idx - 1];
            const last_num = this.nums[probable_middle_idx];
            const addition = first_num + last_num;

            return (addition / 2);
        }
    }
}

export default MedianOfString;
