import tournamentWinner from './index';

describe('tournamentWinner', () => {
    it('should return python', () => {
        const compitiions: [string, string][] = [
            ["HTML", "C#"],
            ["C#", "Python"],
            ["Python", "HTML"]
        ];
        const numsArr = [0, 0, 1];

        const result = tournamentWinner(compitiions, numsArr);

        expect(result).toBe("Python");
    })
});
