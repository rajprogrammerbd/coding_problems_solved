export default function productExceptSelf(nums: number[]): number[] {
    const arr = new Array(nums.length).fill(1);

    let prefix = 1;
    let postfix = 1;

    for (let i = 0; i < nums.length; i++) {
        arr[i] *= prefix;
        arr[nums.length - i - 1] *= postfix;

        prefix = prefix * nums[i];
        postfix = postfix * nums[nums.length - i - 1];
    }

    return arr;
}
