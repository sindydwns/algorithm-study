/**
 * @param {number} n 
 * @param {Array<Array<number>>} arr 
 */
function main(n, arr) {
    if (n == 1)
        return arr[0][0];
    const half = Math.floor(n / 2);
    const leftUp = main(half, arr.slice(0, half).map(x => x.slice(0, half)));
    const rightUp = main(half, arr.slice(0, half).map(x => x.slice(half, n)));
    const leftDown = main(half, arr.slice(half, n).map(x => x.slice(0, half)));
    const rightDown = main(half, arr.slice(half, n).map(x => x.slice(half, n)));
    if ((leftUp == "1" || leftUp == "0")
        && leftUp == rightUp
        && rightUp == leftDown
        && leftDown == rightDown)
        return leftUp;
    return `(${leftUp}${rightUp}${leftDown}${rightDown})`;
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
    lines.push(line);
});

rl.on("close", () => {
    const treeStr = main(+lines[0], lines.slice(1));
    process.stdout.write(`${treeStr}`);
    rl.close();
});
