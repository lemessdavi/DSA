export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            const numeroAtual = arr[j];
            const numeroDireita = arr[j + 1];

            if (numeroAtual > numeroDireita) {
                arr[j] = numeroDireita;
                arr[j + 1] = numeroAtual;
            }
        }
    }
}
