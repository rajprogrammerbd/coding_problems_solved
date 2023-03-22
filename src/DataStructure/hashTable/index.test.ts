import HashMap from ".";

describe('HashMap', () => {
    it('should have empty value', () => {
        const hash = new HashMap();

        expect(hash.keyMap).toEqual([]);
    });

    it('should have hash the key and store the value', () => {
        const value = new HashMap();

        const obj = {
            key: 'name',
            value: 'demo'
        };

        value.set(obj.key, obj.value);

        expect(value.get('unknown')).toBeUndefined();
        expect(value.get(obj.key)).toBe(obj.value);
        expect(value.keys()).toEqual(expect.arrayContaining([obj.key]));
        expect(value.values()).toEqual(expect.arrayContaining([obj.value]));
    });
});
