/**
 * @param {number} n 
 * @param {Array<Array<number>>} lines 
 */
function main(n, lines) {
    const maxN = 10;
    let minCost = 1000000 * maxN;
    const visited = [];
    const costTable = lines
        .map(line => line.map((val, idx) => ({ val, idx })))
        .map(line => line.filter(x => x.val != 0))
        .map(line => line.sort((x, y) => x.val - y.val));
    const notVisited = x => visited.includes(x.idx) == false;
    const backtracking = (now, cur) => {
        const visitTargets = costTable[now].filter(notVisited);
        if (visitTargets.length == 0) {
            const target = costTable[now].find(x => x.idx == visited[0]);
            if (target == null || visited.length != n - 1)
                return;
            const total = cur + target.val;
            minCost = Math.min(minCost, total);
            return;
        }
        visited.push(now);
        for (const target of visitTargets) {
            const middleCost = cur + target.val;
            if (middleCost >= minCost)
                break;
            backtracking(target.idx, middleCost);
        }
        visited.pop();
    };
    backtracking(0, 0);
    return minCost;
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
    const cost = main(lines[0][0], lines.slice(1));
    process.stdout.write(`${cost}`);
    rl.close();
});
