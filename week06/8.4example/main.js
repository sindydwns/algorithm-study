function jump(y, x) {
	if (y >= n || x >= n) return false;
	if (y == n - 1 && x == n - 1) return true;
	jumpSize = bard[y][x];
	return jump(y + jumpSize, x) || jump(y, x + jumpSize);
}