function fastSum(n) {
	if (n == 1) return 1;
	if (n % 2 == 1) return fastSum(n - 1) + n;
	return 2 * fastSum(n / 2) + (n / 2) * (n / 2);
}

function pow(matrix, m) {
	if (m == 0) return identity(matrix.size());
	if (m % 2 > 0) return pow(matrix, m - 1) * matrix;
	const half = pow(matrix, Math.floor(m / 2));
	return half * half;
}