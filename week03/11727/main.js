/**
 * @param {number} n 
 */
function main(n) {
    const cache = { 0: 1, 1: 1, 2: 3 };
    const recursive = (num) => {
        if (cache[num] != null)
            return cache[num];
        cache[num] = (recursive(num - 1) + recursive(num - 2) * 2) % 10007;
        return cache[num];
    }
    const res = recursive(n);
    return res;
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
    const res = main(lines[0][0]);
    process.stdout.write(`${res}`);
    rl.close();
});
