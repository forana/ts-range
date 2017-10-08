// Math.sign doesn't exist until ES2015
const sign = (n: number) => {
    if (n < 0) return -1;
    if (n > 0) return 1;
    return 0;
};

export default function range(end: number, start: number = 0, step: number = 1): number[] {
    // if the param order was range(start, end), typescript would require python's range(10) to be written as range(undefined, 10).
    // a little hacky silliness here to prevent a lot of silliness elsewhere.
    if (sign(end - start) !== sign(step)) {
        step = -step;
    }

    const n: number[] = [];
    for (let i = start; (start < end && i < end) || (end < start && i > end); i += step) {
        n.push(i);
    }
    return n;
}
