/**
 * @param {string} s1 
 * @param {string} s2 
 */
function main(s1, s2) {
	const idxs = s1.split("").reduce((acc, cur, idx) => {
		if (cur === "M") acc.push(idx);
		return acc;
	}, []);
	let res = 0;
	for (let start = 0; start < s2.length - s1.length + 1; start++)
		res += idxs.some(idx => s2[idx + start] === "M") ? 0 : 1;
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
    lines.push(line);
});

rl.on("close", () => {
    const res = main(lines[0], lines[1]);
    process.stdout.write(`${res}`);
    rl.close();
});
