export default function tournamentWinner(strArr: [string, string][], numsArr: number[]): string {
    // Expect to return the result.
    let max = 0;
    let ans = '';
    interface IHashed {
        [key: string]: number;
    }

    const hash: IHashed = {};

    for (let i = 0; i < strArr.length; i++) {
        const idx = (numsArr[i] === 0) ? 1 : 0;

        const winnerName = hash[strArr[i][idx]];

        if (winnerName === undefined) {
            hash[strArr[i][idx]] = 3;
        } else {
            hash[strArr[i][idx]] += 3;
        }

        const value = hash[strArr[i][idx]];
        if (value > max) {
            max = value;
            ans = strArr[i][idx];
        }
    }

    return ans;
}
