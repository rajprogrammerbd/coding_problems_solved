/*
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
*/

function mostWaterContainer(nums: number[]) {
    let total = 0, leftIndex = 0, rightIndex = nums.length - 1;

    while (leftIndex < rightIndex) {
        let element = Math.min(nums[leftIndex], nums[rightIndex]);

        total = Math.max(total, (element * nums.slice(leftIndex, rightIndex).length));

        if(nums[leftIndex] <= nums[rightIndex]) {
            leftIndex++;
          } else {
            rightIndex--;
          }
    }

    return total;
}

export default mostWaterContainer;
