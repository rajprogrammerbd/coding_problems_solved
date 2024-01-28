# Bubble Sort alogorithm

> **Defination:**
BubbleSort algorithm is a simple algorithm used to sort data by running loop multiple times till it's sorted all data which wasn't sorted and to do so, it swaps the current element with it's adjacent element if they matches the condition of not in correct order.

> **implementation:**

```(JavaScript)
function bubbleSort(arr) {
    if (arr.length <= 0) return arr;
    let swap;

    do {
        swap = false;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                swap = true;

                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    } while (swap);

    return arr;
}

```

```(JavaScript)
function bubbleSort(arr) {
    if (arr.length <= 0) return arr;

    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }


    return arr;
}
```
