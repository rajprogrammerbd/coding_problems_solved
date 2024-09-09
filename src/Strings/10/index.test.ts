import symmetricalString from "./index";

describe('symmetricalString', () => {
    it('should return "abbba"', () => {
        const result = symmetricalString('babab');
    
        expect(result).toBe('abbba');
    });
    
    it('should return "aba"', () => {
        const result = symmetricalString('aba');
    
        expect(result).toBe('aba');
    });
    
    it('should return "xyyx"', () => {
        const result = symmetricalString('yxxy');
    
        expect(result).toBe('xyyx');
    }); 
    
    it('should return "aabbbaa"', () => {
        const result = symmetricalString('bbbaaaa');
    
        expect(result).toBe('aabbbaa');
    }); 

    it('should return "a"', () => {
        const result = symmetricalString('a');
    
        expect(result).toBe('a');
    }); 
});
