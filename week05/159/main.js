const coverType = [
	[[0, 0], [1, 0], [0, 1]],
	[[0, 0], [0, 1], [1, 1]],
	[[0, 0], [1, 0], [1, 1]],
	[[0, 0], [1, 0], [1, -1]],
];

function set(board, y, x, t, delta) {
	let ok = true;
	for (let i = 0; i < 3; i++) {
		const [ny, nx] = y + coverType[type][i];
		if (ny < 0 || ny >= board.length || nx < 0 || nx > board[0].length)
			ok = false;
		board[ny][nx] += delta;
		if (board[ny][nx] > 1)
			ok = false;
	}
	return ok;
}

function cover(board) {
	let x = -1;
	let y = -1;
	// 빈 공간 찾기
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] == 0) {
				y = i;
				x = j;
				break;
			}
		}
		if (y != -1) break;
	}
	// 기저
	if (y == -1) return 1;

	let res = 0;
	for (let type = 0; type < 4; type++) {
		if (set(board, y, x, type, 1))
			res += cover(board);
		set(board, y, x, type, -1);
	}
	return res;
}