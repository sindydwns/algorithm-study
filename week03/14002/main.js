/**
 * @param {number} n 
 * @param {Array<number>} input 
 */
function main(n, input) {
    const maxArr = new Array(n).fill(1);
    for (const idx in input) {
        for (let i = 0; i < idx; i++) {
            if (input[idx] > input[i])
                maxArr[idx] = Math.max(maxArr[idx], maxArr[i] + 1)
        }
    }
    const max = Math.max(...maxArr);
    const res = new Array(max);
    let cur = max;
    for (let i = input.length - 1; i >= 0; i--) {
        if (maxArr[i] != cur)
            continue;
        cur--;
        res[cur] = input[i];
    }
    return [max, res]
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
    const [n, output] = main(lines[0][0], lines[1]);
    process.stdout.write(`${n}\n`);
    process.stdout.write(`${output.join(" ")}`);
    rl.close();
});
