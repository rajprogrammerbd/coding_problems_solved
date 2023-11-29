import printThePattern from './';

describe('test the printThePattern function', () => {
    it('would return \'2 2 1 1 $2 1 $\'', () => {
        const result = printThePattern(2);

        expect(result).toBe('2 2 1 1 $2 1 $');
    });
});