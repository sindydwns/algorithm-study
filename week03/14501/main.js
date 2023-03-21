/**
 * @param {number} n 
 * @param {Array<Array<number>} input 
 */
function main(n, input) {
    /**
     * @param {[]} days 
     * @param {number} today 
     * @param {number} p 
     * @returns 
     */
    const recursive = (days, today, p) => {
        if (today === n)
            return p;
        const last = days.at(-1);
        if (last != undefined && today < last + input[last][0])
            return recursive(days, today + 1, p);
        if (today + input[today][0] > n)
            return recursive(days, today + 1, p);
        const case1 = recursive(days, today + 1, p);
        const case2 = recursive([...days, today], today + 1, p + input[today][1]);
        return Math.max(case1, case2);
    }
    return recursive([], 0, 0);
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
