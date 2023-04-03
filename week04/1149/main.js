/**
 * @param {number} n 
 * @param {Array<Array<number>} input 
 */
function main(n, input) {
    const RED = 0;
    const GREEN = 1;
    const BLUE = 2;
    for (let i = 1; i < input.length; i++) {
        input[i][RED] += Math.min(input[i - 1][GREEN], input[i - 1][BLUE]);
        input[i][GREEN] += Math.min(input[i - 1][RED], input[i - 1][BLUE]);
        input[i][BLUE] += Math.min(input[i - 1][RED], input[i - 1][GREEN]);
    }
    return Math.min(...input[input.length - 1]);
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
    lines.push(line.split(/\s+/g).map(x => +x));
});

rl.on("close", () => {
    const res = main(lines[0][0], lines.slice(1));
    process.stdout.write(`${res}`);
    rl.close();
});
