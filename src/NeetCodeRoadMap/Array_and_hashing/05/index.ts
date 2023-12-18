export default function topKFrequent(nums: number[], k: number): any {
    const lists: [number, number][] = [];

    for (let i = 0; i < nums.length; i++) {
        const search = lists.filter((list: [number, number]) => {
            if (list[0] === nums[i]) {
                list[1] = list[1] + 1;

                return list;
            }
        });

        if (search.length === 0) {
            lists.push([nums[i], 1]);
        }
    }

    function quickSortFn(arr: [number, number][]): [number, number][] {
        if (arr.length <= 1) return arr;
    
        const pivot = arr[Math.floor(arr.length / 2)];
        const left = arr.filter(element => element[1] < pivot[1]);
        const middle = arr.filter(element => element[1] === pivot[1]);
        const right = arr.filter(element => element[1] > pivot[1]);
    
        return quickSortFn(right).concat(middle, quickSortFn(left));
    }

    const sorted = quickSortFn(lists);
    const result = [];

    for (let i = 0; i < k; i++) {
        result.push(sorted[i][0]);
    }

    return result;
};
