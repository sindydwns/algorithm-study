/**
 * @param {number} n 
 * @param {Array<number>} input 
 */
function main(n, input) {
    const maxArr = new Array(n).fill().map((_, i) => input[i]);
    for (const idx in input) {
        for (let i = 0; i < idx; i++) {
            if (input[idx] > input[i])
                maxArr[idx] = Math.max(maxArr[idx], maxArr[i] + input[idx])
        }
    }
    return Math.max(...maxArr);
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
    const res = main(lines[0][0], lines[1]);
    process.stdout.write(`${res}`);
    rl.close();
});
