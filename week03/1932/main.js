/**
 * @param {number} n 
 * @param {Array<Array<number>} input 
 */
function main(n, input) {
    for (let i = 1; i < input.length; i++)
        for (let k = 0; k < input[i].length; k++)
            input[i][k] += Math.max(input[i - 1][k] ?? 0, input[i - 1][k - 1] ?? 0);
    return Math.max(...input.at(-1));
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
