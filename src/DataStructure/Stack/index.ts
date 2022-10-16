
export default class Stack {
    private data: number[];

    constructor () {
        this.data = [];
    }

    push(val: number) {
        this.data.push(val);
        return val;
    }

    pop() {
        const last = this.data[this.data.length - 1];
        this.data.pop();
        return last;
    }

    get allData() {
        return this.data;
    }
}