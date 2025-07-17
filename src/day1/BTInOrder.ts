export default function in_order_search(head: BinaryNode<number>): number[] {
    const visitedNodes: number[] = [];

    recurse(visitedNodes, head);

    return visitedNodes;
}

function visitNode(node: BinaryNode<number>, visitedNodes: number[]) {
    visitedNodes.push(node.value);
}

function recurse(visitedNodes: number[], node: BinaryNode<number> | null) {
    if (!node) {
        return;
    }
    recurse(visitedNodes, node.left);
    visitNode(node, visitedNodes);
    recurse(visitedNodes, node.right);
}
