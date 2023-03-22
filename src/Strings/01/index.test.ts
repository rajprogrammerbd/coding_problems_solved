import typedOutString from './';

describe('typedOutString', () => {
    it('should be true', () => {
        const value = typedOutString('cb#d', 'cd');

        expect(value).toBeTruthy();
    });

    it('should be true', () => {
        const value = typedOutString('ab#c', 'az#c');

        expect(value).toBeTruthy();
    });

    it('should be true', () => {
        const value = typedOutString('ab##', '');

        expect(value).toBeTruthy();
    });

    it('should be falsy', () => {
        const value = typedOutString('a###b', '');

        expect(value).toBeFalsy();
    });

    it('should be truthy - failed', () => {
        const value = typedOutString("xywrrmp", "xywrrmu#p");

        expect(value).toBeTruthy();
    });

    it('should be truthy', () => {
        const value = typedOutString("ab##", "c#d#");

        expect(value).toBeTruthy();
    });

    it('should be truthy', () => {
        const value = typedOutString("bxj##tw", "bxo#j##tw");

        expect(value).toBeTruthy();
    });
})