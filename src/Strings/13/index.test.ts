import commonChild from "./index";

describe('commonChild', () => {
    it('should return "3"', () => {
        const result = commonChild('ABCD', 'ABDC');

        expect(result).toBe(3);
    });

    it('should return "2"', () => {
        const result = commonChild('HARRY', 'SALLY');

        expect(result).toBe(2);
    });
    
    it('should return "0"', () => {
        const result = commonChild('AA', 'BB');

        expect(result).toBe(0);
    });

    it('should return "3"', () => {
        const result = commonChild('SHINCHAN', 'NOHARAAA');

        expect(result).toBe(3);
    });

    it('should return "2"', () => {
        const result = commonChild('ABCDEF', 'FBDAMN');

        expect(result).toBe(2);
    });
});
