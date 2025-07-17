type Point = {
    x: number;
    y: number;
};

// Maze Example:
//  [
//   "# # # # # # E # #",
//   "#               #",
//   "# S # # # # # # #",
// ]
const dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // 1 Base Case
    // 1.1 out of bounds
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length || // check if we are outside of bounds horzontally (length of the string)
        curr.y < 0 ||
        curr.y >= maze.length // check if we are outside of bounds vertically (length of the array it selg i.g. number of floors)
    ) {
        return false;
    }

    // 1.2 it is a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // 1.3 we saw this postion
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // 1.4 is the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true;
    }

    // 2. Recursion
    // 2.1 pre
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // 2.2 recurse
    for (let i = 0; i < dir.length; i++) {
        const [y, x] = dir[i];
        if (
            walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)
        ) {
            return true;
        }
    }

    // 2.3 pos
    path.pop();
    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[i].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}

// x = floor / vertical
// y = square / horizontal
