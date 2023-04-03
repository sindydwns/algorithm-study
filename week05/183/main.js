/**
 * @param {Array<number>} num 
 */
function normalize(num) {
	num.push(0);
	for (let i = 0; i + 1 < num.length; i++) {
		if (num[i] < 0) {
			let borrow = Math.floor(Math.abs(num[i] + 9) / 10);
			num[i + 1] -= borrow;
			num[i] += borrow * 10;
		} else {
			num[i + 1] += Math.floor(num[i] / 10);
			num[i] %= 10;
		}
	}
}

/**
 * @param {Array<number>} a 
 * @param {Array<number>} b 
 */
function multiply(a, b) {
	const c = Array(a.length + b.length).fill(0);
	for (let i in a)
		for (let j in b)
			c[i + j] += a[i] * b[j];
	normalize(c);
	return c;
}

/*

	1	2	3
4	4	8	12
5	5	10	15
6	6	12	18

4	13	28	27	18

*/