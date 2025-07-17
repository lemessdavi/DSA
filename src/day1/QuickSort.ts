// low and high inclusive [low, high]
// [4,6,2,1,7,0,9,5] p = 5
// [4,6,2,1,7,0,9,5] run = 1, i =1
// [4,2,6,1,7,0,9,5] run = 2, i = 2
// [4,2,6,1,7,0,9,5] run = 2, i = 3
// ...
// [4,2,1,0,7,6,9,5]

// [4,2,1,0,5,6,9,7]

function divide(arr: number[], low: number, hi: number): number {
    const pivot = arr[hi];
    let runner = low - 1;

    for (let i = low; i < hi; i++) {
        if (arr[i] <= pivot) {
            runner++;
            const tmp = arr[i];
            arr[i] = arr[runner];
            arr[runner] = tmp;
        }
    }

    runner++;
    arr[hi] = arr[runner];
    arr[runner] = pivot;

    return runner;
}

function conquer(arr: number[], low: number, hi: number) {
    // base
    if (low >= hi) {
        return;
    }

    //pre
    const pivIdx = divide(arr, low, hi);

    //recurse
    conquer(arr, low, pivIdx - 1);
    conquer(arr, pivIdx + 1, hi);
}

export default function quick_sort(arr: number[]): void {
    conquer(arr, 0, arr.length - 1);
}
