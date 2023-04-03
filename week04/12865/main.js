/**
 * @param {Array<number>} spec 
 * @param {Array<Array<number>>} input 
 */
function main(spec, input) {
    const itemAmount = spec[0];
    const backpackWeight = spec[1];
    const cache = Array(itemAmount + 1).fill().map(_ => Array(backpackWeight + 1).fill(0));
    for (let itemIdx = 1; itemIdx <= itemAmount; itemIdx++) {
        for (let w = 1; w <= backpackWeight; w++) {
            const weight = input[itemIdx - 1][0];
            const value = input[itemIdx - 1][1];
            if (weight > w) {
                cache[itemIdx][w] = cache[itemIdx - 1][w];
            } else {
                const gap = w - weight;
                cache[itemIdx][w] = Math.max(
                    cache[itemIdx - 1][gap] + value,
                    cache[itemIdx - 1][w]
                );
            }
        }
    }
    return cache[itemAmount][backpackWeight];
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
    const res = main(lines[0], lines.slice(1));
    process.stdout.write(`${res}`);
    rl.close();
});
