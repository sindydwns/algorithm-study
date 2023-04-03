function sum(n) {
	let ret = 0;
	for (let i = 1; i <= n; ++i) {
		ret += i;
	}
	return ret;
}

function recursiveSum(n) {
	if (n === 1) return 1;
	return n + recursiveSum(n - 1);
}