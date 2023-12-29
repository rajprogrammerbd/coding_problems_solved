
export default function breakingRecords(scores: number[]): number[] {
    let init = scores[0];
    let minium = scores[0];
    let maximum = scores[0];
    let min = 0, max = 0;


    for (let i = 1; i < scores.length; i++) {
        if (init > scores[i]) {
            // min
            if (minium > scores[i]) {
                minium = scores[i];
                min++;
            }
        } else if (init === scores[i]) {
            continue;
        } else {
            // max
            if (maximum < scores[i]) {
                maximum = scores[i];
                max++;
            }
        }
    }

    return [max, min];
}
