const mulMatrix = (matrix1, matrix2) => {
    const n = matrix1.length;
    return Array.from(Array(n), (_, i) => {
        return Array.from(Array(n), (_, j) => {
            let sum = 0;
            for (let x = 0; x < n; x++)
                sum += matrix1[i][x] * matrix2[x][j];
            return sum % 1000;
        });
    });
};

const identity = n => {
    return Array.from(Array(n), (_, i) => {
        return Array.from(Array(n), (_, j) => {
            return i == j ? 1 : 0;
        });
    });
};

/**
 * @param {number} n 
 * @param {number} b
 * @param {Array<Array<number>>} lines 
 */
function main(n, b, a) {
    if (b == 0) return identity(n);
    if (b % 2 == 1) return mulMatrix(main(n, b - 1, a), a);
    const mat = main(n, b / 2, a);
    return mulMatrix(mat, mat);
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
    const mat = main(lines[0][0], lines[0][1], lines.slice(1));
    const matStr = mat.map(x => x.join(" ")).join("\n");
    process.stdout.write(`${matStr}`);
    rl.close();
});
