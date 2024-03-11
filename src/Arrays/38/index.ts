type IProp = [number, number][];
type Single = IProp[0];

const sort = (arr: IProp, single: Single): IProp => {
    for (let i = 0; i < arr.length; i++) {
        if (single[0] < arr[i][0]) {
            arr.splice(i, 0, single);
            
            break;
        }
    }
    
    return arr;
}

function insertInterval(arr: IProp, single: Single): IProp {
    const sortedIntervals = sort(arr, single);
    
    const mergedIntervals = [];
    let currentInterval = sortedIntervals[0];
    
    for (let i = 1; i < sortedIntervals.length; i++) {
        const nextInterval = sortedIntervals[i];
        
        if (currentInterval[1] >= nextInterval[0]) {
            // Overlapping intervals, merge them
            currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
        } else {
            // Non-overlapping intervals, add currentInterval to result
            mergedIntervals.push(currentInterval);
            currentInterval = nextInterval;
        }
    }
    
    mergedIntervals.push(currentInterval);
    
    return mergedIntervals;
}

export default insertInterval;
