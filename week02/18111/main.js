/**
 * @param {Array<Array<number>>} input 
 */
function main(input) {

    const [sizeM, sizeN, backpack] = input[0];
    const blocks = input.splice(1).flat();
    const sumFunc = (acc, cur) => acc + cur;
    const sum = blocks.reduce(sumFunc, 0);
    const avg = Math.floor(sum / (sizeM * sizeN));

    let height = avg;
    let [cost] = getCost(blocks, height);

    while (true) {
        const [newCost, extra] = getCost(blocks, height + 1);
        if (backpack + extra < 0)
            break;
        if (newCost <= cost) {
            height++;
            cost = newCost;
        } else {
            break;
        }
    }

    return [cost, height];
}

function getCost(blocks, height) {

    let addBlockCnt = 0;
    let removeBlockCnt = 0;
    for (const block of blocks) {
        if (block < height)
            addBlockCnt += height - block;
        else
            removeBlockCnt += block - height;
    }

    const cost = addBlockCnt + removeBlockCnt * 2;
    const backpack = removeBlockCnt - addBlockCnt;

    return [cost, backpack];

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
    lines.push(line.split(" ").map(x => +x));
});

rl.on("close", () => {
    const [cost, height] = main(lines);
    process.stdout.write(`${cost} ${height}`);
    rl.close();
});
