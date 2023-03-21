/**
 * @param {string} input1 
 * @param {string} input2 
 */
function main(input1, input2) {
    const map = Array(input1.length).fill().map(x => Array(input2.length).fill(0));
    for (const idx1 in input1) {
        for (const idx2 in input2) {
            if (input1[idx1] === input2[idx2])
                map[idx1][idx2] = (map[idx1 - 1] != null ? map[idx1 - 1][idx2 - 1] ?? 0 : 0) + 1;
            else {
                map[idx1][idx2] = Math.max(
                    map[idx1 - 1] != null ? map[idx1 - 1][idx2] : 0,
                    map[idx1][idx2 - 1] ?? 0,
                );
            }
        }
    }
    return map[input1.length - 1][input2.length - 1];
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
    const res = main(lines[0], lines[1]);
    process.stdout.write(`${res}`);
    rl.close();
});
