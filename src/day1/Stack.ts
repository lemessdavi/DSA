type SNode<T> = {
    value: T;
    prev?: SNode<T>;
};

// Ex: A < B < C < D, with D being our head.

export default class Stack<T> {
    public length: number;
    private head?: SNode<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const node = { value: item } as SNode<T>;
        this.length++;

        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;

        const oldHeadValue = this.head.value;
        this.head = this.head.prev;

        return oldHeadValue;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
