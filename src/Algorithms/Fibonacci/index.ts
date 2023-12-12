export default function fibonacci(n: number, arr = [0, 1], count = 2): number[] {

    if (count < n) {
        arr.push((arr[count - 1] + arr[count - 2]));
        count++;

        return fibonacci(n, arr, count);
    } else {
        return arr;
    }
}
