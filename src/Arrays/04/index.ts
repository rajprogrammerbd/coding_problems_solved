
function mostWaterContainer(nums: number[]): number {
    let max: number = 0, addition: number;

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            addition = Math.min(nums[i], nums[j]) * (j - i);

            max = Math.max(max, addition);
        }
    }

    return max;
}

export default mostWaterContainer;
