const delta = [
	{dx: -1, dy: -1}, {dx: -1, dy: 0}, {dx: -1, dy: 1}, {dx: 1, dy: -1},
	{dx: 1, dy: 0}, {dx: 1, dy: 1}, {dx: 0, dy: -1}, {dx: 0, dy: 1},
]

function hasWord(y, x, word) {
	if (!inRage(y, x)) return false;
	if (board[y][x] != word[0]) return false;
	if (word.size() == 1) return true;
	for (let i in delta) {
		let nextX = x + delta[i].dx;
		let nextY = y + delta[i].dy;
		if (hasWord(nextY, nextX, word.slice(1)))
			return true;
	}
	return false;
}