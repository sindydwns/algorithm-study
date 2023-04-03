const INF = 9999;
const SWITCHES = 10;
const CLOCKS = 16;
const linked = [
	"xxx.............",
	"xxx.............",
	"xxx.............",
	"xxx.............",
	"xxx.............",
	"xxx.............",
	"xxx.............",
	"xxx.............",
	"xxx.............",
	"xxx.............",
];

function push(clocks, swtch) {
	for (let clock = 0; clock < CLOCKS; clock++) {
		if (linked[swtch][clock] == 'x') {
			clocks[clock] += 3;
			if (clocks[clock] == 15) clocks[clock] = 3;
		}
	}
}

function solve(clocks, swtch) {
	if (swtch == SWITCHES)
		return areAligend(clocks) ? 0 : INF;
	let res = INF;
	for (let cnt = 0; cnt < 4; cnt++) {
		res = min(res, cnt + solve(clocks, swtch + 1));
		push(clocks, swtch);
	}
	return res;
}

