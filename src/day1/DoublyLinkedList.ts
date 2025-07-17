type DLNode<T> = {
    value: T;
    next?: DLNode<T>;
    prev?: DLNode<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: DLNode<T>;
    private tail?: DLNode<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        let node: DLNode<T> = {
            value: item,
        };
        this.length++;

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("bruh");
        } else if (idx === 0) {
            this.prepend(item);
            return;
        } else if (idx === this.length) {
            this.append(item);
            return;
        }
        this.length++;

        const node = { value: item } as DLNode<T>;

        let curr = this.head;

        for (let i = 0; i <= idx && curr; i++) {
            curr = curr.next;
        }

        curr = curr as DLNode<T>;

        node.prev = curr.prev;
        node.next = curr;
        curr.prev = node;

        if (curr.next) {
            curr.next.prev = node;
        }
    }
    append(item: T): void {
        let node: DLNode<T> = {
            value: item,
        };
        this.length++;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; i < this.length && curr; i++) {
            if (curr.value === item) {
                break;
            }
            curr = curr.next;
        }

        if (!curr) {
            return undefined;
        }

        this.length--;

        if (this.length === 0) {
            this.head = this.tail = undefined;
            return;
        }

        if (curr.next) {
            curr.next.prev = curr.prev;
        }
        if (curr.prev) {
            curr.prev.next = curr.next;
        }

        if (curr === this.head) {
            this.head = curr.next;
        }

        if (curr === this.tail) {
            this.tail = curr.prev;
        }

        curr.next = curr.prev = undefined;

        return curr.value;
    }
    get(idx: number): T | undefined {
        let curr = this.head;
        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next;
        }

        return curr?.value;
    }
    removeAt(idx: number): T | undefined {
        let curr = this.head;
        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next;
        }

        if (!curr) {
            return undefined;
        }

        this.length--;

        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        if (curr.next) {
            curr.next.prev = curr.prev;
        }

        if (curr.prev) {
            curr.prev.next = curr.next;
        }

        if (curr === this.head) {
            this.head = curr.next;
        }

        if (curr === this.tail) {
            this.tail = curr.prev;
        }

        curr.next = curr.prev = undefined;

        return curr.value;
    }

    private debug() {
        let curr = this.head;
        let out = "";
        for (let i = 0; i < this.length && curr; i++) {
            out += `${i} => ${curr.value} `;
            curr = curr.next;
        }

        console.log(out);
    }
}
