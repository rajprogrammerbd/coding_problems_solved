export default function twoSum(nums: number[], target: number): number[] {
    const result: number[] = [];
    const hash: { [type: number]: number } = {};

    for (let i = 0; i < nums.length; i++) {
        const left = target - nums[i];

        if (hash[left] !== undefined) {
            
            return [hash[left], i];
        } else {
            hash[nums[i]] = i;
        }
    }

    return result;
}
