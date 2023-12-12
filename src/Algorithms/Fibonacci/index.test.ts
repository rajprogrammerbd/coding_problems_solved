import fibonacci from './index';

describe('fibonacci', () => {
    it('should return [0, 1]', () => {
        const result = fibonacci(2);

        expect(result).toEqual(expect.arrayContaining([0, 1]));
    });

    it('should return [0, 1, 1, 2, 3, 5, 8]', () => {
        const result = fibonacci(7);

        expect(result).toEqual(expect.arrayContaining([0, 1, 1, 2, 3, 5, 8]));
    });
});
