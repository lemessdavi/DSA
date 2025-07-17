export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));
    let breakpoint = -1;

    // first ball
    for (
        let currentFloor = jmpAmount;
        currentFloor < breaks.length;
        currentFloor += jmpAmount
    ) {
        if (breaks[currentFloor]) {
            breakpoint = currentFloor;
            break;
        }
    }

    // didnt break
    if (breakpoint == -1) {
        return breakpoint;
    }

    //second ball
    for (
        let currentFloor = breakpoint - jmpAmount;
        currentFloor < breakpoint;
        currentFloor++
    ) {
        if (breaks[currentFloor]) {
            return currentFloor;
        }
    }

    return breakpoint;
}
