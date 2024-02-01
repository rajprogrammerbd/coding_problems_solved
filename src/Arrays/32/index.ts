export default function ransomNode(str1: string, str2: string): boolean {
    const map = new Map<string, number>();
    
    // add all characters of str2 to map object.
    for (let i = 0; i < str2.length; i++) {
        const character = str2[i];

        if (map.has(character)) {
            const value = map.get(character);

            map.set(character, value! + 1);
        } else {
            map.set(character, 1);
        }
    }
    
    // Check str1 all characters is in the map or not and also take its value as in consideration.
    for (const character of str1.split('')) {
        if (!map.has(character)) {
            return false;
        }

        const value = map.get(character)!;

        if (value > 1) {
            map.set(character, value - 1);
        } else {
            map.delete(character);
        }
    }
    
    return true;
}
