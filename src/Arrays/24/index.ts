// This problemset has two way to approch for a solution, those are evaluate down below,

// 2. The Optimal Solution
export function trappingWaterOptimalSolution(height: number[]): number {
    if (!height || height.length === 0)
    {
        return 0;
    }

    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let trappedWater = 0;

    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);

        if (leftMax < rightMax) {
            trappedWater += leftMax - height[left];
            left++;
        } else {
            trappedWater += rightMax - height[right];
            right--;
        }
    }

    return trappedWater;
}
