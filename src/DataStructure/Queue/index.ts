interface IObject {
    value: number;
    left: any;
    right: any;
}

export default class Queue {
    private data: IObject[];

    constructor () {
        this.data = [];
    }

    push(val: IObject) {
        this.data.unshift(val);

        return val;
    }

    pop() {
        const last = this.data[this.data.length - 1];
        this.data.pop();

        return last;
    }

    allData() {
        return this.data;
    }
}