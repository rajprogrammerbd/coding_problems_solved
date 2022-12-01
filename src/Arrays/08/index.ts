console.clear();

function jumpingOnClouds(arr: number[]): number {
    // Write your code here
    let jump = 0;
    let pre, post;
    let i = 0;

    while (i < arr.length - 1) {
        if (arr[i] === 0) {
            pre = arr[i + 1];
            post = arr[i + 2];

            if (pre === 0 && post === 0) {
                jump++;
                i = i + 2;
            } else if (pre === 1 && post === 0) {
                jump++;
                i = i + 2;
            } else if (pre === 0 && post === 1) {
                jump++;
                i++;
            } else if (pre === undefined && post === undefined) {
                break;
            } else if ( pre === 0 && post === undefined ) {
                jump++;
                i++;
            } else {
                break;
            }
        } else {
            continue;
        }
    }

    return jump;
}

const value = jumpingOnClouds([0, 0, 0, 1, 0, 0]);

export default jumpingOnClouds;
