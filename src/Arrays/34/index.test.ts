import MedianOfString from "./index";

describe("MedianOfString", () => {
    it('should return 2', () => {
        const m = new MedianOfString();

        m.insertNum(3);
        m.insertNum(1);
        
        expect(m.findMedian()).toBe(2);
    });

    it('should return 3', () => {
        const m = new MedianOfString();

        m.insertNum(3);
        m.insertNum(1);
        m.insertNum(5);

        expect(m.findMedian()).toBe(3);
    });

    it('should return 3.5', () => {
        const m = new MedianOfString();

        m.insertNum(3);
        m.insertNum(1);
        m.insertNum(5);
        m.insertNum(4);

        expect(m.findMedian()).toBe(3.5);
    });
});
