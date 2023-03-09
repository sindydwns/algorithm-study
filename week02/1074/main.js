/**
 * @param {number} n 
 * @param {number} r 
 * @param {number} c 
 * @returns 
 */
function main(n, r, c) {
    if (n == 0)
        return 0;
    const half = Math.pow(2, n - 1);
    const raise = half * half;
    const newR = r < half ? r : r - half;
    const newC = c < half ? c : c - half;
    const add = (r < half ? 0 : 2 * raise) + (c < half ? 0 : raise);
    const idx = main(n - 1, newR, newC);

    return idx + add;
}

/***************
 *    Input    *
 ***************/
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lines = [];
rl.on("line", line => {
    lines.push(line.split(" ").map(x => +x));
});

rl.on("close", () => {
    const res = main(lines[0][0], lines[0][1], lines[0][2]);
    process.stdout.write(`${res}`);
    rl.close();
});
